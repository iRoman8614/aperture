import React from "react";
import costarica from "../images/costa_rica.png";
import Post from "./post";
import Info from "./info";

class Post2 extends React.Component {
    render() {
        return (
            <div className="post" style={{backgroundImage: `url(${costarica})`}}>
                <Post title="Monstera Leafs" subtitle="Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt." />
                <Info timer="1/400s" lens="f/3,5" iso="100" location="Costa Rica" />
            </div>
        )
    }
}

export default Post2