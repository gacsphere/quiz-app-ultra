import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";

function App() {
  return (
    <div>
      <Header />
      <main className="card-list">
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
