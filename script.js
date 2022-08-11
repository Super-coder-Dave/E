camera = document.getElementById("Webcam")
Webcam.set({
    width: 350,
    height: 270,
    image_format: 'jpeg',
    jpeg_quality: 100
});
Webcam.attach(camera);