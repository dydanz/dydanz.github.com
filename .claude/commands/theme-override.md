# Command: /theme-override

Override a specific file from the gem-based theme.

## Execution Flow

1. **Identify the theme**: read `theme:` or `remote_theme:` from `_config.yml`
2. **Locate the gem source**: `bundle info --path <theme-name>`
3. **List available files to override**:
   - `_layouts/` -> HTML layout templates
   - `_includes/` -> Reusable partials
   - `_sass/` -> SCSS stylesheets
   - `assets/` -> Static assets
4. **Copy the target file** to the same relative path in the project
5. **Document the override**: add a comment header explaining what changed and
   why
6. **Make the requested modification**
7. **Test**: `bundle exec jekyll serve` and verify the change renders
   correctly
8. **Warn if risky**: flag if the override might break on theme updates
