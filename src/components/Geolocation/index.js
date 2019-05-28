import React from 'react';


export default class Geolocation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lat: null
        }
    }

    componentWillMount() {
        window.navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat: position.coords.latitude
            });
        })
    }

    render(){
        return(
            <div>
            <h3> Geolocation</h3>
            <br />
                Location: {this.state.lat}
            </div>
        )
    }
}