import React, { Component } from 'react'

class TypingTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            theTimer: "00:00:00",
            testWrapper: "grey",
            timeCounter: 0,
            quote: "",
            author: "",
        }

        this.mil = 0;
        this.sec = 0;
        this.min = 0;
        this.intervalID = null;
        this.timerRunning = false;
        this.gameIsRunning = false;
        this.gameOver = false;
    }

    componentDidMount() {
        this.getRandomQuote()
    }

    getRandomQuote() {
        const fetchData = async () => {
            const quote = await this.props.getQuote.map(ar => { return (ar.quotes[this.getRandomInt(101)]).quote })
            const author = await this.props.getQuote.map(ar => { return (ar.quotes[this.getRandomInt(101)]).author })
            this.setState({
                quote: `${quote}`,
                author: `${author}`,
            });
        }
        fetchData();
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    removeLeadingZero = (time) => {
        if (time < 10) {
            time = "0" + time;
        }
        return time;
    }

    startTimer = () => {
        if (this.mil < 100) {
            this.mil++;
        }
        else {
            this.sec++;
            this.mil = 0;
        }
        if (this.sec > 59) {
            this.min++;
            this.sec = 0;
        }

        this.setState({
            theTimer: (this.removeLeadingZero(this.min) + " : " +
                this.removeLeadingZero(this.sec) + " : " +
                this.removeLeadingZero(this.mil)),
            timeCounter: this.state.timeCounter += 1
        });
    }

    start = () => {
        if (this.state.userInput.length === 0 && !this.gameOver && !this.timerRunning) {
            this.intervalID = setInterval(this.startTimer, 10);
        }
        this.timerRunning = true;
    }

    compareText = () => {
        var textToCompare = this.state.quote.substring(0, this.state.userInput.length);

        if ((this.state.quote === this.state.userInput) && (this.timerRunning)) {
            if (this.calculateWPM() > this.props.getLowestScore.wpm) {
                // set state that will activate victory screen.
                this.props.setIsTopScore(true)
            }
            alert(`You Win!
                Your average WPM is ${this.calculateWPM()}`);

            this.props.setWPM(this.calculateWPM())
            this.timerRunning = false;
            this.gameIsRunning = false;
            this.gameOver = false;
            clearInterval(this.intervalID);
        }
        else {
            if (textToCompare === this.state.userInput) {
                this.setState({ testWrapper: "green" });
            }
            else {
                this.setState({ testWrapper: "red" });
            }
        }
    }

    handleChange = (e) => {
        this.setState({ userInput: e.target.value })
    }

    reset = () => {
        this.mil = 0;
        this.sec = 0;
        this.min = 0;
        this.gameOver = false;
        this.setState({
            testWrapper: "grey",
            userInput: "",
            theTimer: "00:00:00",
            timeCounter: 0,
        });
        this.getRandomQuote();
        clearInterval(this.intervalID);
        this.intervalID = null;
        this.timerRunning = false;
    }

    calculateWPM = () => {
        var wordCounter = this.state.quote.split(" ").length  //count words in string
        var wpm = (wordCounter / 5) / (this.state.timeCounter / 1000 / 60)

        return (wpm.toFixed(2))
    }

    render() {
        return (<>
            <section className="test-area" onKeyPress={this.start} onKeyUp={this.compareText} >
                <blockquote className="blockquote" id="origin-text">
                    <p className="mb-0">{this.state.quote}</p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">{this.state.author}</cite>
                    </footer>
                </blockquote>

                <div className="test-wrapper" style={{ borderColor: this.state.testWrapper }}>
                    <textarea id="test-area" name="textarea" rows="6" placeholder="Click here and start typing!" onChange={this.handleChange} value={this.state.userInput}></textarea>
                </div>

                <div className="meta">
                    <section id="clock">
                        <div className="timer" >{this.state.theTimer}</div>
                    </section>

                    <button id="reset" onClick={this.reset}>Start over</button>
                </div>

            </section >
        </>
        )
    }
};

export default TypingTest;