# Command: /new-page

Create a new static page (about, projects, uses, etc.)

## Execution Flow

1. **Determine page type**: about, contact, archive, tag index, custom
2. **Check navigation**: read `_data/navigation.yml` or header include to
   understand existing nav structure
3. **Generate the page**:
   - Create file in `_pages/` or root, with permalink in front matter
   - Use appropriate layout (`page`, `default`, or custom)
   - Write content matching the site's tone
4. **Update navigation**: add entry to nav data file or include if needed
5. **Validate**: ensure permalink doesn't collide with existing routes
6. **Save and advise**
