import React, {Component, useRef} from 'react';

import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';
import { drawKeypoints, drawSkeleton } from './utilities.js';

function PoseNet() {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    //load posenet
    const runPoseNet = async () => {
        const net = await posenet.load({
            inputResolution:{width:640, height: 480},
            scale: 0.5
        })
        //
        setInterval( () => {
            detect(net)
        }, 100)
    };

    const detect = async (net) => {
        if(typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState===4 ){
            //Get video properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            //Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;


            //make detections
            const pose = await net.estimateSinglePose(video);
            console.log(pose);

            drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
        }
    };

    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;

        drawKeypoints(pose["keypoints"], 0.5, ctx);
        drawSkeleton(pose["keypoints"], 0.5, ctx);
    }
        runPoseNet();

        return (
            <div>
                {/* className="page-background" */}
                <div>
                    {/* , color: "white" */}
                    <center style={{fontWeight: "bold"}}><h1>Body Tracking through Webcam</h1></center>
                    <Webcam ref={webcamRef} style={{position:"absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0, textAlign: "center", zIndex: 9, width: 640, height: 480}} />
                    <canvas ref={canvasRef} style={{position:"absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0, textAlign: "center", zIndex: 9, width: 640, height: 480}} />
                </div>
            </div>
        )
}

export default PoseNet;