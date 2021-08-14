import axios from 'axios';
import React, { Component } from 'react';
import Card from '../Card';
import  Nav from '../Navbar/Navbar';
import './style.css'

class Home extends Component {
    state = {
        dados: [],
        filtered: []
    }
    componentDidMount() {
        axios.get('http://localhost:8000/beers').then((response) => {
            this.setState({
                dados: response.data,
                filtered:response.data
            })
        })
    }
    handleOnSearch = (value)=>{
        let copyArray= this.state.dados;
        copyArray = copyArray.filter(e =>{
            console.log(e.name)
            return e.name.toLowerCase().includes(value.toLowerCase())
        })
        this.setState({
           filtered: copyArray
        })
    }
    render() {
        return (
            <div>
                <Nav action= {this.handleOnSearch}/>
                <div className='carrousel'>
                    {
                        this.state.filtered.map((e, i) => {
                           
                                return (
                                    <Card key={e.id} data={e} />
                                )
                            
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;
