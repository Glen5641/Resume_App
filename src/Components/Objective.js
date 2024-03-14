import React from 'react';
import { HeaderContainer } from './Common/HeaderContainer';
import Resume from '../Resume.json';

export class Objective extends React.Component {
  
  constructor() {
    super();
    this.state = { resizeObjective: true };
  }

  render() {
    return (
        <HeaderContainer id="Objective" header="Objective" droppedDown={true}
            resize={this.state.resizeObjective} 
            resizeComplete={() => this.setState({resizeObjective: false})} 
        >
            <span>{Resume.Objective}</span>
        </HeaderContainer>
    );
  }
}