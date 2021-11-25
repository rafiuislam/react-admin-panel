import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./app.css";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";

function App() {
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/users" element={<UserList />} />
                    <Route exact path="/user/:userId" element={<User />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
