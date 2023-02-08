import React from "react";
import timer from "../images/timer.png";
import lens from "../images/lens.png";
import iso from "../images/iso.png";
import location from "../images/location.png";

class Info extends React.Component {
    render() {
        return(
            <div className='info'>
                <img src={timer} alt="timer" />
                <a>{this.props.timer}</a>
                <img src={lens} alt="lens" />
                <a>{this.props.lens}</a>
                <img src={iso} alt="iso" />
                <a>{this.props.iso}</a>
                <img src={location} alt="location" />
                <a>{this.props.location}</a>
            </div>
        )
    }
}

export default Info