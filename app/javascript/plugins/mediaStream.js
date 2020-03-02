const videoRecording = () => {

  let constraintObj = {
    audio: true,
    video: {
      facingMode: "user",
      width: { min: 640, ideal: 1280, max: 1920 },
      height: { min: 480, ideal: 720, max: 1080 }
    }
  };

  const askPermission = document.getElementById('btn-to-pending');
  if (askPermission) {
    askPermission.addEventListener('click', (event) => {
      navigator.mediaDevices.getUserMedia(constraintObj)
      .then(function(mediaStreamObj) {
        //connect the media stream to the first video element
        let video = document.getElementById('record-video');
        if ("srcObject" in video) {
          video.srcObject = mediaStreamObj;
        } else {
          //old version
          video.src = window.URL.createObjectURL(mediaStreamObj);
        }

        video.onloadedmetadata = function(ev) {
          //show in the video element what is being captured by the webcam
          video.play();
        };

        //add listeners for saving video/audio
        let start = document.getElementById('btn-start');
        let stop = document.getElementById('btn-stop');
        // let vidSave = document.getElementById('final-video');
        let mediaRecorder = new MediaRecorder(mediaStreamObj, {
          mimeType: 'video/webm'
        });
        let chunks = [];

        start.addEventListener('click', (ev)=>{
          mediaRecorder.start();
          // console.log(mediaRecorder.state);
        })
        stop.addEventListener('click', (ev)=>{
          mediaRecorder.stop();
          // console.log(mediaRecorder.state);
        });
        mediaRecorder.ondataavailable = function(ev) {
          chunks.push(ev.data);
        }
        mediaRecorder.onstop = (ev)=>{
          let blob = new Blob(chunks, {
            'type' : 'video/webm' 
          });
          chunks = [];
          const csrf = document.querySelector('[name="authenticity_token"]').value
          const id = document.querySelector('#recording-id').dataset.id

          var formData = new FormData();
          formData.append('videodata', blob)
          
          // var xhr = new XMLHttpRequest();
          // xhr.open('PATCH', `/recordings/${id}`, true);
          // xhr.responseType = 'Blob';
          // xhr.setRequestHeader("x-csrf-token", csrf); 
          // xhr.onload = function(e) { }
          // xhr.send(formData);

          return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('PATCH', `/recordings/${id}`, true);
            xhr.responseType = 'Blob';
            xhr.setRequestHeader("x-csrf-token", csrf); 
            xhr.onload = function(e) { 
              if(xhr.status == 200 && xhr.status < 300) {
                resolve(xhr.response)
              } else {
                reject(xhr.statusText)
              }
            };
            xhr.send(formData);
          }).then((data) => {
            // console.log('YES')
            window.location.replace('/dashboard');
          })

      
          // fetch(`/recordings/${id}`, {
          //   method: 'put',
          //   body: formData,
          //   headers: {
          //     'Content-Type': 'video/webm',
          //     'Content-Disposition': 'form-data',
          //     'X-CSRF-Token': csrf
          //   },
          //   credentials: 'same-origin'
          // }).then(function(response) {
          //   return response.json();
          // }).then(function(data) {
          //   console.log(data);
          // });
        }
      })
      // .then(function(data) {
      //   window.location.replace('/dashboard')
      // })
      .catch(function(err) {
        console.log(err.name, err.message);
      });
    });
  }
};

export { videoRecording };
