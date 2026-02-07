import "./App.css";
import HomePage from "./components/Homepage";
import Nav from "./components/Nav";

function App() {
  return (
   <div className="py-10 px-7 lg:px-28">
      <Nav />
      <HomePage />
   </div>
  );
}

export default App;
