import React from 'react';
import { Link } from 'react-router';
import DashboardSvg from '../Shared/SvgComponents/DashboardSvg';
import ReportingSvg from '../Shared/SvgComponents/ReportingSvg';
import './SideMenuBar.scss';

class SideMenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarIconToggle: true,
      sidebarToggle: true
    };
    this.toggleShowHide = this.toggleShowHide.bind(this);
  }
  toggleElement(key) {
    const elementKey = document.getElementsByClassName(`${key}`);
    for (let k = 0; k < elementKey.length; k += 1) {
      //elements[k].classList.toggle('active');
      const elements = elementKey[k].getElementsByClassName('expandCollaps');
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.toggle('active');
      }
    }
  }
  toggleShowHide() {
    this.setState({ sidebarIconToggle: !this.state.sidebarIconToggle, sidebarToggle: !this.state.sidebarToggle });
  }
  render() {
    const pathArr = this.props.location.pathname.split('/').filter(Boolean);
    const currentloc = this.props.location;
    let LoG = false;
    const listItems = [];
    if (this.props.compain.compainInfo) {
      LoG = this.props.compain.compainInfo;
    }
    if (LoG) {
      if ('types' in LoG) {
        const LogUserMenu = LoG.types;
        Object.keys(LogUserMenu).map((key) => {
          const link = LogUserMenu[key];
          if (link.entities.length === 0) {
            listItems.push(<li className="sidebar-menu-block">
              <Link className={`sidebar-item-main ${(pathArr[0] === link.slug ? 'active' : '')}`} to={link.slug}>
                <div className="sidebar-item-icon"> <DashboardSvg /> </div>
                <div className="sidebar-item-text"> {key} </div>
              </Link> </li>);
          }
          if (link.entities.length !== 0) {
            let LogUserSubMenu = link.entities;
            LogUserSubMenu = LogUserSubMenu[0];
            const listItemss = [];
            Object.keys(LogUserSubMenu).map((keySub) => {
              const linkk = LogUserSubMenu[keySub];
              listItemss.push(<li> <Link className={`sidebar-item-sub  ${(currentloc.pathname.replace('/', '') === linkk.slug ? 'active' : '')}`} to={linkk.slug}>{keySub}</Link> </li>);
              return 1;
            });
            listItems.push(<li className={`sidebar-menu-block ${key}`}>
              <a className={`sidebar-item-main ${(pathArr[0] === link.slug ? 'active' : '')}`}>
                <div className="sidebar-item-icon"><ReportingSvg /></div>
                <div className="sidebar-item-text"> {key} </div>
              </a>
              <div className="sidebar-item-expand expandCollaps" onClick={() => this.toggleElement(key)}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.03 7">
                <polyline points="12.03 6 6.52 1 1 6" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
              </svg> </div>
              <ul className="sidebar-menu-sub expandCollaps " id="subMenu">
                {listItemss}
              </ul>
            </li>
            );
          }
          return 1;
        });
      }
    }
    return (
      <div
        className={`sidebar ${this.state.sidebarToggle ? '' : 'hiddenMenu'} ${listItems.length !== 0 ? '' : 'hide'}`}
        id="sidebarShowHide"
      >
        <nav className="sidebar-menu">
          <ul>
            {listItems}
            <div
              className={`sidebar-toggler js-sidebar-toggle hideShow ${this.state.sidebarIconToggle ? 'active' : ''}`}
              id="sidebarExpandButton"
              onClick={this.toggleShowHide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.86 21.24">
                <polyline points="7.86 1 1 10.62 7.86 20.24" fill="none" stroke="#0bacf4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
              </svg>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideMenuBar;
