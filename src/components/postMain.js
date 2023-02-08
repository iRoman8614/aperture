import React from "react";
import iceland from "../images/iceland.png";
import Info from "./info";
import Mainpost from "./mainpost";

class PostMain extends React.Component {
    render() {
        return (
            <div className="post" id="logopost" style={{
                backgroundImage: `url(${iceland})`
            }}>
                <Mainpost maintitle="Photographer & Filmmaker"
                          mainname="Aperture Studios"
                          mainsubtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique. Duis cursus,
                          mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                          libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
                          imperdiet. Nunc ut sem vitae risus tristique posuere." />
                <Info timer="1/2000s" lens="f/11" iso="100" location="Iceland" />
            </div>
        )
    }
}

export default PostMain