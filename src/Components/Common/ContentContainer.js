import React from 'react';
import "./ContentContainer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export class ContentContainer extends React.Component {
  
  constructor() {
    super();

    this.state = { objectiveDroppedDown: true };

    this.content = null;

    this.onObjectiveDroppedDownChanged = this.onObjectiveDroppedDownChanged.bind(this);
    this.determineContainerHeight = this.determineContainerHeight.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  determineContainerHeight() {
    this.content.style.maxHeight = (this.state.objectiveDroppedDown) ? 
      (this.content.offsetHeight + this.content.scrollHeight) + "px" : 0;
  }

  renderHeader() {
    return (
      <div className='h1HeadingContainer' onClick={this.onObjectiveDroppedDownChanged}>
        <div className='h1Heading'>{this.props.header}</div>
        <div className='h1Collapsable'>
          <FontAwesomeIcon icon={this.state.objectiveDroppedDown ? 
              faChevronUp : faChevronDown
          } />
        </div>
        <div style={{clear: 'both'}} />
      </div>
    );
  }

  onObjectiveDroppedDownChanged() {
    this.setState({objectiveDroppedDown: !this.state.objectiveDroppedDown}, this.determineContainerHeight);
    this.props.onResize();
  }

  componentDidMount() {
    this.content = document.getElementById(this.props.id);
    this.setState({objectiveDroppedDown: this.props.droppedDown}, this.determineContainerHeight);
    this.props.onResize();
  }

  render() {
    return (
      <div className='h1Container'>
        {this.renderHeader()}
        <div id={this.props.id} className='h1Content'>
          <div className='h1Children'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}