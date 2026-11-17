
# 🍽️ RecipeShare

RecipeShare is a web application where users can discover, create and share cooking recipes. Users can browse recipes, view their ingredients and instructions, and read comments from other users. Registered users can publish their own recipes and manage the recipes they have created.

---

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20RecipeShare-e87535?style=for-the-badge&logo=cloudflare)](https://recipeshare.yordan-genov12321.workers.dev)

**Live Application:**  
https://recipeshare.yordan-genov12321.workers.dev

---

## 📂 Git Repository

[![GitHub Repository](https://img.shields.io/badge/GitHub-RecipeShare-181717?style=for-the-badge&logo=github)](https://github.com/v3req/RecipeShare)

**Repository:**  
https://github.com/v3req/RecipeShare

---

# 1. Project Overview

**Application Name:** RecipeShare

**Application Category:** Recipe Sharing Platform / Social Application

### Main Purpose

RecipeShare is a web application where users can discover, create and share cooking recipes.

Users can browse recipes, view their ingredients and instructions, and read comments from other users. Registered users can publish their own recipes and manage the recipes they have created.

---

# 2. Architecture

RecipeShare follows a component-based React architecture. The application is divided into separate layers responsible for the user interface, application state, routing, and communication with the backend.

### Architecture Overview

```text
RecipeShare
│
├── Frontend (React)
│   │
│   ├── App.jsx
│   │   └── Application Routing
│   │       └── RouteGuard
│   │
│   ├── Components
│   │   ├── Header
│   │   ├── Footer
│   │   ├── HomePage
│   │   ├── Catalog
│   │   ├── RecipeCard
│   │   ├── RecipeDetails
│   │   ├── CreateRecipe
│   │   ├── EditRecipe
│   │   ├── Login
│   │   ├── Register
│   │   ├── Logout
│   │   └── Comments
│   │
│   ├── Contexts
│   │   └── AuthContext
│   │
│   ├── Hooks
│   │   ├── useAuth
│   │   ├── useForm
│   │   └── usePersistedState
│   │
│   └── API
│       ├── auth-api.js
│       ├── recipe-Api.js
│       ├── comment-api.js
│       └── request.js
│
└── Backend (Supabase)
    ├── Authentication
    ├── Recipes
    └── Comments
```

### Frontend Layer

The frontend is developed using React. It is responsible for rendering the user interface and handling user interactions.

The application uses reusable components to separate functionality into smaller, maintainable pieces.

React Router handles client-side navigation between pages.

### Routing & Authorization Layer

The application uses a custom `RouteGuard` component to protect routes that require authentication.

The RouteGuard checks the user's authentication status through the custom `useAuth()` hook.

If the user is not authenticated, they are redirected to the Login page. Otherwise, the protected route is rendered using React Router's `Outlet` component.

### State Management Layer

The Context API is used to share authentication information across the application.

Custom hooks are used to manage forms, authentication access, and persisted state.

### API Layer

The API layer contains functions responsible for communicating with Supabase.

It separates backend requests from UI components, making the application easier to maintain.

### Backend Layer

Supabase provides the backend functionality, including authentication and database operations.

The frontend communicates with Supabase through HTTP requests using the Fetch API.

---

# 3. User Access & Permissions

## Guest (Not Authenticated)

Guests can:

- Access the Home page.
- Browse the recipe catalog.
- View individual recipe details.
- Read comments.
- Navigate to the Login and Registration pages.

### Available Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/catalog` | Recipe catalog |
| `/recipes/:recipeId` | Recipe details |
| `/login` | Login |
| `/register` | Registration |

Guests cannot access protected routes:

- `/recipes/create`
- `/recipes/:recipeId/edit`
- `/logout`

If a guest attempts to access one of these routes, the RouteGuard redirects them to the Login page.

## Authenticated User

Authenticated users can:

- Access all public pages.
- Create new recipes.
- View recipes.
- Edit their own recipes.
- Delete their own recipes.
- Add comments to recipes.
- Log out.

### Protected Routes

| Route | Description |
|---|---|
| `/recipes/create` | Create a recipe |
| `/recipes/:recipeId/edit` | Edit a recipe |
| `/logout` | Log out |

These routes are wrapped inside the `RouteGuard` component.

The application uses the `isAuthenticated` value from AuthContext to determine whether a user can access protected pages.

---

# 4. Authentication & Session Handling

## Authentication Flow

1. When the application loads, the `AuthProvider` initializes the authentication state.
2. The custom `usePersistedState` hook checks `localStorage` for previously saved authentication data.
3. If authentication data exists, the user is treated as authenticated.
4. When a user registers, the application sends their email and password to Supabase.
5. When a user logs in, Supabase verifies their credentials and returns authentication data.
6. The authentication data is saved in React state and `localStorage`.
7. When the user logs out, the authentication state is cleared and the application navigates to the Home page.

## Session Persistence

Authentication is managed through:

- React Context API (`AuthContext`).
- React state (`useState`).
- Browser `localStorage`.

The custom `usePersistedState` hook saves authentication information in localStorage, allowing the user to remain logged in after refreshing the page.

The `AuthProvider` also uses `useEffect` and `setTimeout` to check the authentication expiration time and clear expired authentication data.

---

# 5. Routing Structure

The application uses React Router for client-side navigation.

## Route Guards Logic

The application implements a custom `RouteGuard` component to protect routes that require authentication.

The RouteGuard uses:

- `useAuth()` to access the authentication state.
- `isAuthenticated` to determine whether a user is logged in.
- `Navigate` to redirect unauthenticated users.
- `Outlet` to render the protected child route.

### RouteGuard Implementation

```jsx
import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function RouteGuard() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}
```

### How It Works

1. A user attempts to access a protected route.
2. The RouteGuard checks the `isAuthenticated` value using `useAuth()`.
3. If the user is not authenticated, React Router redirects them to `/login`.
4. If the user is authenticated, the `Outlet` component renders the requested child route.

## Main Routes

| Route | Component | Access |
|---|---|---|
| `/` | HomePage | Public |
| `/catalog` | Catalog | Public |
| `/recipes/:recipeId` | DetailsPageSection | Public |
| `/register` | SignupSection | Public |
| `/login` | LoginSection | Public |
| `/logout` | Logout | Protected |
| `/recipes/:recipeId/edit` | EditRecipeSection | Protected |
| `/recipes/create` | CreateRecipeSection | Protected |

## Nested & Parameterized Routes

The application uses a parent route with nested child routes for protected pages.

The parent route renders the `RouteGuard` component, while its child routes are rendered through the `Outlet` component.

Parameterized routes are used for recipe details and editing:

- `/recipes/:recipeId`
- `/recipes/:recipeId/edit`

The `useParams()` hook retrieves the recipe ID from the URL.

---

# 6. List → Details Flow

## Catalog / List Page

The Catalog component fetches recipes from Supabase using the `getAll()` API function.

Each recipe is displayed using the reusable `RecipeCard` component.

Recipe cards display:

- Recipe title.
- Description.
- Image.
- Preparation time.
- Difficulty.

Users can select a recipe to navigate to its details page.

The current catalog does not implement filtering, sorting or searching.

## Details Page

When a user selects a recipe, the application navigates to:

`/recipes/:recipeId`

The Details component uses:

- `useParams()` to retrieve the recipe ID.
- `getOne()` to fetch the corresponding recipe.
- `useEffect()` to load the recipe when the component mounts or the recipe ID changes.

The details page displays the recipe image, title, description, category, preparation time, difficulty, author, ingredients and instructions.

The page also displays the comments associated with that recipe.

---

# 7. Data Source & Backend

**Backend Type:** Supabase

Supabase provides:

- Authentication.
- User registration and login.
- Recipe data storage.
- Comment data storage.
- CRUD operations.

The application communicates with Supabase through custom API functions using the JavaScript Fetch API.

The API functions are organized in the `src/api` directory:

| File | Responsibility |
|---|---|
| `auth-api.js` | Authentication requests |
| `recipe-Api.js` | Recipe operations |
| `comment-api.js` | Comment operations |
| `request.js` | Shared HTTP request logic |

---

# 8. Data Operations (CRUD)

## Create (POST)

Users can create recipes through the Create Recipe form.

The form collects:

- Title.
- Description.
- Image URL.
- Category.
- Difficulty.
- Preparation time.
- Ingredients.
- Instructions.

The `create()` API function sends the recipe data to Supabase using a POST request.

Users can also submit comments through the comment form. The `postComment()` function sends comment data to Supabase.

## Read (GET)

Recipes are retrieved using:

- `getAll()` – retrieves all recipes for the catalog.
- `getOne(recipeId)` – retrieves a specific recipe.

Comments are retrieved using `getAllComments(recipeId)`.

The data is displayed using React state and reusable components such as `RecipeCard`, `Comment` and `CommentsSection`.

## Update (PUT/PATCH)

The recipe owner can edit an existing recipe.

The Edit Recipe component:

1. Retrieves the recipe ID from the URL.
2. Fetches the existing recipe data.
3. Populates the form using `setValues()`.
4. Allows the user to change the recipe information.
5. Sends the updated data to Supabase using the `update()` API function.

The update operation uses a PUT request.

After a successful update, the application navigates back to the recipe catalog.

## Delete

The recipe owner can delete their recipe from its details page.

The application displays a confirmation dialog before deleting.

If the user confirms, the `del()` API function sends a DELETE request to Supabase.

After deletion, the application navigates back to the catalog.

---

# 9. Forms & Validation

## Forms Used

The application contains the following forms:

1. Registration form.
2. Login form.
3. Create Recipe form.
4. Edit Recipe form.
5. Create Comment form.

The application uses a custom `useForm` hook to manage form values, input changes and form submissions.

## Validation Rules

### Email

- Required.
- Must have a valid email format.

### Password

- Required.
- Must contain at least 8 characters during registration.

### Confirm Password

- Required.
- Must contain at least 8 characters.
- Must match the password.

### Recipe Title

- Required.

### Recipe Image URL

- Uses URL input validation.

### Preparation Time

- Required.
- Must be at least 1 minute.

Other recipe fields, including description, category, difficulty, ingredients and instructions, are also required.

The comment field is required before submission.

---

# 10. React-Specific Techniques

## Hooks & Component Lifecycle

The application uses React hooks to manage state, side effects, navigation and shared data.

### useState

Used to manage component state, including:

- Recipe data.
- Recipe catalog data.
- Comments.
- Form values.
- Authentication state.

### useEffect

Used for side effects, such as:

- Fetching recipes when the Catalog component mounts.
- Fetching recipe details when the Details component mounts or the recipe ID changes.
- Fetching comments when the CommentsSection component mounts or needs to refresh.
- Managing authentication expiration.

### useContext

Used in the custom `useAuth` hook to access the authentication context.

### Custom Hooks

- `useAuth()` – provides access to authentication data and functions.
- `useForm()` – manages form values and submissions.
- `usePersistedState()` – synchronizes React state with localStorage.

### useParams()

Retrieves dynamic recipe IDs from the URL.

### useNavigate()

Used for programmatic navigation after actions such as login, registration, recipe creation, editing and deletion.

## Context API

The application uses the React Context API through `AuthContext`.

The `AuthProvider` shares:

- Access token.
- User information.
- Authentication status.
- Registration handler.
- Login handler.
- Logout handler.

The custom `useAuth()` hook allows components such as Header, HomePage, CreateRecipe, Details and CreateComment to access authentication information without passing it through multiple component levels.

## Component Styling

The application uses CSS for styling.

The styling includes:

- Global styles and CSS variables.
- Reusable button classes.
- Layout and container classes.
- Recipe card styles.
- Form styles.
- Header and footer styles.
- Responsive media queries for smaller screens.

The design uses CSS Flexbox and CSS Grid for layout and responsive behavior.

---

# 11. Typical User Flow

1. A guest visits the Home page and selects Explore Recipes.
2. The user browses the catalog and selects a recipe to view its details.
3. The user registers or logs in to access authenticated functionality.
4. The authenticated user creates a recipe, views their recipes, edits or deletes them, and adds comments to recipes.

---

# 12. Error & Edge Case Handling

## Authentication Errors

The login handler checks whether email and password fields are provided.

The application also checks for incorrect credential responses and displays an alert.

During registration, the application checks that all fields are completed and that the password and confirmation password match.

## Network or Data Errors

API requests use a shared request function.

Components use `.catch()` blocks or `try/catch` statements to handle request failures.

Errors are currently handled mainly through console messages and alert dialogs.

## Empty or Missing Data States

Recipe and comment lists are initialized as empty arrays using `useState([])`.

This allows the application to render without errors while data is being fetched.

If no recipes or comments are returned, the corresponding list simply has no items to display.

The application does not currently have dedicated empty-state messages or loading indicators.

---

# 13. Installation & Setup

Follow these steps to run RecipeShare locally.

## Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

## 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/v3req/RecipeShare.git
```

## 2. Navigate to the Project Directory

```bash
cd RecipeShare
```

## 3. Install Dependencies

Install all required packages using npm:

```bash
npm install
```

This installs the dependencies specified in `package.json`.

## 4. Start the Development Server

Run:

```bash
npm run dev
```

Vite will start the local development server.

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 5. Build the Project

To create a production build, run:

```bash
npm run build
```

The production files will be generated in the `dist` directory.

## 6. Preview the Production Build

```bash
npm run preview
```

This runs the production preview using the project's configured preview script.

## Available Scripts

| Command | Description |
|---|---|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the application for production |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build |
| `npm run deploy` | Builds and deploys using Wrangler |

**Note:** The application uses Supabase as its backend. Its Supabase connection settings must be configured correctly for backend functionality.

---

# 14. Technologies Used

| Technology | Purpose |
|---|---|
| React 19 | Frontend library |
| React Router 7 | Client-side routing |
| JavaScript | Application logic |
| Supabase | Backend and authentication |
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| Vite | Development server and build tool |
| Cloudflare Workers | Application deployment |
| Git & GitHub | Version control and repository hosting |

---




