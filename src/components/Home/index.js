import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import api from "../../api/api";
import Card from "../Card";
import Footer from "../Footer/index";
import "./style.css";
class Home extends Component {
  state ={
    allDrinks : null,
    beers: [],
    vodkas: [],
    whiskys: [],
    gin:[],
    boxes: []
  }

  async componentDidMount() {
    try {
      const drinks = await api.getBeers();
      this.setState({
        allDrinks: drinks,
      });
    } catch (e) {
      Error(e)
    }
    this.filterDrinks()
  }
  filterDrinks = () =>{
    let copy = [...this.state.allDrinks]
    let filteredBeer = copy.filter((e) => {
      return e.type.toLowerCase().includes('beer')
     })
     let filteredVodka = copy.filter((e) => {
      return e.type.toLowerCase().includes('vodka')
     })
     let filteredWhisky = copy.filter((e) => {
      return e.type.toLowerCase().includes('whisky')
     })
     let filteredGin = copy.filter((e) => {
      return e.type.toLowerCase().includes('gin')
     })
     let filteredBox = copy.filter((e) => {
      return e.type.toLowerCase().includes('boxe')
     })
    console.log(copy)
    this.setState({
      beers: filteredBeer,
      vodkas: filteredVodka,
      whiskys : filteredWhisky,
      gin : filteredGin,
      boxes: filteredBox
    })
  }
  render() {
    const breakPoints = [
      {width : 0, itemsToShow: 1},
      {width : 200, itemsToShow: 2},
      {width : 500, itemsToShow: 3},
      {width : 900  , itemsToShow: 4},
    ]
    return (
      <div>
        <h1>Beers</h1>
        <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.beers.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <h1>Vodkas</h1>
          <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.vodkas.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <h1>Whiskys</h1>
          <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.whiskys.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <h1>Gins</h1>
          <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.gin.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <h1>Liquors</h1>
          <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.gin.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <div className= 'boxes'>
            {
              this.state.boxes.map( e => {
                return <Card key = {e.id} data ={e}/>
              })
            }
          </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
