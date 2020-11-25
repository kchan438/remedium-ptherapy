import React from 'react';
import todd from '../images(test)/todd.jpg';
import { Col, Row } from 'react-bootstrap';

// import posenetjs from '../components/posenet.js';
// import { PoseNet } from '@tensorflow-models/posenet';
import PoseNet from '../components/posenet.js';


const tracking = () => {
    return(
        <>
        <div>
            <h1>Pose Tracking</h1>
            <br></br>
            {/* <img src={todd} id="video" alt="no image" id="image1" width="400px" height="500px" /> */}
            <PoseNet />
        </div>
        </>
    );
}

export default tracking;



            // {/* {/* Load TensorFLow.js */}
            // <script src="https://unpkg.com/@tensorflow/tfjs"></script>
            // {/* Load Posenet */}
            // <script src="https://unpkg.com/@tensorflow-models/posenet"></script>
            // <script>
            //     <script type="text/javascript">
            //         posenet.load().then(function(net) {

            //         });
            //     </script>
            // </script>