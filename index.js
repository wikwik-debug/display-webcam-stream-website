let video = document.getElementById("videoElement");

let startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {
    
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.srcObject = stream;
        }).catch(function (error) {
            console.log("Something went wrong");
        })
    } else {
        console.log("getUserMedia not supported");
    }

})

let stopButton = document.getElementById("stopButton");

stopButton.addEventListener("click", function () {
    let tracks = video.srcObject.getTracks();
    tracks.forEach(function (track) {
        track.stop();
    })
    video.srcObject = null;
})
