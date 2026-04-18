# Command: /redesign-component

Modify or create a visual component (header, footer, card, sidebar, code
blocks, etc.)

## Execution Flow

1. **Identify the component**: which visual element to redesign
2. **Analyze current implementation**:
   - Find the relevant `_includes/` partial or `_layouts/` template
   - Identify the SCSS file(s) that style it
   - If gem theme: locate the original via `bundle info --path <theme>`
3. **Design the change**:
   - Propose the visual change with rationale
   - Ensure responsive behavior at 3 breakpoints (mobile/tablet/desktop)
   - Check accessibility implications
4. **Implement**:
   - Override the theme file (copy to project, then modify)
   - Write/update SCSS with proper variables and nesting
   - Add transitions or animations if appropriate
5. **Test checklist**:
   - [ ] Renders correctly at 375px, 768px, 1280px
   - [ ] Color contrast meets WCAG AA
   - [ ] Keyboard navigable
   - [ ] No layout shift during page load
   - [ ] Works with and without JavaScript
6. **Commit**: use `style:` prefix
