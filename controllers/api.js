function ss() {
    var vid = document.getElementById("vid-box").firstChild;
    var frame = captureVideoFrame(vid, 'png');

    // Show the image
    /*var img = document.getElementById('my-screenshot');
    img.setAttribute('src', frame.dataUri);*/

    // Upload the image 
    /*var formData = new FormData();
    formData.append('file', frame.blob);*/

    console.log("frame>>", frame);

    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize",
        headers: {
            'Ocp-Apim-Subscription-Key':'7805dd109acd4b36a3908322d04ce7d0',
            'Content-Type':'application/octet-stream'
        },
        data: makeblob(frame),
        contentType: 'application/octet-stream',
        processData: false,
        type: 'POST',
        success: function(data){
            console.log(data);
        },
        error: function(err) {
            console.log("Error", err);
        }
    });
    

    
}

makeblob = function (dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
    }
    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
}