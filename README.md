# Angular Front-End Project

This README provides instructions to set up and run the Angular front-end project, including installing dependencies, building the application, and serving it locally or in production.

---

## Prerequisites

### System Requirements
- **Operating System**: macOS, Linux, or Windows
- **Node.js**: 14.x or higher
- **npm**: 6.x or higher (comes with Node.js)
- **Angular CLI**: 13.x or higher (install if not already available)

### Tools
- A code editor, such as Visual Studio Code.
- A terminal or command prompt.

---

## Installation Steps

### 1. Clone the Repository
```bash
# Clone the repository
$ git clone <repository-url>
$ cd <repository-folder>
```

### 2. Install Dependencies
Run the following command in the project directory to install the required dependencies:
```bash
$ npm install
```

### 3. Install Angular CLI (if not installed)
If you don't already have the Angular CLI installed globally, run:
```bash
$ npm install -g @angular/cli
```
Verify the installation:
```bash
$ ng version
```

---

## Project Structure

- **`src/`**: Contains the main source code for the Angular app.
  - **`app/`**: Application components, modules, and services.
  - **`assets/`**: Static assets like images, fonts, etc.
  - **`environments/`**: Environment-specific configurations.
- **`public/`**: Static files served by the application.
- **`server.ts`**: Backend server for serving the front-end application.
- **`angular.json`**: Angular CLI configuration file.
- **`package.json`**: Contains project dependencies and scripts.

---

## Running the Application

### 1. Development Mode
To run the application in development mode with live reloading:
```bash
$ ng serve
```

The app will be available at `http://localhost:4200/` by default.

### 2. Production Mode
To build the application for production:
```bash
$ ng build --prod
```
This will generate production-ready files in the `dist/` directory.

### 3. Run with the Backend Server
To serve the application using the backend server:
```bash
$ node server.ts
```
The application will be accessible at `http://localhost:3000/` by default.

---

## Scripts

### Common npm Scripts
- **Start the development server**:
  ```bash
  $ npm start
  ```

- **Build the application**:
  ```bash
  $ npm run build
  ```

- **Lint the code**:
  ```bash
  $ npm run lint
  ```

- **Run unit tests**:
  ```bash
  $ npm test
  ```

- **Run end-to-end tests**:
  ```bash
  $ npm run e2e
  ```

---

## Troubleshooting

### Common Issues
1. **Missing Dependencies**:
   Ensure you have run `npm install` to install all required dependencies.

2. **Port Already in Use**:
   Stop any processes using the port or configure the app to use a different port in the Angular CLI options.

3. **Node.js Version Issues**:
   Check that you are using the correct version of Node.js as specified in the prerequisites.

---

## Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular CLI Reference](https://angular.io/cli)
- [Node.js Downloads](https://nodejs.org/)

---

## Contributing

Feel free to fork the repository, create a feature branch, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

