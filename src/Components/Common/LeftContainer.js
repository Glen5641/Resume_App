import React from 'react';
// import "./LeftContainer.scss";
import logo from '../../Pictures/Background-logos.png'; // with import

export class LeftContainer extends React.Component {

  render() {
    return (
      <div style={{position: 'absolute', width: '25%', height: '100%', display: 'flex', flexWrap: 'wrap', overflowY: 'hidden', overflowX: 'hidden'}}>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{height: '405px', overflow: 'hidden'}}><img src={logo}/></div>
        <div style={{position: 'absolute', width: '100%', height: '100%', opacity: '.9', backgroundColor: '#161823'}}></div>
      </div>
    );
  }
}