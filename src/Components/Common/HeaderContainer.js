import React from 'react';
import "./HeaderContainer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export class HeaderContainer extends React.Component {
  
  constructor() {
    super();

    this.state = { objectiveDroppedDown: true }//this.props.droppedDown };

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
      <div className='h2HeadingContainer' onClick={this.onObjectiveDroppedDownChanged}>
        <div className='h2Heading'><strong>{this.props.header}</strong></div>
        <div className='h2Collapsable'>
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
  }

  componentDidUpdate(state, props) {
    if (this.props.resize != props.resize && this.props.resize) {
      this.determineContainerHeight();
      this.props.resizeComplete();
    }
  }

  componentDidMount() {
    this.content = document.getElementById(this.props.id);
    this.setState({objectiveDroppedDown: this.props.droppedDown}, this.determineContainerHeight);
  }

  render() {
    return (
      <div className='h2Container'>
        {this.renderHeader()}
        <div id={this.props.id} className='h2Content'>
          <div className='h2Children'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}