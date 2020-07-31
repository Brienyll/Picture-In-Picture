const videoElement = document.getElementById('video')
const button = document.getElementById('button');

// slect media stream, pass to video element then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}
// button event
button.addEventListener('click', async () => {
    // disable button
    button.disable = true;
    //start pip
    await videoElement.requestPictureInPicture();
    button.disable = false;
});

// Load
selectMediaStream();