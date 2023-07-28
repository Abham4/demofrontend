import { ToastContainer } from "react-toastify";
import "./navbar.css";
import authService from "../../../service/auth.service";
import { useNavigate } from "react-router-dom";
import useStore from "../../../Hook/Store";
const Navbar = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);
  const logout = () => {
    setUser(null);
    authService.logout();
    navigate("/Login");
  };
  console.log(user?.Username);

  return (
    <>
      <ToastContainer />
      <div className="Navbar">
        <div className="leftside">
          <div className="leftLeft">
            <h1>Student</h1>
          </div>
          {user === null || user === undefined ? (
            <></>
          ) : (
            <div className="leftRight">
              <div>
                <a href="/Home">Home</a>
              </div>
              <div>
                <a href="/CreateStudent">Create Student</a>
              </div>
              <div>
                <a href="/List">List</a>
              </div>
              <div><a href="/CreateUser">User</a></div>
              <div>
                <button onClick={() => logout()}>Logout</button>
              </div>
            </div>
          )}
        </div>
        {user === null || user === undefined ? (
          <></>
        ) : (
          <div className="rightside">
            <div>{user?.Username}</div>
            <div className="img">
              <img
                className="img"
                src={require("../../../assets/ab.png")}
              ></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
