import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisaply from './SeasonDisplay';

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     //This is also valid state
    //     // this.state = {lat: null, errorMsg: ''}
        
    // }

    state = {lat: null, errorMsg: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({lat: pos.coords.latitude}),
            err => this.setState({errorMsg: err.message})
        )
    }

    render() {
        if (this.state.errorMsg && !this.state.lat)
        return (
            <div>error: {this.state.errorMsg}</div>
        );

        if (this.state.lat && !this.state.err)
        return (
            <SeasonDisaply lat={this.state.lat}/>
        );

        return(
            <div>loading...</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))