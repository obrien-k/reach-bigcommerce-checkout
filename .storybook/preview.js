import '../styles/index.css';

// Configures Storybook to log the actions ( onArchiveCart and onPinCart ) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}