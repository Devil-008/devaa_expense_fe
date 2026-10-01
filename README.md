# Project Title

## Changelog & Recent Updates
### Implement Standardized Global API Response Formatter
Introduced a global `api_response` utility to standardize all backend outputs to `{status_code, is_success, message, data}`. Refactored all blueprints and global error handlers to conform to this structure.