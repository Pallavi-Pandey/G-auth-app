# React Google Auth

A React-based application demonstrating how to integrate Google OAuth for secure user authentication.

## Project Structure

- **src/**: Contains the main React components and authentication logic.
- **public/**: Static assets and the main HTML template.
- `package.json`: Project dependencies (e.g., `@react-oauth/google`).

## Key Features
- **Google OAuth 2.0**: Secure third-party login integration.
- **Token Management**: Handling and storing authentication tokens safely.
- **Protected Routes**: Restricting access to specific parts of the app for authenticated users only.

## Getting Started

1.  **Obtain Google Client ID**: Create a project in the Google Cloud Console and get your Client ID.
2.  **Configure**: Add your Client ID to the authentication provider in `src/`.
3.  **Install and Run**:
    ```bash
    npm install
    npm start
    ```
