import React, { Component } from "react";
import Card from "../Card";
import Footer from "../Footer/index";
import "./style.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="carrousel">
          {this.props.data.map((e) => {
            return <Card key={e.id} data={e} />;
          })}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
