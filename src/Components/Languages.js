import React from 'react';
import { HeaderContainer } from './Common/HeaderContainer';
import Resume from '../Resume.json';

export class Languages extends React.Component {
  
  constructor() {
    super();
    this.state = { resizeLanguages: true };
  }

  render() {
    return (
        <HeaderContainer id="Languages" header="Languages" droppedDown={false}
            resize={this.state.resizeLanguages} 
            resizeComplete={() => this.setState({resizeLanguages: false})}
        >
            <ul>
                {Resume.Languages.map((skill) => <li>{skill}</li>)}
            </ul>
        </HeaderContainer>
    );
  }
}