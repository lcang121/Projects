import React from 'react';
import './App.css';
import ProjectList from './components/ProjectList'
import Header from '../src/components/Header'

function App() {
  return (
    <div className="App">

      {/* <script defer src="https://code.jquery.com/jquery-2.1.3.min.js"></script> */}
      {/* <script defer src="http://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script> */}
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" /> */}

      {/* <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="style.css" /> */}

      <Header />
      <ProjectList />

    </div>
  );
}

export default App;

