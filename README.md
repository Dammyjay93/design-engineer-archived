<h1 align="center">design-engineer</h1>

<h4 align="center">Design engineering for <a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank">Claude Code</a></h4>

<p align="center">
  <a href="https://github.com/Dammyjay93/design-engineer/releases">
    <img src="https://img.shields.io/github/v/release/Dammyjay93/design-engineer" alt="Release">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
</p>

<p align="center">
  Craft · Direction · Memory · Enforcement
</p>

<p align="center">
  Build interfaces with intention. Maintain consistency across sessions. Catch drift before it compounds.
</p>

---

## Quick Start

```
/plugin marketplace add Dammyjay93/oakinleye
/plugin install design-engineer
```

Restart Claude Code. Your design context will load automatically in future sessions.

---

## Key Features

- **Direction Framework** — Commit to a design personality before building (Precision, Warmth, Sophistication)
- **Craft Principles** — 4px grid, typography scale, contrast hierarchy, depth strategies
- **Persistent Memory** — Design decisions saved to `.ds-engineer/system.md` and loaded each session
- **Enforcement** — Hooks validate writes against your design system
- **Audit** — Check existing code for design system compliance
- **Artifact Generation** — Generate `tokens.css` and `tailwind.preset.js` from your system

---

## Commands

| Command | Description |
|---------|-------------|
| `/ds-engineer` | Smart dispatcher — shows status or suggests actions |
| `/ds-engineer status` | Show current design system state |
| `/ds-engineer audit <path>` | Check code against design system |
| `/ds-engineer extract` | Extract patterns from existing code into a system |
| `/ds-engineer generate` | Generate tokens.css, tailwind.preset.js |

---

## How It Works

### 1. Direction

Before building, commit to a design direction:

| Product Type | Direction | Foundation | Depth |
|--------------|-----------|------------|-------|
| Developer tool | Precision & Density | Cool (slate) | Borders-only |
| Consumer app | Warmth & Approachability | Warm (stone) | Subtle shadows |
| Finance/Enterprise | Sophistication & Trust | Cool (slate) | Layered shadows |

### 2. Craft

The skill applies craft principles automatically:

- **4px grid** — All spacing on 4, 8, 12, 16, 24, 32, 64
- **Typography scale** — 12, 13, 14, 16, 18, 24, 32
- **Contrast hierarchy** — Foreground → Secondary → Muted → Faint
- **Depth strategy** — Borders-only, subtle shadows, or layered
- **Animation** — 150ms micro, 200ms standard, 250ms larger

### 3. Memory

After your first build, the plugin offers to save your decisions:

```
.ds-engineer/
└── system.md    # Direction, tokens, patterns, decisions
```

Future sessions read this file automatically via the session-start hook.

### 4. Enforcement

**Self-validation** — The skill checks its own output before finishing.

**Post-write hook** — Validates UI file writes against your system:
- Colors not in palette
- Spacing off 4px grid
- Shadows when system is borders-only
- Anti-patterns (dramatic shadows, large radius)

---

## The System File

`.ds-engineer/system.md` captures your design system:

```markdown
# Design System

## Direction
Personality: Precision & Density
Foundation: Cool (slate)
Depth: Borders-only
Accent: blue-600

## Tokens

### Colors
--foreground: slate-900
--secondary: slate-600
--muted: slate-400
--faint: slate-200
--accent: blue-600

### Spacing
Base: 4px
Scale: 4, 8, 12, 16, 24, 32, 64

## Patterns
- Cards: 0.5px border, 6px radius, 16px padding
- Buttons: 36px height, 4px radius

## Decisions
| Decision | Rationale | Date |
|----------|-----------|------|
| Borders over shadows | Technical feel for dev tool | 2026-01-12 |
```

---

## Generated Artifacts

Run `/ds-engineer generate` to create consumable files:

**`.ds-engineer/tokens.css`** — CSS custom properties
```css
:root {
  --color-foreground: #0f172a;
  --color-secondary: #475569;
  --space-4: 16px;
  /* ... */
}
```

**`.ds-engineer/tailwind.preset.js`** — Tailwind preset
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        foreground: 'var(--color-foreground)',
        /* ... */
      }
    }
  }
}
```

---

## Anti-Patterns

The skill avoids and catches:

- Dramatic shadows (`0 25px 50px...`)
- Large radius on small elements (16px+ on buttons)
- Multiple accent colors
- Off-grid spacing (14px, 18px)
- Spring/bounce animations
- Generic AI aesthetics (purple gradients, Inter everywhere)

---

## Architecture

```
design-engineer/
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   ├── ds-engineer.md         # Smart dispatcher
│   └── ds-engineer/
│       ├── status.md
│       ├── audit.md
│       ├── extract.md
│       └── generate.md
├── hooks/
│   ├── inject-context.sh      # Session start: load .ds-engineer/system.md
│   └── validate-design.js     # Post-write: validate against system
├── skills/
│   └── design-engineer/
│       └── SKILL.md           # The craft principles + creative layer
└── reference/
    ├── principles.md
    └── anti-patterns.md
```

---

## Philosophy

**Craft quality** — Every interface should look designed by a team that obsesses over 1-pixel differences.

**System thinking** — Every decision compounds. Build patterns, not one-offs.

**Memory** — What you decide today should inform tomorrow's work.

**Enforcement** — Structure without enforcement is just documentation.

---

## Related

Part of the [oakinleye](https://github.com/Dammyjay93/oakinleye) plugin collection.

See also: [claudepm](https://github.com/Dammyjay93/claudepm) — Project management for Claude Code.

---

## License

MIT License. See [LICENSE](LICENSE) for details.
