import React from 'react';
import { HeaderContainer } from './Common/HeaderContainer';
import Resume from '../Resume.json';

export class Certifications extends React.Component {
  
  constructor() {
    super();
    this.state = { resizeCertifications: true };
  }

  render() {
    return (
        <HeaderContainer id="Certifications" header="Certifications" droppedDown={true}
            resize={this.state.resizeCertifications} 
            resizeComplete={() => this.setState({resizeCertifications: false})}
        >
            {Resume.Certifications.map((cert) => 
                <div className='experienceHeader'>
                    <div>{cert.Title}</div>
                    <div>Status: {cert.Status}</div>
                </div>
        )}
        </HeaderContainer>
    );
  }
}