import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Card from "../Card";
import Footer from "../Footer/index";
import "./style.css";
class Home extends Component {
  render() {
    const breakPoints = [
      {width : 0, itemsToShow: 1},
      {width : 100, itemsToShow: 2},
      {width : 200, itemsToShow: 3},
      {width : 300  , itemsToShow: 4}
    ]
    return (
      <div>
          <Carousel breakPoints={breakPoints }>
          {this.props.data.map((e,i) => {
           return  <Card key={e.id} data={e} number={i} />;
          })}
          </Carousel>
        <Footer/>
      </div>
    );
  }
}

export default Home;
