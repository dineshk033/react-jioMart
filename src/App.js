import "./App.css";
import Cart from "./component/cart";
import { HashRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import PageNotFound from "./pages/404";
import ProductDetail from "./pages/productDetailPage";
import React from "react";
export const ThemeContext = React.createContext({ theme: "dark" });
function App() {
  return (
    <Router>
      <ThemeContext.Provider value={{ theme: "dark" }}>
        <div className="container-fluid ">
          <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1">Groceries Jio Mart</span>
              <div className="d-flex " id="navbarNavAltMarkup">
                <div className="d-flex navbar-nav flex-row">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link mr-3 active" : "nav-link mr-3"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link mr-3 active" : "nav-link mr-3"
                    }
                    to="/cart"
                  >
                    Cart
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
          {
            //Selecting page based on path
          }
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="groceries">
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
