#!/usr/bin/env node
/**
 * Design Engineer: Post-write validation hook
 * Validates UI file writes against .design/system.md
 */

const fs = require('fs');
const path = require('path');

const UI_EXTENSIONS = ['.tsx', '.jsx', '.vue', '.svelte', '.css', '.scss'];

function parseSystemFile(systemPath) {
  if (!fs.existsSync(systemPath)) return null;

  const content = fs.readFileSync(systemPath, 'utf-8');
  const system = {
    depth: 'unknown',
    colors: [],
    spacingBase: 4
  };

  // Parse depth strategy
  if (content.includes('Depth: Borders-only') || content.includes('borders-only')) {
    system.depth = 'borders-only';
  } else if (content.includes('Depth: Subtle') || content.includes('subtle shadows')) {
    system.depth = 'subtle-shadows';
  } else if (content.includes('Depth: Layered') || content.includes('layered shadows')) {
    system.depth = 'layered-shadows';
  }

  // Extract hex colors from tokens section
  const hexMatches = content.match(/#[0-9a-fA-F]{6}/g) || [];
  system.colors = [...new Set(hexMatches.map(c => c.toLowerCase()))];

  return system;
}

function validateContent(content, system, filePath) {
  const violations = [];

  // Check for shadows when borders-only
  if (system.depth === 'borders-only') {
    if (content.includes('box-shadow') && !content.includes('box-shadow: none')) {
      // Allow ring shadows (0 0 0 Xpx) as they're border-like
      const shadowMatch = content.match(/box-shadow:\s*([^;]+)/g) || [];
      for (const shadow of shadowMatch) {
        if (!shadow.includes('0 0 0') && !shadow.includes('inset')) {
          violations.push({
            type: 'depth',
            message: 'Shadow detected but system uses borders-only depth strategy',
            suggestion: 'Use border instead: border: 0.5px solid rgba(0,0,0,0.08)'
          });
          break;
        }
      }
    }

    // Check Tailwind shadow classes
    if (/\bshadow-(sm|md|lg|xl|2xl)\b/.test(content)) {
      violations.push({
        type: 'depth',
        message: 'Tailwind shadow class used but system is borders-only',
        suggestion: 'Use border classes instead'
      });
    }
  }

  // Check spacing (px values not on 4px grid)
  const pxMatches = content.matchAll(/[:\s](\d+)px/g);
  const seenValues = new Set();
  for (const match of pxMatches) {
    const value = parseInt(match[1]);
    // Allow 1px (borders), 0px, and values on 4px grid
    if (value !== 0 && value !== 1 && value % 4 !== 0 && !seenValues.has(value)) {
      seenValues.add(value);
      violations.push({
        type: 'spacing',
        message: `${value}px is not on 4px grid`,
        suggestion: `Use ${Math.round(value / 4) * 4}px instead`
      });
    }
  }

  // Check for hex colors not in system (if system has colors defined)
  if (system.colors.length > 0) {
    const contentHexColors = content.match(/#[0-9a-fA-F]{6}/gi) || [];
    const seenColors = new Set();
    for (const color of contentHexColors) {
      const lowerColor = color.toLowerCase();
      if (!system.colors.includes(lowerColor) && !seenColors.has(lowerColor)) {
        seenColors.add(lowerColor);
        violations.push({
          type: 'color',
          message: `Color ${color} not in design system palette`,
          suggestion: 'Use a color from .design/system.md tokens'
        });
      }
    }
  }

  // Check for anti-patterns
  if (/box-shadow:\s*[^;]*\b25px\b/.test(content)) {
    violations.push({
      type: 'anti-pattern',
      message: 'Dramatic shadow detected (25px+)',
      suggestion: 'Use subtle shadows: 0 1px 3px rgba(0,0,0,0.08)'
    });
  }

  if (/border-radius:\s*(16|20|24|32)px/.test(content)) {
    violations.push({
      type: 'anti-pattern',
      message: 'Large border radius detected (16px+)',
      suggestion: 'Use system scale: 4px, 6px, or 8px for sharp; 8px, 12px for soft'
    });
  }

  return violations;
}

function main() {
  const cwd = process.cwd();
  const systemPath = path.join(cwd, '.design', 'system.md');

  const system = parseSystemFile(systemPath);
  if (!system) {
    // No design system, skip validation
    process.exit(0);
  }

  // Get the file that was written (passed as argument)
  const targetFile = process.argv[2];
  if (!targetFile) {
    process.exit(0);
  }

  // Check if it's a UI file
  const ext = path.extname(targetFile);
  if (!UI_EXTENSIONS.includes(ext)) {
    process.exit(0);
  }

  if (!fs.existsSync(targetFile)) {
    process.exit(0);
  }

  const content = fs.readFileSync(targetFile, 'utf-8');
  const violations = validateContent(content, system, targetFile);

  if (violations.length > 0) {
    console.error('\n=== DESIGN SYSTEM VIOLATIONS ===\n');
    for (const v of violations) {
      console.error(`  [${v.type}] ${v.message}`);
      console.error(`    -> ${v.suggestion}\n`);
    }
    console.error('Fix these issues to maintain design consistency.\n');
    console.error('================================\n');
    process.exit(1); // Block the write
  }

  process.exit(0);
}

main();
