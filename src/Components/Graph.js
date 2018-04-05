import React, { Component } from 'react';
import {Sparklines, SparklinesLine, SparklinesSpots} from 'react-sparklines';
import Trend from 'react-trend';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [this.props.data] };
        setInterval(() =>
            this.setState({
                data: this.state.data.concat(this.props.data)
            }), 1000)
    }

    render() {
        return (
            <div>
                <Sparklines data={this.state.data} limit={200}>
                    <SparklinesLine color="#1c8cdc"/>
                    <SparklinesSpots size={1}/>
                </Sparklines>
            </div>
        );
    }
}

export default App;
