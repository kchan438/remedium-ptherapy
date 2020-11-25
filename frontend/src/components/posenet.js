import * as posenet from '@tensorflow-models/posenet';
// import * as tf from '@tensorflow/tfjs';
const videoWidth = 900;
const videoHeight = 700;

async function cameraSetup() {
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error(
            'Browser API navigator.mediaDevices.getUserMedia not available');

        const video = document.getElementById('video');
        video.width = videoWidth;
        video.height = videoHeight;

        const stream = await navigator.mediaDevices.getUserMedia({
            'audio': false,
            'video': {
                facingMode: 'user',
                width: videoWidth,
                height: videoHeight,
            },
        });
        video.srcObject = stream;
    }

    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        }
    })
}

class PoseNet extends Component {
    static defaultProps = {
        videoWidth: 900,
        videoHeight: 700,
        flipHorizontal: true,
        algorithm: 'single-pose',
        showVideo: true,
        showSkeleton: true,
        showPoints: true,
        minPoseConfidence: 0.1,
        minPartConfidence: 0.5,
        maxPoseDetections: 2,
        nmsRadius: 20,
        outputStride: 16,
        imageScaleFactor: 0.5,
        skeletonColor: '#ffadea',
        skeletonLineWidth: 6,
        loadingText: 'Loading.. please be patient...'
    }

    constructor(props) {
        super(props, PoseNet.defaultProps)
    }

    getCanvas = elem => {
        this.canvas = elem
    }

    getVideo = elem => {
        this.video = elem
    }

    render() {
        return (
            <div>
                <div>
                    <video id="videoNoShow" playsInline ref={this.getVideo} />
                    <canvas className="webcam" ref={this.getCanvas} />
                </div>
            </div>
        )
    }
}

export default PoseNet;