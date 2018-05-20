import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../node_modules/semantic-ui/dist/semantic.min.css'
import './style.scss';
import {Segment, Button} from 'semantic-ui-react'


class Test extends Component {
  constructor(props) {
      super(props);

  }

  render() {
  
    return (
        <Segment className="compact">
          <Segment className="compact"><Button>test</Button></Segment>
        </Segment>
    );
     
  }
}

ReactDOM.render(<Test />, document.getElementById("index"));

