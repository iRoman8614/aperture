import React from "react";
import japan from "../images/japan.png";
import Post from "./post";
import Info from "./info";

class Post1 extends React.Component {
    render() {
        return (
            <div className="post" style={{
                backgroundImage: `url(${japan})`
            }}>
                <Post title="Sunset at Mount Fuji" subtitle="Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non." />
                <Info timer="1''" lens="f/16" iso="400" location="Japan" />
            </div>
        )
    }
}

export default Post1