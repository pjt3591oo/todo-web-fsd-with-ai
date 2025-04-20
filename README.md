# Todo App with Feature-Sliced Design (FSD)

This is a Todo application built using Next.js, TypeScript, and Tailwind CSS, following the Feature-Sliced Design architecture pattern.

## What is Feature-Sliced Design (FSD)?

Feature-Sliced Design is a methodology for organizing code in frontend applications. It's an architecture pattern that helps developers build maintainable and scalable applications by dividing the codebase into layers and slices.

### Core Principles of FSD

1. **Vertical Separation (Slices)**: Code is organized by business domains/features rather than technical roles.
2. **Horizontal Separation (Layers)**: Each slice is divided into layers with strict rules of dependencies.
3. **Public API**: Each module exposes only what other modules need through explicit public APIs.
4. **Isolation**: Modules should be as independent as possible, with explicit dependencies.

### Layers in FSD (from lowest to highest)

1. **Shared** - Reusable common code (utils, UI kit, API clients, etc.)
2. **Entities** - Business objects with their data structures and basic operations (User, Product, Todo, etc.)
3. **Features** - User interactions that change entities (CreateUser, FilterProducts, ToggleTodo, etc.)
4. **Widgets** - Composite components that combine multiple features and entities
5. **Pages** - Application routes and layouts
6. **Processes** - Complex business flows across multiple pages (Authentication, Checkout, etc.)
7. **App** - Global application settings, providers, and styles

## Project Structure

This Todo application follows the FSD architecture with the following structure:

```
src/
├── app/            # Application initialization and settings (Next.js App Router)
│   └── page.tsx    # Main page of the application
├── entities/       # Business objects
│   └── todo/       # Todo entity
│       ├── model/  # Data models and types
│       ├── ui/     # UI components specific to Todo entity
│       └── index.ts
├── features/       # User interactions
│   └── todoCreation/  # Feature for creating todos
│       ├── ui/     # UI components for todo creation
│       └── index.ts
├── widgets/        # Composite components
│   └── TodoList/   # Widget that combines todo features
│       ├── ui/     # UI components for TodoList widget
│       └── index.ts
└── shared/         # Shared utilities and components
    ├── api/        # API integrations
    ├── config/     # Configuration constants
    ├── lib/        # Utilities and helpers
    └── ui/         # Shared UI components
```

## Implementation Details

### Entities Layer

The Todo entity (`entities/todo`) defines the core business object of our application:

- **Model**: Contains the `Todo` interface with properties like id, text, completed, and createdAt
- **UI**: Contains the `TodoItem` component for displaying a single todo item

### Features Layer

Features are user interactions that change entities:

- **Todo Creation** (`features/todoCreation`): Contains `TodoForm` component for adding new todos

### Widgets Layer

Widgets combine entities and features:

- **Todo List** (`widgets/TodoList`): Combines the TodoItem entity and TodoForm feature into a complete list management widget

### Shared Layer

Reusable utilities and components:

- **Lib**: Utilities like `uid.ts` for generating unique IDs

### App Layer

Application setup and global styles:

- **Page**: Main page component that incorporates the TodoList widget
- **Layout**: Root layout with metadata and global styles

## Benefits of FSD in This Project

1. **Maintainability**: Clear separation of concerns makes the code easier to maintain
2. **Scalability**: Easy to add new features without modifying existing ones
3. **Reusability**: Components and utilities can be easily reused across the application
4. **Testability**: Isolated modules are easier to test
5. **Onboarding**: New developers can understand the project structure more quickly

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The application will be available at http://localhost:3000.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
