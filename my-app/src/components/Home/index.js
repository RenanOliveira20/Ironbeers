import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import api from "../../api/api";
import Card from "../Card";
import Footer from "../Footer/index";
import "./style.css";
class Home extends Component {
  state ={
    beers : []
  }

  async componentDidMount() {
    try {
      const getBeers = await api.getBeers('beers');
      this.setState({
        beers: getBeers
      });
    } catch (e) {
      this.setState({
        erro: true,
      });
    }
  }
  render() {
    const breakPoints = [
      {width : 0, itemsToShow: 1},
      {width : 100, itemsToShow: 2},
      {width : 200, itemsToShow: 3},
      {width : 300  , itemsToShow: 4}
    ]
    return (
      <div>
        <h1>Beers</h1>
          <Carousel breakPoints={breakPoints }>
          {this.state.beers.map((e,i) => {
           return  <Card key={e.id} data={e} number={i} />;
          })}
          </Carousel>
        <Footer />
      </div>
    );
  }
}

export default Home;
