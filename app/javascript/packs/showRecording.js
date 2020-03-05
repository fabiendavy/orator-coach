const recordVideo = () => {
  const title = document.getElementById('title');
  const accessKey = document.getElementById('access_key');
  const validateBtn = document.getElementById('btn-to-pending');
  const startBtn = document.getElementById('btn-start');
  const stopBtn = document.getElementById('btn-stop');
  const video = document.getElementById('record-video');
  const spinner = document.querySelector('.lds-roller');

  if (validateBtn) {
    validateBtn.addEventListener('click', (event) => {
      title.innerText = '';
      accessKey.style.display = "none";
      validateBtn.style.display = "none";
      startBtn.style.display = 'block';
      video.style.display = "block";
    });
  }
  
  if (startBtn) {
    startBtn.addEventListener('click', (event) => {
      title.innerText = 'STOP RECORDING';
      startBtn.style.display = 'none';
      stopBtn.style.display = 'block';
    });
  }
  
  if (stopBtn) {
    stopBtn.addEventListener('click', (event) => {
      title.innerText = '';
      stopBtn.style.display = 'none';
      video.style.display = "none";
      spinner.style.display = "block";
    });
  }
};

export { recordVideo };
