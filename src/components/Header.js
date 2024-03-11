import { LOGO_URL, PROFILE_URL, } from "./utils/constant";

const Header = ()=>{
    return(
          <div className="header-wrapper">
                <div className="logo-container">
                      <img src={`${LOGO_URL}`} width="50" height="50" />
                </div>
                <div className="right-menu-container">
                      <div className="nav-menus">
                            <ul>
                                  <li>Home</li>
                                  <li>Services</li>
                                  <li>Contact</li>
                            </ul>
                      </div>
                      <div className="profile">
                            <img src={`${PROFILE_URL}`}  width="40"  height="40"  />
                      </div>
                </div>
          </div>
    )
}

export default Header;