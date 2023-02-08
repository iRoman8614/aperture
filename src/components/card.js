import React from "react";
import Readmore from "./readmore";

class Card extends React.Component {
    render() {
        return(
            <div className="card" style={{backgroundImage: `url(${this.props.style})`}}>
                <div>
                    <h1 className="cardTitle">{this.props.title}</h1>
                    <h2 className="cardSubtitle">{this.props.subtitle}</h2>
                    <Readmore content="Read more" />
                </div>
            </div>
        )
    }
}

export default Card