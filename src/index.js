import React from "react";
import * as ReactDOMClient from "react-dom/client";
import './styles/index.css';
import Post1 from './components/post1';
import Post2 from './components/post2';
import Post3 from './components/post3';
import PostMain from "./components/postMain";
import Header from "./components/header";
import Readmore from "./components/readmore";
import About from "./components/about";
import partner1 from "./images/partner1.png";
import partner2 from "./images/partner2.png";
import partner3 from "./images/partner3.png";
import partner4 from "./images/partner4.png";
import partner5 from "./images/partner5.png"
import sweden from "./images/sweden.png";
import Info from "./components/info";
import Card from "./components/card";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";
import Footer from "./components/footer";

const root = ReactDOMClient.createRoot(document.getElementById("root"));


class Site extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <PostMain />
                <About
                    title="What we do."
                    subtitle="The areas that we're specialized in."
                    includes={<div className='cardContainer'>
                        <Card style={card1}
                              title="Product Photography"
                              subtitle="Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam." />
                        <Card style={card2}
                              title="Architecture Photography"
                              subtitle="Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec." />
                        <Card style={card3}
                              title="Drone Photography"
                              subtitle="Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam." />
                        <Card style={card4}
                              title="Wildlife Photography"
                              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis." />
                    </div>}/>
                <Post1 />
                <div className="container2">
                    <div>
                        <div id="container">
                            <h1 id="title1">The Gear cage</h1>
                            <h1 id="title2">The tools that we use.</h1>
                            <h1 id="title3">The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</h1>
                            <Readmore content="Check it out" />
                        </div>
                    </div>
                    <div className="empty" style={{backgroundImage: `url(${sweden})`}}>
                        <div className="space"></div>
                        <Info timer="0,8''" lens="f/5,6" iso="100" location="Sweden" />
                    </div>
                </div>
                <Post2 />
                <About title="Past clients"
                       subtitle="Trusted by your favourite companies"
                       includes={
                           <div className="container">
                               <img className="item" src={partner1} alt="partner"/>
                               <img className="item" src={partner2} alt="partner"/>
                               <img className="item" src={partner3} alt="partner"/>
                               <img className="item" src={partner4} alt="partner"/>
                               <img className="item" src={partner5} alt="partner"/>
                           </div>
                        }/>
                <Post3 />
                <About className="container"
                       title="Need help with photography or videography?"
                       subtitle="We're here for you!"
                       includes={<Readmore content="Get in touch" />} />
                <Footer />
            </div>
        )
    }
}


root.render(<Site />);