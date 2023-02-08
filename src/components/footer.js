import React from "react";
import twitter from "/src/images/twitter.png";
import instagram from "/src/images/instagram.png";
import facebook from "/src/images/facebook.png";
import logo from "/src/images/logo.png";

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="foot1">
                    <div className="flogo">
                        <img src={logo}/>
                        <h1 className="f1title">Photographers & videographers capturing the world around us.</h1>
                    </div>
                    <div className="columns">
                        <div className="f1column1">
                            <h1>Business areas</h1>
                            <a>Product Photography</a>
                            <a>Architecture Photography</a>
                            <a>Drone Photography</a>
                            <a>Wildlife Photography</a>
                        </div>
                        <div className="f1column2">
                            <h1>Pages</h1>
                            <a>Gear cage</a>
                            <a>Featured images</a>
                            <a>Contact</a>
                            <a>Style guide</a>
                            <a>Instructions</a>
                            <a>Changelog</a>
                        </div>
                    </div>
                </div>
                <div className="foot2">
                    <div>
                        <h1 className="f2title">Subscribe to our newsletter</h1>
                        <h2 className="f2subtitle">Read about all the things we do.</h2>
                    </div>
                    <div className="footform">
                        <a className="f2button">submit</a>
                    </div>
                </div>
                <div className="foot3">
                    <div>
                        <h1> &copy; Aperture Photography, Inc. All rights reserved. Licensing</h1>
                    </div>
                    <div className="social">
                        <img src={twitter} />
                        <img src={instagram} />
                        <img src={facebook} />
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer