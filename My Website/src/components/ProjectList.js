
import React from 'react';
var listOfImages = [];

class ProjectList extends React.Component {

    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../img/icons', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (
            <>
                <div className="container h1title">
                    <h1 className="projects">Our Works</h1>
                </div>
                <div className="container projects-container">
                    <br />
                    <div className="row text-center">
                        {listOfImages.map((image, key) => (
                            <div key={key} className="col-sm-4 image-container">
                                <img src={image} className="image img-fluid" alt={image} />
                                <div className="middle">
                                    <h4>Title</h4>
                                    <p>Description</p>
                                    <a href="" className="text">Link</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectList