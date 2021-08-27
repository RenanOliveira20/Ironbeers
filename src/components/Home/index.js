import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Card from "../Card";
import Footer from "../Footer/index";
import "./style.css";
import SearchItem from "../Search";

class Home extends Component {
  state ={
    beers: [],
    vodkas: [],
    whiskys: [],
    gin:[],
    boxes: []
  }

  async componentDidMount() {
    try {
      this.filterDrinks()
    } catch (e) {
      Error(e)
    }
  }
  filterDrinks = () =>{
    let copy = [...this.props.data]
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
      {width : 1300, itemsToShow: 5},  
      {width : 1700, itemsToShow: 6},
    ]
    return (
      this.props.search?
      <div>
        <ul>
        {
          this.props.data.map((e,i)=>{
            console.log(e)
            return <SearchItem data ={e}  key = {i} />
          })
        }
        </ul>

      </div>
      :
      <div> 
        <h1 className= 'tittle'>Beers</h1>
        <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.beers.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <h1 className= 'tittle'>Vodkas</h1>
          <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.vodkas.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <h1 className= 'tittle'>Whiskys</h1>
          <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.whiskys.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <h1 className= 'tittle'>Gins</h1>
          <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.gin.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <h1 className= 'tittle'>Liquors</h1>
          <Carousel breakPoints = {breakPoints} className = 'carousel'>
          {this.state.gin.map( e => {
            return <Card key = {e.id} data ={e}/>
          })}
          </Carousel>
          <h1 className= 'tittle'>Boxes</h1>
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
