import React, { Component } from "react";
import Carousel  from "react-elastic-carousel";
import Card from "../Card";
import Footer from "../Footer/index";
import "./style.css";
class Home extends Component {
  render() {
    const breakpoints = [
      {width:0, itemsToShow: 1},
      {width:100, itemsToShow: 2},
      {width:300, itemsToShow: 3},
      {width:500, itemsToShow: 4}
    ]
    return (
      <div>
        <Carousel breakPoints = {breakpoints}>
          {this.props.data.map((e,i) => {
            return(
            <Card key={e.id} data={e} number= {i}/>
          )
          })}
        </Carousel>
        <Footer/>
      </div>
    );
  }
}

export default Home;
