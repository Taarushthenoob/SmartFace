import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ url, box }) => {
  return (
    <div className="center">
      <div className="absolute mt5">
        <img id="inputImg" alt="" src={url} width="600px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            left: box.leftCol,
            bottom: box.bottomRow,
            right: box.rightCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
