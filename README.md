# AlertModal - Global React Alert Modal Component

A global alert modal component for React applications that can be triggered from anywhere in your app. Built with TypeScript, Tailwind CSS, and powered by Zustand for global state management.

## Key Benefits

- 🌍 **Global Access**: Set up once in your root component and use it anywhere in your application
- 🔄 **Centralized State**: Powered by Zustand for efficient global state management
- 🎨 **Multiple alert types**: success, error, info, and warning
- 🖼️ **Support for custom images**
- 🎯 **TypeScript support**
- 🎭 **Tailwind CSS Styling**: Built with Tailwind CSS for consistent and customizable design
- 📱 **Responsive design**
- ♿ **Accessibility support**

## Prerequisites

- React 18.0.0 or higher
- Zustand 5.0.0 or higher
- Tailwind CSS 3.0.0 or higher

## Installation

Using npm:
```bash
# Install the package and its peer dependencies
npm install @bongkow/globalui zustand@^5.0.0 tailwindcss@^3.0.0
```

Using yarn:
```bash
# Install the package and its peer dependencies
yarn add @bongkow/globalui zustand@^5.0.0 tailwindcss@^3.0.0
```

## Quick Start

1. Set up the `GlobalUIProvider` in your root component (e.g., `main.tsx` or `App.tsx`):

```tsx
import { GlobalUIProvider } from '@bongkow/globalui';

function App() {
  return (
    <GlobalUIProvider>
      {/* Your entire application */}
    </GlobalUIProvider>
  );
}
```

2. Use the `useAlert` hook anywhere in your application:

```tsx
import { useAlert } from '@bongkow/globalui';

// You can use this in any component, at any level of your component tree
function MyComponent() {
  const { showAlert } = useAlert();

  const handleClick = () => {
    showAlert(
      'This is a success message!',
      'Success',
      'optional-image-url.jpg',
      'success'
    );
  };

  return <button onClick={handleClick}>Show Alert</button>;
}
```

## Alert Types

The component supports four types of alerts, each with its own Tailwind CSS styling. If no type is specified, it defaults to a clean white theme:

- `success`: Green theme with checkmark icon (bg-green-50, text-green-800)
- `error`: Red theme with error icon (bg-red-50, text-red-800)
- `info`: Blue theme with information icon (bg-blue-50, text-blue-800)
- `warning`: Yellow theme with warning icon (bg-yellow-50, text-yellow-800)
- `default`: White theme with black text (bg-white, text-black)

## Props

The `showAlert` function accepts the following parameters:

```typescript
showAlert(
  message: string,      // Required: The message to display
  title?: string,       // Optional: The alert title
  imgUrl?: string,      // Optional: URL for a custom image
  type?: AlertType      // Optional: 'success' | 'error' | 'info' | 'warning'
)
```

## Styling

The component is built with Tailwind CSS and requires Tailwind CSS to be properly configured in your project.

### Tailwind CSS Configuration

Make sure your `tailwind.config.js` includes the necessary paths:

```js
module.exports = {
  content: [
    // ... your other content paths
    './node_modules/@bongkow/globalui/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of your config
}
```

## Development

```bash
# Install dependencies
npm install
# or
yarn

# Start development server
npm run dev
# or
yarn dev

# Build the library
npm run build
# or
yarn build

# Run linting
npm run lint
# or
yarn lint
```

## License

MIT © [Bongkow](https://github.com/bongkow)
