import React from 'react';
import './App.css';
import axios from 'axios';
import TypingTest from './components/TypingTest/Test.js';
import HighScore from './components/TypingTest/HighScore.js';
import Victory from './components/TypingTest/Victory.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [],
      lowestScore: [],
      wpm: 0,
      promiseIsResolved: false,
      isTopScore: false,
    }
  }

  componentDidMount() {
    const url = '/portfolio/typingtest/quotes';
    this.setState({
      promiseIsResolved: false
    })
    axios.get(url).then((Response) => {          //send get request to server
      this.setState({                           // assign server resp {players} to players state
        quoteList: Response.data,
        promiseIsResolved: true
      })
    })
      .catch((error) => {
        console.log(error);
      });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  waitForDB = () => {
    if (!this.state.promiseIsResolved) {
      return (<><h1>Fetching quotes from database. Please wait...</h1>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div></>)
    }
    else
      return (<TypingTest getQuote={this.state.quoteList} getLowestScore={this.state.lowestScore} setWPM={this.setWPM} setIsTopScore={this.setIsTopScore} />)
  }

  setlowestScore = (ID) => {
    this.setState({ lowestScore: ID })
  }

  setWPM = (wpm) => {
    this.setState({ wpm: wpm })
  }

  setIsTopScore = (ts) => {
    this.setState({ isTopScore: ts })
  }

  render() {
    return (
      < div className="App" >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <HighScore lowestScore={this.setlowestScore} />
              <button type="button" className="btn btn-link" data-toggle="modal" data-target="#aboutModal">About</button>
              <div className="modal" id="aboutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title  w-100" id="exampleModalLabel">About</h1>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body text-left text-indent">
                      This project is a full stack web application made using MonggoDB, ExpressJS, ReactJS and NodeJS (MERN stack).
                      </div>
                    <div className="modal-body text-left">
                      The front end was designed using Bootstrap and relies heavily on React States and Hooks for DOM manipulation, input validations and the capturing of user inputs.
                      </div>
                    <div className="modal-body text-left">
                      The quotes are being fed using GET request through Rest API from the backend Node/Express server. Same goes with highscores except for the additional updating of data(PUT) handling on the server side. Both are stored on MongoDB Atlas cloud database.
                    </div>
                    <div className="modal-body text-left">
                      Please report bugs to lcang121@gmail.com
                    </div>
                    <div className="modal-body text-left">
                      Thanks and enjoy!
                      </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        <header className="masthead">
          <h1>Typing Test using MERN Stack</h1>
        </header>
        <main className="main">
          <this.waitForDB />
          <Victory getLowestScore={this.state.lowestScore} wpm={this.state.wpm} getIsTopScore={this.state.isTopScore} />
        </main>
      </div >
    );
  }
}

export default App;