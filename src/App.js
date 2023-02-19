import logo from './logo.svg';
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Homescreens from './screens/Homescreens';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreens />
    </div>
  );
}

export default App;
