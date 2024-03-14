import React from 'react';
import { HeaderContainer } from './Common/HeaderContainer';
import { ContentContainer } from './Common/ContentContainer';
import './Experience.scss';
import Resume from '../Resume.json';

export class Experience extends React.Component {
  
  constructor() {
    super();
    this.state = { resizeExperience: true };
  }

  collectDescription(description) {
    return (Array.isArray(description)) ? [description, undefined] : [undefined, description];
  }

  renderEmploymentHighlight(highlight, i)  {
    let [descriptionArr, descriptionStr] = this.collectDescription(highlight.Description);
    
    if (descriptionStr != undefined) {
      return (<span key={highlight.Title + i}><strong>{highlight.Title}</strong>: {highlight.Description}<br /><br /></span>);
    }
    {(descriptionArr != undefined) && <span><ul>{descriptionArr.map((d) => <li>{d}</li>)}</ul><br /><br /></span>}

    return (<span key={highlight.Title + i}><strong>{highlight.Title}</strong><ul>{descriptionArr.map((d, index) => <li key={highlight.Title + index}>{d}</li>)}</ul></span>);
  }

  renderEmploymentDescription(experience) {
    let [descriptionArr, descriptionStr] = this.collectDescription(experience.Description);

    return (
      <span>
        {(descriptionStr != undefined) && <span>{descriptionStr}<br /><br /></span>}
        {(descriptionArr != undefined) && <span><ul>{descriptionArr.map((d, index) => <li key={"description" + index}>{d}</li>)}</ul></span>}
        {(descriptionArr == undefined && descriptionStr == undefined) && <br />}
        {experience.Highlights.map((highlight, index) => this.renderEmploymentHighlight(highlight, index))}
      </span>
    );
  }

  renderEmploymentTitle(experience) {
    return (
      <div>
        <div className='experienceHeader'>
          <div>{experience.Title}</div>
          <div>{experience.PlaceOfEmployment}</div>
          <div>{experience.Location}</div>
        </div>
        <div className='experienceYears'>{experience.Years}</div>
      </div>
    );
  }

  render() {
    return (
        <HeaderContainer id="Experience" header="Experience" droppedDown={true}
            resize={this.state.resizeExperience} 
            resizeComplete={() => this.setState({resizeExperience: false})}
        >
            {Resume.Experiences.map((experience, index) => 
                <ContentContainer droppedDown={(index == 0)} key={"Experience" + index} id={"Experience" + index}
                    onResize={() => this.setState({resizeExperience: true})} 
                    header={this.renderEmploymentTitle(experience)}
                >
                    {this.renderEmploymentDescription(experience)}
                </ContentContainer>
            )}
        </HeaderContainer>
    );
  }
}