import { ToastContainer } from "react-toastify";
import "./navbar.css";
import authService from "../../../service/auth.service";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../../Hook/Store";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);
  const lang = useStore((state) => state.lang);
  const setLang = useStore((state) => state.setLang);
  const user = useStore((state) => state.user);
  console.log(user);

  const logout = () => {
    setUser(null);
    authService.logout();
    navigate("/Login");
  };
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);
  return (
    <>
      <ToastContainer />
      <div className="Navbar">
        <div className="leftside">
          <select
            name="lang"
            defaultValue={lang}
            onChange={(e) => setLang(e.target.value)}
            className="absolute top-0 left-0"
          >
            <option value="en">EN</option>
            <option value="am">AM</option>
          </select>
          <div className="leftLeft">
            <h1>{t("Student")}</h1>
          </div>
          {user === null || user === undefined ? (
            <></>
          ) : (
            <div className="leftRight">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                {/* <a href="/CreateStudent">Create Student</a> */}
                <Link to="/CreateStudent">Creaate Student</Link>
              </div>
              <div>
                <Link to="/List">List</Link>
              </div>
              <Link to="/CreateUser">User</Link>
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
            <div>{user?.Email}</div>
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
