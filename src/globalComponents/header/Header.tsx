import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [firstHeader, setFirstHeader] = useState(true);

  const changeHeader = () => {
    console.log(firstHeader)
    console.log(setFirstHeader(!firstHeader));
    nav()
  };
  const nav = () => {

    if (firstHeader) {
      navigate("/booking")
    }
    else {
      navigate("/landing")
    }
  }
  let navigate = useNavigate()
  return (
    <>
      <header>
        <div className="navbar container">
          <div className="navbar__logo">
            <h1 className="navbar__logo--text"
            >Städafint
            </h1>
          </div>
          <ul className="navbar__menu">
            <li className="navbar__menu--2" onClick={() => navigate("/service")}>
              Tjänster

            </li>
            <li className="navbar__menu--3" onClick={() => navigate("/about")}>
              Om oss

            </li>
            <li className="navbar__menu--4" onClick={() => navigate("/contact")}>
              Kontakta oss

            </li>

          </ul>
          <div className="navbar__menu">
            {firstHeader ?
              (
                <button className="dark-btn text-white"
                  onClick={changeHeader} >
                  Mina bokningar
                </button>
              )
              :
              (
                <button className="dark-btn text-white"
                  onClick={changeHeader}
                >Logga ut</button>
              )
            }
            <div className="navbar__btn"></div>

            <div className="navbar__hamburger--menu">
              <i className="bi bi-list"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
