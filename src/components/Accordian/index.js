import React, {Component} from 'react';
import Data from './mockUp';

import './style.css';

export default class Accordian extends Component {
  constructor (props) {
    super (props);
    this.state = {
      selected: '',
      height: 0,
    };

    this.divRef = React.createRef ();
  }

  setHeight = height => {
    this.setState ({
      height,
    });
  };

  handleClick = e => {
    this.setState ({
      selected: e.target.innerText,
    });
  };

  render () {
    return (
      <div className="accordians">
        {Data.map (ele => {
          return (
            <AccordianTab
              key={ele.id}
              {...ele}
              handleClick={this.handleClick}
              selected={this.state.selected}
              setHeight={this.setHeight}
              ref={this.divRef}
            />
          );
        })}
      </div>
    );
  }
}

class AccordianTab extends Component {
  render () {
    const selectedClass = this.props.selected === this.props.name
      ? 'active'
      : '';
    return (
      <div className="accordian">
        <div className="accordian-header" onClick={this.props.handleClick}>
          {this.props.name}
        </div>
        <div className={`accordian-body ${selectedClass}`} ref={this.divHeight}>
          {this.props.body}
        </div>
      </div>
    );
  }
}
