import React from "react";
import circle from "/src/images/circle.png"

class Readmore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "Read more"
        }
    }
    render() {
        return(
            <div className="RMButton">
                <img className="RMCircle" src={circle} alt="RM" />
                <a id="RMText">{this.props.content}</a>
            </div>
        )
    }
}

export default Readmore