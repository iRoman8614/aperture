import React from "react";
import nepal from "../images/nepal.png";
import Post from "./post";
import Info from "./info";

class Post3 extends React.Component {
    render() {
        return (
            <div className="post" style={{
                backgroundImage: `url(${nepal})`
            }}>
                <Post title="Star fall in the Himalayas" subtitle="Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula." />
                <Info timer="6''" lens="f/11" iso="800" location="Nepal" />
            </div>
        )
    }
}

export default Post3