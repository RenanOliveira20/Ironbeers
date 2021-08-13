import axios from 'axios';
import React, { Component } from 'react';
import Card from '../Card';
import Navbar from '../Navbar/Navbar'
import './style.css'

class Home extends Component {
    state = {
        dados:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8000/beers').then((response) => {
            this.setState({
                dados: response.data
            })
        })
    }
    render() {
        return (
            <div>
                <Navbar/>

                <div className='carrousel'>
                {
                    this.state.dados.map((e , i) =>{
                        if(i < 3){
                        return <Card key={e.id} data = {e}/>
                    }
                    })
                }
                </div>
            </div>
        );
    }
}

export default Home;