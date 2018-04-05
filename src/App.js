import React, { Component } from 'react';
import Websocket from 'react-websocket';
import Graph from "./Components/Graph.js"
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            data: ""
        }
    }

    handleData(data){
        let bestPrice = JSON.parse(data).a;
        console.log("STATE DATA:" + this.state.data);
        console.log("WEBSOCKET DATA: "+JSON.parse(data).a)
        this.setState({
            data: bestPrice
        });
    }

    render() {

        //CHANGE ME!!!!!!!
        const SYMBOL = "btcusdt";

        let graph;
        if(this.state.data == ""){
            graph = <h1></h1>;
        }
        else{
            graph = <Graph data = {this.state.data}/>
        }
        return (
            <div>
                <h1>{SYMBOL}:${this.state.data}</h1>
                <Websocket url={'wss://stream.binance.com:9443/ws/'+ SYMBOL + '@ticker'}
                           onMessage={this.handleData.bind(this)}/>

                {graph}
                <p>Hello World</p>
            </div>
        );
    }
}

export default App;
