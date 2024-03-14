import React from 'react';
import "./Header.scss";
import Me from '../../Pictures/Me.png'; // with import


export class Header extends React.Component {

  render() {
    return (
        <div>
        <div className='header'>
            <div>
                <img style={{height: '200px', marginTop: '-20px', marginLeft: '-20px'}} src={Me}/>
            </div>
            <div>
                <div style={{height: '150px'}}>
                    <div style={{fontSize: '3.5vw'}}>Clayton <strong>"Chase"</strong> Glenn</div>
                    <div style={{fontSize: '1.5vw'}}>Software Engineer</div>
                </div>
            </div>
        </div>
        <div style={{clear: 'both'}} />
        </div>
    );
  }
}