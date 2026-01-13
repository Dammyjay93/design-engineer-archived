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
  Intention · Consistency · Memory
</p>

<p align="center">
  Make design decisions once. Have them remembered and enforced across sessions.
</p>

---

## What This Does

When you build UI with Claude, decisions get made — colors, spacing, depth, typography. Without structure, those decisions drift. You end up with 14px here, 16px there. Shadows on some cards, borders on others. Three different grays.

This plugin helps you:

1. **Think through decisions** — The skill prompts you to consider direction, not just defaults
2. **Record what you chose** — Decisions save to `.ds-engineer/system.md`
3. **Stay consistent** — Future sessions load your system automatically
4. **Catch drift** — Hooks flag when new code contradicts your established patterns

It's not a design system. It's a framework for building *your* design system and keeping it coherent.

---

## Quick Start

```
/plugin marketplace add Dammyjay93/oakinleye
/plugin install design-engineer
```

Restart Claude Code. Your design context will load automatically in future sessions.

---

## How It Works

### The Skill

When you build UI, the skill guides you through questions:

- What kind of product is this? (affects density, tone)
- Warm or cool foundation?
- How should depth work? (borders, shadows, or both)
- What's your spacing base?

These aren't rules — they're decisions. You make them, the plugin remembers them.

### The System File

After your first build, the plugin offers to save your decisions:

```
.ds-engineer/
├── system.md           # Your direction, tokens, patterns
├── tokens.css          # Generated CSS (optional)
└── tailwind.preset.js  # Generated preset (optional)
```

The system file is markdown. Edit it directly, or let the plugin update it as you work.

### The Hooks

**Session start** — Loads your system.md so Claude has context.

**Post-write** — Validates UI code against your system. If you chose borders-only depth, it flags shadows. If you defined a color palette, it flags off-palette colors.

The hooks only enforce what *you* defined. No system file = no enforcement.

---

## Commands

| Command | Description |
|---------|-------------|
| `/ds-engineer` | Smart dispatcher — shows status or suggests actions |
| `/ds-engineer status` | Show current design system state |
| `/ds-engineer audit <path>` | Check existing code against your system |
| `/ds-engineer extract` | Extract patterns from existing code |
| `/ds-engineer generate` | Generate tokens.css, tailwind preset |

---

## Example System File

```markdown
# Design System

## Direction
Personality: Precision & Density
Foundation: Cool (slate)
Depth: Borders-only

## Tokens

### Colors
--foreground: slate-900
--secondary: slate-600
--muted: slate-400
--accent: blue-600

### Spacing
Base: 4px
Scale: 4, 8, 12, 16, 24, 32

### Radius
Scale: 4px, 6px, 8px

## Patterns
- Cards: 0.5px border, 6px radius, 16px padding
- Buttons: 36px height, 4px radius

## Decisions
| Decision | Rationale | Date |
|----------|-----------|------|
| Borders over shadows | Technical feel | 2026-01-13 |
```

This is just an example. Your system will reflect *your* choices.

---

## What It Doesn't Do

- **Impose a specific aesthetic** — The skill has defaults and suggestions, but you override them
- **Require specific values** — If you want 5px spacing base or 20px radius, that's your system
- **Block you from experimenting** — No system file = no enforcement. Delete it to start fresh.
- **Replace design judgment** — It remembers decisions, it doesn't make them for you

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
│   ├── inject-context.sh      # Load system on session start
│   └── validate-design.js     # Validate against your system
├── skills/
│   └── design-engineer/
│       └── SKILL.md           # Craft guidance + decision framework
└── reference/
    ├── principles.md
    └── anti-patterns.md
```

---

## Philosophy

**Decisions compound.** A spacing value chosen once becomes a pattern. A depth strategy becomes an identity. This plugin makes those decisions visible and durable.

**Consistency beats perfection.** A coherent system with "imperfect" values beats a scattered interface with "correct" ones.

**Memory enables iteration.** When you can see what you decided and why, you can evolve it intentionally instead of drifting accidentally.

---

## Related

Part of the [oakinleye](https://github.com/Dammyjay93/oakinleye) plugin collection.

See also: [claudepm](https://github.com/Dammyjay93/claudepm) — Project management for Claude Code.

---

## License

MIT License. See [LICENSE](LICENSE) for details.
