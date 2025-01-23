import "./index.css";
import ListItems from "./components/ListItems";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <ListItems />
      <Footer />
    </div>
  );
}

export default App;
