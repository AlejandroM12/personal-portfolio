import { Header, Home } from "@/components";
import "./style/index.css";
const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
};

export default App;
