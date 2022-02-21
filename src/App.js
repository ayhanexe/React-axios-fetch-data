import logo from './logo.svg';
import './App.css';
import Person from "./components/Person";
import Header from "./components/Header";
import Ref from "./components/Ref";

function App() {
  return (
    <div className="App">
      <Header title="Aykhanexe" />
      <Ref />
      <Person />
    </div>
  );
}

export default App;
