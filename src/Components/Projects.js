import React from 'react';
import { HeaderContainer } from './Common/HeaderContainer';
import { ContentContainer } from './Common/ContentContainer';
import Resume from '../Resume.json';

export class Projects extends React.Component {
  
  constructor() {
    super();
    this.state = { resizeProjects: true };
  }

  render() {
    return (
        <HeaderContainer id="Projects" header="Projects" droppedDown={false}
            resize={this.state.resizeProjects}
            resizeComplete={() => this.setState({resizeProjects: false})}
        >
        {Resume.Projects.map((project, index) => 
            <ContentContainer id={"Projects" + index} droppedDown={false}
                onResize={() => this.setState({resizeProjects: true})}
                header={
                    <div>
                    <div className='experienceHeader'>
                        <div>{project.Name}</div>
                    </div>
                    <div className='experienceYears'>{project.Stack}</div>
                    </div>
            }>
                <div>{project.Description}</div><br />
            </ContentContainer>
        )}
      </HeaderContainer>
    );
  }
}