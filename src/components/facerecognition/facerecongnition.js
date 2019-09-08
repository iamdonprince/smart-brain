import React from 'react';
import './faceregnition.css';

const Facerecognition = ({box, imageUrl }) => {
    return(
        <div className="center ma" >

        <div className="absolute mt2 ">
         <img id="inputimage" className=" mt2"  src={imageUrl} width="500px" alt='' height="auto" />
          <div className="bounding-box" style={{top: box.topRow,right: box.rightCol, left:box.leftCol,bottom: box.bottomRow }}></div>

          </div>
        </div>
    )
}


export default Facerecognition;