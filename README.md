# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Changelog & Recent Updates

### Implement Standardized Global API Response Formatter

Currently, our API endpoints return varying JSON structures depending on the route and whether it's a success or an error. To ensure a seamless integration with the frontend and to simplify debugging, we need to introduce a global api_response utility. All routes and global error handlers must be refactored to use this function.

The standard response structure must exactly match:

```
json
```

```
{
    "status_code": 200,
    "is_success": true,
    "message": "Descriptive message here",
    "data": { ... } // or [] or null
}

```


---

✅ Acceptance Criteria (AC)

**Acceptance Criteria:**
AC 1: Create Global Response Utility

• Given the backend codebase,
• When a new file for utilities is created (e.g., backend/app/utils/responses.py),
• Then it must contain the api_response(status_code: int, is_success: bool, message: str, data=None) function.
• And the function must strictly return a Flask jsonify object containing the keys status_code, is_success, message, and data, along with

## Changelog & Recent Updates

### Implement Standardized Global API Response Formatter

Currently, our API endpoints return varying JSON structures depending on the route and whether it's a success or an error. To ensure a seamless integration with the frontend and to simplify debugging, we need to introduce a global api_response utility. All routes and global error handlers must be refactored to use this function.

The standard response structure must exactly match:

```
json
```

```
{
    "status_code": 200,
    "is_success": true,
    "message": "Descriptive message here",
    "data": { ... } // or [] or null
}

```


---

✅ Acceptance Criteria (AC)

**Acceptance Criteria:**
AC 1: Create Global Response Utility

• Given the backend codebase,
• When a new file for utilities is created (e.g., backend/app/utils/responses.py),
• Then it must contain the api_response(status_code: int, is_success: bool, message: str, data=None) function.
• And the function must strictly return a Flask jsonify object containing the keys status_code, is_success, message, and data, along with 
