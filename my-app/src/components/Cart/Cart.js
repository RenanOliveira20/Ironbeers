import React from "react";
import ListItem from "../ListCart/ListItem";
class Cart extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map((beer) => {
            return <ListItem key={beer.beerId} data={beer} />;
          })}
        </ul>
      </div>
    );
  }
}
export default Cart;
