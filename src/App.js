import "./Colors.scss";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const express = require('express');

// var app = express();
// var path = require('path');

function App() {

  // app.use(express.static(path.join(__dirname, 'build')));
  // app.get('/*', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
  // });

  return (
    <>
      <Main />
    </>
  );
}

export default App;
