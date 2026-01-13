---
description: Show current design system state
allowed-tools: Read, Glob
---

# Design Status

Show the current design system state for this project.

## Steps

1. **Check for design system**
   - Look for `.design/system.md` in project root
   - If not found, report no system established

2. **Parse and display**

   If system exists, read the file and display:

   ```
   DESIGN ENGINEER v1.0.0

   PROJECT DESIGN SYSTEM

   Direction: [personality]
   Foundation: [warm/cool/neutral]
   Depth: [strategy]
   Accent: [color]

   Tokens:
     Colors: [count] defined
     Spacing: [base]px grid
     Typography: [count] sizes

   Patterns: [count] established
   Decisions: [count] recorded

   Last updated: [date from file or git]
   ```

3. **If no system**

   ```
   DESIGN ENGINEER v1.0.0

   No design system established.

   Options:
     /design extract  - Extract patterns from existing code
     Build something  - I'll offer to create a system after

   ```
