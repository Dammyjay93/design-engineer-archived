# Design Principles Reference

Quick reference for the design engineer skill.

## Direction Framework

| Context | Personality | Foundation | Depth |
|---------|-------------|------------|-------|
| Developer tool | Precision & Density | Cool (slate) | Borders-only |
| Consumer app | Warmth & Approachability | Warm (stone) | Subtle shadows |
| Finance/Enterprise | Sophistication & Trust | Cool (slate) | Layered shadows |
| Creative tool | Boldness & Clarity | Neutral | Varies |

## Spacing Scale (4px grid)

| Token | Value | Use |
|-------|-------|-----|
| 1 | 4px | Micro gaps |
| 2 | 8px | Tight, within components |
| 3 | 12px | Standard |
| 4 | 16px | Comfortable |
| 6 | 24px | Generous |
| 8 | 32px | Section gaps |
| 16 | 64px | Major separation |

## Typography Scale

| Name | Size | Use |
|------|------|-----|
| xs | 12px | Fine print |
| sm | 13px | Labels |
| base | 14px | Body |
| lg | 16px | Emphasis |
| xl | 18px | Subheadings |
| 2xl | 24px | Headings |
| 3xl | 32px | Page titles |

## Contrast Hierarchy

1. **Foreground** — slate-900 — Primary text
2. **Secondary** — slate-600 — Supporting text
3. **Muted** — slate-400 — Labels, metadata
4. **Faint** — slate-200 — Borders, dividers

## Depth Strategies

### Borders-only
```css
border: 0.5px solid rgba(0, 0, 0, 0.08);
```

### Subtle shadows
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
```

### Layered shadows
```css
box-shadow:
  0 0 0 0.5px rgba(0, 0, 0, 0.05),
  0 1px 2px rgba(0, 0, 0, 0.04),
  0 2px 4px rgba(0, 0, 0, 0.03),
  0 4px 8px rgba(0, 0, 0, 0.02);
```

## Animation

| Duration | Use |
|----------|-----|
| 150ms | Micro-interactions |
| 200ms | Standard transitions |
| 250ms | Larger movements |

Easing: `cubic-bezier(0.16, 1, 0.3, 1)`

## Border Radius

### Sharp system (technical)
4px, 6px, 8px

### Soft system (friendly)
8px, 12px, 16px
