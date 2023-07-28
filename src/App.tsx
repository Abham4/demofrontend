import Navbar from "./components/Layout/Navbar";
import CreateStudent from "./pages/CreateStudent";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from "./pages/List";
import Home from "./pages/Home";
import Login from "./pages/Login";
import useStore from "./Hook/Store";
import CreateUser from "./pages/CreateUser";
function App() {
  const user = useStore((state) => state.user)
  console.log(user);
  
  return(
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={(user === null || user === undefined )? <Login/> : <Home/>}></Route>
        <Route path="/Login" element={(user === null || user === undefined )? <Login/> : <Home/>}></Route>
        <Route path="/CreateStudent" element={<CreateStudent/>} />
        <Route path="/List" element={<List/>} />
        <Route path="/CreateUser" element={<CreateUser/>}></Route>
      </Routes>
    </Router>
 </>
  )
}

export default App;
