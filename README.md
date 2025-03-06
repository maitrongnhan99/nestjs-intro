# NestJS Learning Project

This repository contains a learning project following the "[NestJS Masterclass - NodeJS Framework Backend Development](https://www.udemy.com/course/nestjs-masterclass-complete-course/)" course on Udemy.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Project Description

This project is a hands-on implementation of concepts taught in the NestJS Masterclass course. NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

## Prerequisites

- Node.js (v18.x or higher recommended)
- npm or yarn

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd nestjs-intro

# Install dependencies
npm install
# or with yarn
yarn install
```

## Running the Application

```bash
# Development mode
npm run start
# or
yarn start

# Watch mode (recommended for development)
npm run start:dev
# or
yarn start:dev

# Production mode
npm run start:prod
# or
yarn start:prod
```

## Testing

```bash
# Unit tests
npm run test
# or
yarn test

# E2E tests
npm run test:e2e
# or
yarn test:e2e

# Test coverage
npm run test:cov
# or
yarn test:cov
```

## Project Structure

The project follows the standard NestJS architecture:

- `src/` - Contains the source code
  - `main.ts` - The entry point of the application
  - `app.module.ts` - The root module of the application
  - Other modules, controllers, and services

## Features

This project demonstrates various NestJS features including:

- Dependency Injection
- Module architecture
- Controllers and Routing
- Services
- Middleware
- Validation
- Error handling
- And more...

## Learning Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [NestJS Masterclass on Udemy](https://www.udemy.com/course/nestjs-masterclass-complete-course/)

## License

## Contributing

Contributions are welcome! Here's how you can contribute to this project:

1. **Fork the repository**

   ```bash
   git clone https://github.com/yourusername/project-name.git
   cd project-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create a branch for your feature**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**

   - Follow the existing code style
   - Add tests for new functionality
   - Ensure all tests pass with `npm run test`

5. **Commit your changes**

   ```bash
   git commit -m "feat: add your feature description"
   ```

6. **Push to your branch**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click on "New Pull Request"
   - Select your branch and provide a description of your changes

## Development

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Setting Up Development Environment

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/project-name.git
   cd project-name
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

4. The API will be available at `http://localhost:3000`

### API Documentation

Once the server is running, you can access the API documentation at `http://localhost:3000/api` (if Swagger is configured).

This project is [MIT licensed](LICENSE).
