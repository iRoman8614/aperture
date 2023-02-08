import React from "react";

class Mainpost extends React.Component {
    render() {
        return (
            <div className="mainpost" >
                <h1 className="maintitle">{this.props.maintitle}</h1>
                <h1 className="mainname">{this.props.mainname}</h1>
                <h1 className="mainsubtitle">{this.props.mainsubtitle}</h1>
            </div>
        )
    }
}

export default Mainpost