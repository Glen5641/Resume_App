import React from 'react';
import './App.scss';
import { Objective } from './Components/Objective';
import { Experience } from './Components/Experience';
import { Projects } from './Components/Projects';
import { Certifications } from './Components/Certifications';
import { Education } from './Components/Education';
import { Skills } from './Components/Skills';
import { Languages } from './Components/Languages';
import { Tech } from './Components/Tech';
import { LeftContainer } from './Components/Common/LeftContainer';
import { Content } from './Components/Common/Content';
import { Header } from './Components/Common/Header';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
          <LeftContainer />
          <Header />
          <Content>
            <Objective />
            <Experience />
            <Certifications />
            <Education />
            <Projects />
            <Skills />
            <Languages />
            <Tech />
          </Content>
      </div>
    );
  }
}
