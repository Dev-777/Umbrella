import React, { Component } from 'react';
import { connect }          from 'react-redux';
import './app.css';



class App extends Component {

  componentDidMount()
  {

  }

  componentDidUpdate( prevProps, prevState, snapshot )
  {


  }


  render()
  {
    return (

      <div id="app_DIV" className='d-flex align-item-center'>
        <div className='d-flex justify-content-between'>

          <div id='sectionOne'>
            <div id='deathRoad'>
              <h5>One</h5>
              <h5>Two</h5>
              <h5>Three</h5>
            </div>
            <div id='answer'>
              <p>Answer</p>
            </div>
            <div id='keyboard'>
              <div id='k'>K</div>
              <div id='b'>B</div>
              <div id='c'>C</div>
              <div id='d'>D</div>
              <div id='e'>E</div>
              <div id='f'>F</div>
              <div id='g'>G</div>
              <div id='h'>H</div>
              <div id='i'>I</div>
              <div id='j'>J</div>
              <div id='a'>A</div>
              <div id='l'>L</div>
              <div id='m'>M</div>
              <div id='n'>N</div>
              <div id='o'>O</div>
              <div id='p'>P</div>
              <div id='q'>Q</div>
              <div id='r'>R</div>
              <div id='s'>S</div>
              <div id='z'>Z</div>
              <div id='u'>U</div>
              <div id='v'>V</div>
              <div id='w'>W</div>
              <div id='x'>X</div>
              <div id='y'>Y</div>
              <div id='t'>T</div>
            </div>
          </div>

          <div id='sectionTwo'>
            <div id='question'>
              <p>Question</p>
            </div>
            <div>sound</div>
            <div>score</div>
            <div>Start Game</div>
          </div>


        </div>


      </div> );

  }
}

const mapStateToProps = ( state ) =>
{
  return {
    state : state,
  };
};

export default connect( mapStateToProps )( App );