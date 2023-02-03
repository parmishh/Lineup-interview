
import "./App2.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === "http://localhost:3000/chat"
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >
      <div className="blur4" style={{ bottom:"70%", right: "0rem" }}></div>
      <div className="blur" style={{ bottom:"90%", right: "4rem" }}></div>
      <div className="blur2" style={{ top: "45%", right: "0" }}></div>
      <div className="blur2" style={{ top: "20%", left: "-8rem" }}></div>
      <div className="blur" style={{ top: "60%", left: "-18rem" }}></div>

      <div className="blur2" style={{top:"0" ,right:"40%"}}></div>
      <div className="blur2" style={{bottom:"0" ,right:"40%"}}></div>
      
      
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

       
      </Routes>
    </div>
  );
}

export default App;
