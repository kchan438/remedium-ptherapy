import React from 'react';

import { Col, Row } from 'react-bootstrap';

import * as posenet from '@tensorflow-models/posenet';
const net = await posenet.load();

async function estimatePoseOnImage(imageElement) {
    const net = await posenet.load();

    const pose = await net.estimateSinglePose(imageElement, {
        flipHorizontal: false
    });
    return pose;
}

const imageElement = document.getElementById(image1);

const pose = estimagePoseOnImage(imageElement);

console.log(pose);

const tracking = () => {
    return(
        <>
        <div>
            <h1>Pose Tracking</h1>
            <img src="./images(test)/todd.jpg" id="image1" />
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