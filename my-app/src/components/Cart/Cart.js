import React from 'react';
import  Nav from '../Navbar/Navbar';
import List from '../ListCart/List'
class Cart extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <ul>
               <List data = {this.props.data}/>     
                </ul>
            </div>
        );
    }
}
export default Cart 