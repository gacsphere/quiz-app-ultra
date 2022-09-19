import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="card-list">
      <Header />
      <Card />
      <Card />
      <Card />
      <Navigation />
    </div>
  );
}

export default App;
