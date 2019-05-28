import React, {Component} from 'react';

export default class RefsExample extends React.Component {
  render () {
    return (
      <div>
        <h2>Refs Example</h2>
        <Input />

        <br /><br />

        <h3>Callback refs</h3>

        <CustomeInput />
      </div>
    );
  }
}

class Input extends Component {
  constructor (props) {
    super (props);
    this.inputRef = React.createRef ();
  }

  handleClick = () => {
    this.inputRef.current.focus ();
  };

  render () {
    return (
      <div className="input">
        <label>Name: </label>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    );
  }
}

class CustomeInput extends Component {
  constructor (props) {
    super (props);
    this.childRef = React.createRef ();
  }

  handleClick = () => {
    this.inputRef.focus ();
  };

  handleDom = () => {
    console.log (this.childRef.current);
  };

  render () {
    return (
      <div>
        <input type="text" ref={el => (this.inputRef = el)} />
        <button onClick={this.handleClick}>Focus</button>
        <br />
        <ChildInput childRef={this.childRef} handleDom={this.handleDom} />
      </div>
    );
  }
}

const ChildInput = props => {
  return (
    <div className="child-input" ref={props.childRef}>
      <button onClick={props.handleDom}>access DOM</button>
    </div>
  );
};
