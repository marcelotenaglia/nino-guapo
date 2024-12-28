import { AppRouter } from "./AppRouter";
import App from "./App";

export function AppHookContainer() {
  return (
    <App>
      <AppRouter />
    </App>
  );
}
