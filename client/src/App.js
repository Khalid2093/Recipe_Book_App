import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Auth from "./pages/auth";
import CreateRecipe from "./pages/create-recipe";
import SavedRecipes from "./pages/saved-recipes";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/auth" element={<Auth></Auth>}></Route>
          <Route
            path="/create-recipe"
            element={<CreateRecipe></CreateRecipe>}
          ></Route>
          <Route
            path="/saved-recipes"
            element={<SavedRecipes></SavedRecipes>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
