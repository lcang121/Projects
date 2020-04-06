import React, { useEffect, useState } from 'react'
import axios from 'axios';

const HighScore = (props) => {
    const [highScores, setHighScores] = useState([]);
    const [sortedHS, setSortedHS] = useState([]);

    useEffect(() => {
        const url = '/portfolio/typingtest/highScore';
        axios.get(url).then((Response) => {
            setHighScores(Response.data)
        })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    useEffect(() => {
        var sortHighScores = (hs) => {
            hs.sort(function (obj1, obj2) {
                return parseFloat(obj2.wpm) - parseFloat(obj1.wpm);
            })
            setSortedHS(hs);
        }
        sortHighScores(highScores)
    }, [highScores])

    useEffect(() => {
        var setLowScoreID = () => {
            let min = sortedHS[9]
            props.lowestScore(min)
        }
        setLowScoreID();
    }, [sortedHS])

    return (
        <div>
            <button type="button" className="btn btn-link" data-toggle="modal" data-target="#highScoreModal">
                Leaderboard
        </button>
            <div className="modal" id="highScoreModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title w-100" id="exampleModalCenteredLabel">Leaderboard</h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>WPM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedHS.map((hs, index) =>
                                        (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{hs.first_name}</td>
                                                <td>{hs.wpm}</td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighScore;