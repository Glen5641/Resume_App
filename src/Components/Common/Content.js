import React from 'react';
// import "./LeftContainer.scss";

export class Content extends React.Component {

  render() {
    return (
      <div style={{right: '0', position: 'absolute', width: '90%', 
      height: '93vh', overflowY: 'auto', overflowX: 'hidden'}}>
        {this.props.children}
      </div>
    );
  }
}