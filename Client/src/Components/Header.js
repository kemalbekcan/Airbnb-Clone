import React, { Fragment } from 'react';
import { Icon } from '../icons';
import { AiOutlineMenu } from 'react-icons/ai';
function Header() {
  return (
    <Fragment>
      <header className="header">
        <div className="header--down">
          <p className="header_info">
            COVID-19 çerçevesinde aldığımız önlemler hakkındaki en güncel bilgileri öğrenin
          </p>
          <div className="menu">
            <div className="logo">
              <a href="#">
                <Icon name="airbnb" size={32} />
              </a>
            </div>
            <nav>
              <ul>
                <li>
                  <button>Konaklama yerleri</button>
                </li>
                <li>
                  <button>Deneyimler</button>
                </li>
                <li>
                  <a href="#">Çevrim içi deneyimler </a>
                </li>
              </ul>
            </nav>
            <div className="account">
              <ul>
                <li>
                  <a href="#">Ev sahibi olun</a>
                </li>
                <li>
                  <button className="header_language">
                    <Icon name="earht" size={16} />
                  </button>
                </li>
                <li>
                  <button className="header_profile-button">
                    <AiOutlineMenu className="header_hamburger-icon" />
                    <Icon name="userGravatar" size={32} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-search">
            <div></div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
export default Header;
