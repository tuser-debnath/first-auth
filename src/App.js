import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Services from "./components/Services/Services";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services />
            </RequireAuth>
          }
        ></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
