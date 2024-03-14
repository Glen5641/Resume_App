import React from 'react';
import { HeaderContainer } from './Common/HeaderContainer';
import Resume from '../Resume.json';

export class Skills extends React.Component {
  
  constructor() {
    super();
    this.state = { resizeSkills: true };
  }

  render() {
    return (
        <HeaderContainer id="Skills" header="Skills" droppedDown={false}
            resize={this.state.resizeSkills}
            resizeComplete={() => this.setState({resizeSkills: false})}
        >
            <ul>
                {Resume.Skills.map((skill) => <li>{skill}</li>)}
            </ul>
        </HeaderContainer>
    );
  }
}