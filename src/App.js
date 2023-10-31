import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";//gives you possibility to navigate through pages

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Category />
     <Pages/>
     </BrowserRouter>
    </div>
  );
}

export default App;
