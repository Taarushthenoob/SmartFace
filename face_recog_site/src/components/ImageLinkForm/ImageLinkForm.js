import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className="center1">
      <p className="center f3 black">{`FaceSmart lets you detect faces in any image. Post URL of image here to give it a try!`}</p>
      <div className="center">
        <div className="center form1 pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>{`Detect`}</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
