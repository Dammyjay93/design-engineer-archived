---
description: Extract design patterns from existing code
allowed-tools: Read, Glob, Grep, Write
---

# Design Extract

Scan existing codebase and extract implicit design patterns into a system.

## Steps

1. **Scan for patterns**

   Find all UI files and extract:

   **Colors:**
   - Hex values (#xxx, #xxxxxx)
   - RGB/HSL values
   - Tailwind color classes (bg-*, text-*, border-*)
   - CSS custom properties (--color-*)

   **Spacing:**
   - px values in padding, margin, gap
   - Tailwind spacing classes (p-*, m-*, gap-*)

   **Typography:**
   - font-size values
   - font-weight values
   - font-family declarations

   **Shadows:**
   - box-shadow values
   - Tailwind shadow classes

   **Border Radius:**
   - border-radius values
   - Tailwind rounded-* classes

2. **Analyze patterns**

   For each category:
   - Count occurrences
   - Identify most common values (likely intentional)
   - Identify outliers (likely inconsistencies)

3. **Present findings**

   ```
   DESIGN ENGINEER v1.0.0

   EXTRACTION ANALYSIS

   Scanned: [n] files

   Colors found:
     - slate-900 (34 uses) <- likely primary
     - slate-600 (28 uses) <- likely secondary
     - gray-500 (3 uses)   <- outlier?

   Spacing:
     - Mostly on 4px grid [check]
     - Found 14px (2 uses) <- off-grid

   Depth:
     - Mix of shadows and borders
     - No clear strategy

   Typography:
     - Sizes: 12, 14, 16, 18, 24 <- clean scale
     - Weights: 400, 500, 600 <- good
   ```

4. **Ask for direction**

   "Based on the patterns, I need you to commit to:

   1. **Direction**: What personality fits this product?
      - Precision & Density (developer tools, power users)
      - Warmth & Approachability (consumer, collaborative)
      - Sophistication & Trust (finance, enterprise)

   2. **Clean up outliers?**
      - gray -> slate
      - 14px -> 16px

   3. **Depth strategy?**
      - Standardize on borders-only
      - Standardize on subtle shadows"

5. **Create system file**

   Based on answers, create `.ds-engineer/system.md`:

   ```markdown
   # Design System

   ## Direction
   Personality: [chosen]
   Foundation: [warm/cool/neutral]
   Depth: [strategy]
   Accent: [color]

   ## Tokens

   ### Colors
   --foreground: [extracted primary]
   --secondary: [extracted secondary]
   --muted: [extracted muted]
   --faint: [extracted faint]
   --accent: [extracted accent]
   --background: [extracted]
   --surface: [extracted]

   ### Spacing
   Base: 4px
   Scale: 4, 8, 12, 16, 24, 32, 64

   ### Typography
   Scale: [extracted sizes]
   Weights: [extracted weights]

   ### Depth
   Strategy: [chosen]
   [specific values]

   ### Radius
   Scale: [extracted values]

   ## Patterns
   [extracted component patterns]

   ## Decisions
   | Decision | Rationale | Date |
   |----------|-----------|------|
   | [direction] | [from conversation] | [today] |
   ```

6. **Confirm**

   ```
   DESIGN ENGINEER v1.0.0

   Design system created: .ds-engineer/system.md

   Direction: [personality]
   Tokens: [n] colors, [n] spacing, [n] typography
   Patterns: [n] extracted

   Future builds will maintain consistency with this system.
   ```
