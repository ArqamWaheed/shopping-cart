# One Piece Figurines Shop

A modern, responsive e-commerce web application for browsing and purchasing authentic One Piece figurines. Built with React and featuring a smooth user experience with loading animations, cart management, and multiple informational pages.

![Project Banner](src/assets/Wallpaper.png)

## 🚀 Technologies Used

### Core Technologies
- **React 18** - Modern UI library with hooks
- **React Router v7** - Client-side routing and navigation
- **Vite** - Next-generation frontend build tool for fast development
- **CSS Modules** - Scoped styling with modular CSS architecture

### Key Libraries
- **react-dom** - DOM-specific methods for React
- **react-router** - Declarative routing for React applications

## 🎯 Core Techniques & Features

### 1. **React Router Implementation**
- **Nested Routes** - Hierarchical routing structure with MainLayout as parent
- **Outlet Context** - Shared state management across routes using `useOutletContext`
- **Browser Router** - Client-side routing without page reloads
- **Error Boundaries** - Custom error page handling with `useRouteError`

```jsx
// Centralized routing configuration
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [...]
  }
]
```

### 2. **State Management**
- **Lifted State** - Cart state managed at MainLayout level and passed down via context
- **useState Hook** - Managing cart items, quantities, and loading states
- **State Updates** - Immutable state updates using array methods (map, filter, reduce)

```jsx
// Shopping cart state shared across components
const [cartAmount, setCartAmount] = useState(0);
const [cartItems, setCartItems] = useState([]);
```

### 3. **Advanced Cart Logic**
- **Item Search & Update** - Custom `searchFigureState` function with `findIndex`
- **Quantity Management** - Increment, decrement, and remove operations
- **Price Calculations** - Dynamic subtotal, tax, and shipping calculations
- **Conditional Rendering** - Empty cart vs. populated cart views

```jsx
// Intelligent cart item management
const indexWithFigurine = prev.findIndex(searchFigureState, figurineName);
if (indexWithFigurine === -1) {
  return [...prev, { figurineName, figurinePrice, figurineQty: 1 }];
}
```

### 4. **CSS Architecture**
- **CSS Modules** - Component-scoped styling preventing conflicts
- **CSS Custom Properties** - Centralized theming with CSS variables
- **Responsive Design** - Mobile-first approach with media queries
- **Clamp Functions** - Fluid typography and spacing
- **CSS Grid & Flexbox** - Modern layout techniques

```css
/* Responsive grid layout */
.SalePageContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(1rem, 4vw, 3rem);
}
```

### 5. **Component Design Patterns**
- **Compound Components** - MainLayout with NavigationBar composition
- **Prop Drilling Alternative** - Context via Outlet for deep prop passing
- **Reusable Components** - SaleCard component with dynamic props
- **Presentational Components** - Separation of concerns (UI vs. logic)

### 6. **User Experience Enhancements**
- **Loading Screen** - Custom loading page with fade-out animation
- **Image Preloading** - Preventing layout shifts with asset preloading
- **Mobile Navigation** - Hamburger menu with overlay and smooth transitions
- **Hover Effects** - Interactive UI elements with CSS transitions
- **Sticky Navigation** - Fixed header for consistent access

```jsx
// Image preloading for smooth UX
useEffect(() => {
  const preloadImages = imagesToPreload.map((src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
    });
  });
  Promise.all(preloadImages).then(() => setIsLoading(false));
}, []);
```

### 7. **Performance Optimizations**
- **Code Splitting** - Route-based lazy loading with React Router
- **Asset Optimization** - WebP images for smaller file sizes
- **CSS Optimization** - Minimal CSS with reusable classes
- **Vite HMR** - Hot module replacement for instant updates

### 8. **Accessibility Features**
- **Semantic HTML** - Proper use of nav, main, section elements
- **ARIA Labels** - Screen reader support with aria-hidden
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Mobile menu focus trap

## 📁 Project Structure

```
src/
├── app/
│   ├── main.jsx           # Application entry point
│   └── router.jsx         # Route configuration
├── ui/
│   ├── layouts/
│   │   ├── MainLayout.jsx # Main app wrapper with cart state
│   │   └── components/
│   │       └── NavigationBar.jsx
│   ├── pages/             # Route components
│   └── routes/
│       └── routes.jsx     # Route definitions
├── sharedCH/
│   ├── components/
│   │   └── SaleCard.jsx   # Reusable product card
│   └── styles/            # Component-specific styles
└── styles/
    └── index.css          # Global styles & CSS variables
```

## 🎨 Design System

### Color Palette
```css
--bg-dark: hsl(7, 94%, 19%)      /* Dark red background */
--bg: hsl(7, 94%, 24%)            /* Primary background */
--primary: hsl(42, 85%, 64%)      /* Gold accent */
--secondary: hsl(0, 65%, 56%)     /* Red accent */
--text: hsl(38, 45%, 94%)         /* Light text */
```

### Typography
- **Primary Font**: Fredoka - Friendly, rounded letterforms
- **Secondary Font**: Space Grotesk - Technical, modern aesthetic
- **Responsive Sizing**: clamp() functions for fluid typography

## 🛠️ Development Techniques

### 1. **Functional Programming Patterns**
- Pure functions for state updates
- Immutable data structures
- Array method chaining (map, filter, reduce)

### 2. **Modern JavaScript**
- ES6+ syntax (arrow functions, destructuring, spread operator)
- Template literals for dynamic content
- Optional chaining and nullish coalescing

### 3. **CSS Best Practices**
- BEM-inspired naming convention
- Mobile-first responsive design
- CSS custom properties for theming
- Graceful degradation

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 980px (Hamburger menu activated)
- **Tablet**: 980px - 1120px
- **Desktop**: > 1120px

## 🔑 Key Learnings & Techniques

1. **State Management with Context** - Using React Router's Outlet context to avoid prop drilling
2. **Advanced Array Manipulation** - findIndex, filter, and map for cart operations
3. **CSS Module Architecture** - Preventing style conflicts in large applications
4. **Route-Based Code Organization** - Scalable folder structure for growing applications
5. **Loading State Patterns** - Managing async operations and user feedback
6. **Responsive Grid Layouts** - CSS Grid with auto-fit for dynamic content
7. **Component Composition** - Building complex UIs from simple, reusable pieces

## 📄 License

This project is part of a learning exercise and is not affiliated with the official One Piece franchise.

---

**Built with ❤️ using modern React patterns and best practices**
