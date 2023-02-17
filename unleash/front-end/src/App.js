import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./TestComponent";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import { NEW_DESIGN_ON } from "./flags";

function App() {
  TestComponent();
  const nevigation = NEW_DESIGN_ON ? null : <PrimarySearchAppBar />;
  return <div>{nevigation}</div>;
}

export default App;
