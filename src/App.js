import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import Geolocation from './components/Geolocation';
import Navigation from './components/Navigation';
import RefsExample from './components/RefsExample';
import Accordian from './components/Accordian';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      counter: 0,
    };
  }

  handleBack = () => {
    this.props.history.goBack ();
  };

  render () {
    return (
      <div className="container-fluid">
        <h2> React Advance Topics</h2>
        <button className="btn btn-secondary" onClick={this.handleBack}>
          Back
        </button>
        <br />
        <hr />
        <br />
        <br />
        <Switch>
          <Route path="/" exact component={Navigation} />
          <Route path="/geolocation" component={Geolocation} />
          <Route path="/refs" component={RefsExample} />
          <Route path="/accordian" component={Accordian} />
        </Switch>
      </div>
    );
  }
}

export default withRouter (App);
