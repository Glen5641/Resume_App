import React from 'react';
import "./Container.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export class Container extends React.Component {
  
  constructor() {
    super();
    this.state = {
      objectiveDroppedDown: true
    };
    this.content = null;
    this.onObjectiveDroppedDownChanged = this.onObjectiveDroppedDownChanged.bind(this);
  }

  onObjectiveDroppedDownChanged() {
    console.log('hello')
    if (this.state.objectiveDroppedDown) {
      this.content.style.maxHeight = 0;
    } else {
      this.content.style.maxHeight = this.content.scrollHeight + "px";
    }
    this.setState({objectiveDroppedDown: !this.state.objectiveDroppedDown});
  }

  componentDidMount() {
    this.content = document.getElementsByClassName("content")[0];
    this.content.style.maxHeight = this.content.scrollHeight + "px";
    console.log(this.content.style.maxHeight)
  }

  render() {
    return <div className='container'>
      <div className='headingContainer'>
        <div className='heading'>OBJECTIVE</div>
        <div className='collapsable' 
          onClick={this.onObjectiveDroppedDownChanged}
        >
          <FontAwesomeIcon icon={
            this.state.objectiveDroppedDown ? 
            faChevronUp : faChevronDown
          } />
        </div>
        <div style={{clear: 'both'}} />
      </div>
      <div className='content'>
        <div className='children'>
          {this.props.children}
        </div>
      </div>
    </div>;
  }
}