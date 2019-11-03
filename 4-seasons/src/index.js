import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//     return (
//         <div>Hi there!</div>
//     );
// }

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {lat: null, errorMsg: ''}
        
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
            <div>latitude: {this.state.lat}</div>
        );

        return(
            <div>loading...</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))