const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, and then play

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    }catch (error) {
        // Catch Error here
        console.log('Error here:',error)
    }
}

button.addEventListener('click', async () =>{
        // Disable button
        button.disabled = true;
        // Start picture in picture
        await videoElement.requestPictureInPicture();
        // Reset 
        button.disabled = false;
});


// Onload
selectMediaStream();