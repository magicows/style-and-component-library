import { Component } from 'react';
import './hero.scss';

class Hero extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-6">
                    <img src="https://placedog.net/300/300" alt="" />
                </div>
                <div className="col-6">
                    <img src="https://placedog.net/300/300" alt="" />
                </div>

            </div>
        )
    }
}

export default Hero;