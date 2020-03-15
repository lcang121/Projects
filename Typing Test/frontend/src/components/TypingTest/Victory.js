import React from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap';

const MAX_CHARACTER = 15;
const MIN_CHARACTER = 2;

const Victory = (props) => {
    const [inputStr, setInputStr] = React.useState("");
    const [isLess, setIsLess] = React.useState(true);

    React.useEffect(() => {
        var CheckIfEmpty = () => { inputStr.length > MIN_CHARACTER && inputStr.length < MAX_CHARACTER ? setIsLess(false) : setIsLess(true) }
        CheckIfEmpty()
    }, [inputStr])

    var HandleChange = (e) => {
        setInputStr(e.target.value)
    }

    var SubmitName = (e) => {
        if (isLess) {
            alert(`Your name must consist between ${MIN_CHARACTER} to ${MAX_CHARACTER} characters!`)
            e.preventDefault();
        }
        else {
            axios.put(`http://localhost:4000/highScore/${props.getLowestScore._id}`, {
                first_name: inputStr,
                wpm: props.wpm,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <>
            <Modal centered show={props.getIsTopScore}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">Congratulations! You made it to Leaderboard!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* TODO convert below to bootstrap-react*/}
                    <form onSubmit={SubmitName}>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Please enter your name</label>
                            <input type="text" className={isLess ? "form-control is-invalid" : "form-control is-valid"} id="formGroupExampleInput" value={inputStr} onChange={HandleChange} placeholder="Your name" />
                        </div>
                        <div className="modal-footer text-center">
                            <button type="submit" className="btn btn-primary mx-auto">Submit!</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Victory;