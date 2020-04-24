import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "darkblue",
  (): void => {},
]);

export default ThemeContext;
