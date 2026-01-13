---
description: Check code against design system
allowed-tools: Read, Glob, Grep
argument-hint: <path>
---

# Design Audit

Check existing code against the established design system.

## Arguments

$ARGUMENTS — Path to audit (file or directory)

## Steps

1. **Load design system**
   - Read `.design/system.md`
   - If not found: "No design system. Run /design extract first."

2. **Scan target files**
   - If directory, find all UI files (.tsx, .jsx, .css, .scss, .vue, .svelte)
   - Read each file

3. **Check for violations**

   For each file, check:

   **Colors:**
   - Extract hex values, rgb(), Tailwind color classes
   - Compare against system palette
   - Flag any not in system

   **Spacing:**
   - Extract px values from padding, margin, gap
   - Check against 4px grid (allow 0, 1px)
   - Flag values not on grid

   **Depth:**
   - If system is borders-only, flag shadows
   - Check Tailwind shadow classes

   **Typography:**
   - Check font-size values against system scale
   - Check font-weight values

   **Border Radius:**
   - Check against system scale

   **Anti-patterns:**
   - Dramatic shadows (25px+)
   - Large radius on small elements (16px+)
   - Multiple accent colors

4. **Report findings**

   ```
   DESIGN ENGINEER v1.0.0

   AUDIT: [path]

   Scanned: [n] files

   [check] Spacing: [n] values checked, all on grid
   [check] Typography: all sizes in scale
   [x] Colors: [n] off-system values
     - [file]:[line] -> [color] (not in palette)
   [x] Depth: [n] violations
     - [file]:[line] -> shadow (system is borders-only)

   [n] violations in [n] files.
   ```

5. **If clean**

   ```
   DESIGN ENGINEER v1.0.0

   AUDIT: [path]

   Scanned: [n] files

   [check] All checks passed

   Design system compliance: 100%
   ```
