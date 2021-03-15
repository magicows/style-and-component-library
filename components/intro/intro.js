import { Component } from "react";
import "./intro.scss";

class Intro extends Component {
    render() {
        return (
            <div className="intro row">
                <div className="col-12">
                    <h2>Hello!</h2>
                    <p>
                        Welcome to the component library. All I have are dogs
                        and text at the moment. Click the screen size toggles at
                        the top though, it is wild.
                    </p>
                    <p>
                        A proof of concept and I dont think this is gonna
                        work...
                    </p>
                </div>
            </div>
        );
    }
}

export default Intro;