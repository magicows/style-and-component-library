import './header.scss'
import { Component } from 'react';

class Header extends Component {
  
  render(){
    return (
      <div className="header">        
        <div className="header__title">
            Component Library - {new Date().getFullYear()}
        </div>
        <div className="header__options">
          <a id="mobile" className={`header__option header__option--mob ${this.props.activeSizer == 0 ? 'active' : ''}`} onClick={() => this.props.sizer(0)}>
            Mobile          
          </a>
          <a id="tablet" className={`header__option header__option--tab ${this.props.activeSizer == 1 ? 'active' : ''}`} onClick={() => this.props.sizer(1)}>
            Tablet         
          </a>
          <a id="laptop" className={`header__option header__option--lap ${this.props.activeSizer == 2 ? 'active' : ''}`} onClick={() => this.props.sizer(2)}>
            Laptop      
          </a>
          <a id="desktop" className={`header__option header__option--desk ${this.props.activeSizer == 3 ? 'active' : ''}`} onClick={() => this.props.sizer(3)}>
            Full  
          </a>
        </div>
      </div>
    );
  }
}
export default Header;