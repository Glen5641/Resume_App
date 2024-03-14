import React from 'react';
import { HeaderContainer } from './Common/HeaderContainer';
import Resume from '../Resume.json';

export class Tech extends React.Component {
  
  constructor() {
    super();
    this.state = { resizeTech: true };
  }

  render() {
    return (
        <HeaderContainer id="Tech" header="Tech" droppedDown={false}
            resize={this.state.resizeTech}
            resizeComplete={() => this.setState({resizeTech: false})}
        >
            <ul>
                {Resume.Tech.map((skill) => <li>{skill}</li>)}
            </ul>
        </HeaderContainer>
    );
  }
}