import ThemeContext from "./Context/ThemeContext";
import Form from "./Components/Form";
import Button from "./Components/Button";
import ThemeProvider from "./Context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Form />
      <Button>Toggle Theme</Button>
    </ThemeProvider>
  );
}
