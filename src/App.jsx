import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

// components
import SideBar from "./components/views/sidebar/SideBar";
import Topbar from "./components/views/topbar/Topbar";
import { UserList } from "./pages/userList/UserList";
import { ProductList } from "./pages/productList/ProductList";
import { Product } from "./pages/product/Product";
import { NewProduct } from "./pages/newProduct/NewProduct";
import { DashboardContainer } from "./components/dashboard/DashboardContainer";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path={"/"} exact element={<DashboardContainer/>} />
          {/* user */}
          <Route path={"/users"} element={<UserList />} />
          <Route path={"/newUser"} />
          <Route path={"/user/:userId"} />
          {/* product */}
          <Route path={"/products"} element={<ProductList />} />
          <Route path={"/newProduct"} element={<NewProduct />} />
          <Route path={"/product/:productId"} element={<Product />}></Route>
          {/* none existing routes */}
          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h1>There's nothing here!</h1>
                <Link to={"/"}>
                  <button
                    style={{
                      textDecoration: "none",
                      border: "none",
                      width: 120,
                      borderRadius: 5,
                      padding: "20px",
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Go Back Home
                  </button>
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
