import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Account from "./Components/Account";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </UserProvider>
     </Router>

  );
}

export default App;
  