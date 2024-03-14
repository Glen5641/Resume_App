import React from 'react';
import { HeaderContainer } from './Common/HeaderContainer';
import { ContentContainer } from './Common/ContentContainer';
import Resume from '../Resume.json';

export class Education extends React.Component {
  
  constructor() {
    super();
    this.state = { resizeEducation: true };
  }

  render() {
    return (
        <HeaderContainer id="Education" header="Education" droppedDown={false}
            resize={this.state.resizeEducation} 
            resizeComplete={() => this.setState({resizeEducation: false})}
        >
            <ContentContainer id="Education1" droppedDown={false} 
                onResize={() => this.setState({resizeEducation: true})} 
                header={
                <div>
                    <div className='experienceHeader'>
                        <div>{Resume.Education.Name}</div>
                        <div>{Resume.Education.Location}</div>
                        <div>{Resume.Education.Year}</div>
                    </div>
                    <div className='experienceYears'>{Resume.Education.Degree}</div>
                    <div className='experienceYears'>{Resume.Education.Major}</div>
                </div>
            }>
                <br /><div>{Resume.Education.Activities}</div>
                <br /><div>{Resume.Education.Coursework}</div>
            </ContentContainer>
        </HeaderContainer>
    );
  }
}