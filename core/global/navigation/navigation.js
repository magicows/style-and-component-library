import { Component } from 'react';
import Link from 'next/link';
import Toggle from './toggle'
import './navigation.scss';

class Nav extends Component{
    render(){
        return(
            <>
                <Toggle togz={this.props.toggler} />                
                <nav> 
                    <img className="comp-logo" src="./logo-11.svg" alt="Your logo" />
                    <Link href="/">
                        <a><span>Home</span></a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/instructions" >
                        <a title="Instruction Page">How To Build</a>
                    </Link>
                </nav> 
            </>
        )
    }
}

export default Nav;