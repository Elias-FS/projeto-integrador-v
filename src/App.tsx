import { TextBox } from "./components/LoginForm/LoginForm";
import { Navbar } from "./components/Navbar/Navbar";
import "./global.css";

export function App() {
  return (
    <div>
      <Navbar />
      <TextBox />
    </div>
  );
}
