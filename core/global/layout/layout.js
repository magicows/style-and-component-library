import Header from '../header/header';
import Meta from '../meta/meta';
import Nav from '../navigation/navigation';
import { Component } from 'react';
import './layout.scss';

const layoutStyle = {
  padding: 20,
  border: '1px solid #DDD'
};

class Layout extends Component{
  constructor (props) {
    super(props)
    this.state = {
      show: true,
      size: 3
    }
  }

  toggle = () => {
    this.setState({
        show: !this.state.show
    });
  }

  sizeToggle = (screen) => {
    this.setState({
      size: screen
    });
  }

  setWidth = () => {
    let sized;

    switch(this.state.size) {
      case 0:
        sized = 'mob'
        break;
      case 1:
        sized = 'tab'
        break;
      case 2:
        sized = 'lap'
        break;
      default:
        sized = 'full';
    }
  
    return sized;
  }

  render(){
    return(
      <div className={this.state.show ? 'page open' : 'page'}>
        <Meta title={this.props.title}/>
        <Nav toggler={this.toggle} />
        <div className="oh">
          <Header sizer={this.sizeToggle} activeSizer={this.state.size} />
          <main style={layoutStyle} className={this.setWidth()}>
              {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}

export default Layout;