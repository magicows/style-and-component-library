import "./hero.scss";
import styled from "styled-components";

const Image = styled.img`
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    .someOtherStuff {
        display: block;
    }
    &:before {
        margin: 0;
    }
`;

const dupy = styled.div`
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    .someOtherStuff {
        display: block;
    }
    &:before {
        margin: 0;
    }
`;

const HeroMaster = styled.div`
    p {
        margin: 20px auto;
    }
`;

function conjure(event) {
    var elems = [event.target];
    var data = "";
    for (var n = 0; n < elems.length; n++) {
        if (elems[n].parentNode.tagName) {
            data += elems[n].tagName + ": " + elems[n].className + "\n";
            var style = [];
            var prStyle = [];
            var result = [];
            var css = window.getComputedStyle(elems[n], null);
            var prCss = window.getComputedStyle(elems[n].parentNode, null);
            for (var i = 0; i < css.length; i++) {
                if (css.getPropertyValue(css[i])) {
                    style[i] = css[i] + ":" + css.getPropertyValue(css[i]);
                }
            }
            for (var i = 0; i < prCss.length; i++) {
                if (prCss.getPropertyValue(prCss[i])) {
                    prStyle[i] =
                        prCss[i] + ":" + prCss.getPropertyValue(prCss[i]);
                }
            }
            for (var i = 0; i < style.length; i++) {
                if (style[i] != prStyle[i]) {
                    result.push(style[i]);
                }
            }
            for (var i = 0; i < result.length; i++)
                data += i + ":" + result[i] + "\n";
        }
        data += "-----------------------\n";
    }
    console.log(data);
    return data;
}

const condure = (e) => {
    console.log(e.target + "{" + e.componentStyle.rules[0] + "}");
};

export default function Hero() {
    

    return (
        <HeroMaster className="row">
            <div className="col-12">
                <img
                    src="https://placedog.net/1920/400"
                    alt=""
                    onClick={(e) =>
                        console.log(getComputedStyle(e.target).cssText)
                    }
                />
                <p>
                    onClick, I console.log css properties via getComputedStyle.
                </p>
            </div>
            <div className="happy col-6">
                <img
                    src="https://placedog.net/300/300"
                    alt=""
                    onClick={(e) => conjure(e)}
                />
                <p>
                    onClick, I console.log css properties of my element and my
                    parents'.
                </p>
            </div>
            <div className="col-6">
                <Image
                    src="https://placedog.net/300/300"
                    alt=""
                    onClick={() => condure(Image)}
                />
                <p>
                    onClick, I console.log css properties of my
                    styled-components element and children as scss, lovely
                    jubbly. Except styled-components don't work in iframes lol
                </p>
            </div>
            <div className="col-12">
                <img src="https://placedog.net/1000/400" />
            </div>
        </HeroMaster>
    );
}
