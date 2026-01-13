# Anti-Patterns Reference

Things to never do.

## Visual Anti-Patterns

### Shadows
- **Dramatic shadows** — `box-shadow: 0 25px 50px...`
- **Heavy blur** — anything over 10px blur in most cases
- **Colored shadows** — unless very intentional

### Borders & Radius
- **Large radius on small elements** — 16px+ on buttons
- **Thick decorative borders** — 2px+ for decoration
- **Inconsistent radius** — mixing 4px, 8px, 12px without system

### Spacing
- **Asymmetric padding** — without clear visual reason
- **Off-grid values** — 14px, 18px, 22px instead of 4px grid
- **Uniform spacing** — same gap everywhere kills rhythm

### Color
- **Pure white on colored backgrounds** — use tinted surfaces
- **Multiple accent colors** — one accent, one meaning
- **Decorative color** — color should communicate, not decorate
- **Low contrast text** — accessibility matters

### Animation
- **Spring/bounce** — in enterprise UI
- **Slow animations** — anything over 300ms feels sluggish
- **Gratuitous motion** — animation should have purpose

## Generic AI Aesthetics (AI Slop)

These patterns scream "generated, not designed":

- Purple gradients on white backgrounds
- Inter/Roboto when distinctive fonts would serve better
- Predictable hero-features-pricing layouts
- Rounded everything (all 12px+ radius)
- Gratuitous blur/glass effects
- "Floating" cards with heavy shadows
- Rainbow gradient text
- Generic abstract illustrations
- Bento grid for everything
- Excessive whitespace without hierarchy

## Structural Anti-Patterns

- **Color for decoration** — use for meaning only
- **Inconsistent spacing** — mix of 12px, 14px, 18px
- **Mixed systems** — some 4px radius, some 8px, some 12px
- **Flat hierarchy** — everything same size/weight
- **No contrast hierarchy** — everything same gray

## Process Anti-Patterns

- **Building without direction** — commit to personality first
- **Changing tokens ad-hoc** — update system, not individual values
- **Creating one-offs** — extend patterns instead
- **Ignoring existing patterns** — consistency over novelty
- **Silent deviations** — if you break rules, document why
