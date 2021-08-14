import React from 'react';
import List from '../ListCart/List';
class Cart extends React.Component {

    render() {
        return (
            <div>
                <ul>
               <List/>     
                </ul>
            </div>
        );
    }
}
export default Cart 