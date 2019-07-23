

var app = {
    // Application Constructor
    
            initialize: function(){
                document.getElementById('btn').addEventListener('click', app.takephoto);
            },
            onDeviceReady: function() {
                this.receivedEvent('deviceready');
            },
            takephoto: function() {
                let opts = {
                    quality:80,
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    encodingType: Camera.EncodingType.JPEG,
                    cameraDirection: Camera.Direction.BACK,
                    targetWidth: 500,
                    targetHeight:400,
        
                };
                navigator.camera.getPicture(app.onCameraSuccess, app.onFail, opts);
                navigator.geolocation.getCurrentPosition(app.onGeoSuccess, app.onFail, opts);
                
            },
            onCameraSuccess: function(imgURI) {
                document.getElementById('photo').src = "data:image/jpeg;base64,"+imgURI;
        
            },

            onGeoSuccess: function(position) {
                var date = new Date(position.timestamp);
                document.getElementById('msg').textContent = date + ", " + position.coords.latitude + ", " + position.coords.longitude;

            },
            onfail: function(msg) {
                document.getElementById('msg').textContent = msg;
            }
            

        };
        
       

    app.initialize();
