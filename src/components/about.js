import React from "react";

class About extends React.Component {
    render() {
        return(
            <div className="about">
                <h1 className="title">{this.props.title}</h1>
                <h2 className="subtitle">{this.props.subtitle}</h2>
                <div className={this.props.className}>
                    {this.props.includes}
                </div>
            </div>
        )
    }
}
export default About