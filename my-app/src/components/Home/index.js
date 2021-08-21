import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import api from "../../api/api";
import Card from "../Card";
import Footer from "../Footer/index";
import "./style.css";
class Home extends Component {
  state ={
    beers : [],
    vodkas: [],
    whiskys: [],
    gins: [],
    liquors: [],
    boxes: []
  }

  async componentDidMount() {
    try {
      const getBeers = await api.getBeers('beers');
      const getVodkas = await api.getBeers('vodkas');
      const getWhiskys = await api.getBeers('whiskys');
      const getGins = await api.getBeers('gins');
      const getLiquors = await api.getBeers('liquors');
      const getBoxes = await api.getBeers('boxes');
      this.setState({
        beers: getBeers,
        vodkas: getVodkas,
        whiskys: getWhiskys,
        gins: getGins,
        liquors: getLiquors,
        boxes: getBoxes
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
          <h1>Vodkas</h1>
          <Carousel breakPoints={breakPoints }>
          {this.state.vodkas.map((e,i) => {
           return  <Card key={e.id} data={e} number={i} />;
          })}
          </Carousel>
          <h1>Whiskys</h1>
          <Carousel breakPoints={breakPoints }>
          {this.state.whiskys.map((e,i) => {
           return  <Card key={e.id} data={e} number={i} />;
          })}
          </Carousel>
          <h1>Gins</h1>
          <Carousel breakPoints={breakPoints }>
          {this.state.gins.map((e,i) => {
           return  <Card key={e.id} data={e} number={i} />;
          })}
          </Carousel>
          <h1>Liquors</h1>
          <Carousel breakPoints={breakPoints }>
          {this.state.liquors.map((e,i) => {
           return  <Card key={e.id} data={e} number={i} />;
          })}
          </Carousel>
          <h1>Boxes</h1>
          <div className = 'boxes'>
          {this.state.boxes.map((e,i) => {
           return  <Card key={e.id} data={e} number={i} />;
          })}
          </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
