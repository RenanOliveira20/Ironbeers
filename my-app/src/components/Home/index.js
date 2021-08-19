import React, { Component } from "react";
import Card from "../Card";
import "./style.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="carrousel">
          {this.props.data.map((e,i) => {
            if(i < 4)return <Card key={e.id} data={e} />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
