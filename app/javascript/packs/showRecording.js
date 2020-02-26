const title = document.getElementById('title');
const accessKey = document.getElementById('access_key');
const validateBtn = document.getElementById('btn-to-pending');
const startBtn = document.getElementById('btn-start');
const stopBtn = document.getElementById('btn-stop');
const video = document.getElementById('record-video');
const backDashboard = document.getElementById('dashboard-back');

if (validateBtn) {
  validateBtn.addEventListener('click', (event) => {
    title.innerText = 'LAUNCH RECORDING';
    accessKey.style.display = "none";
    validateBtn.style.display = "none";
    startBtn.style.display = 'block';
  });
}

if (startBtn) {
  startBtn.addEventListener('click', (event) => {
    title.innerText = 'STOP RECORDING';
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    video.style.display = "block";
  });
}

if (stopBtn) {
  stopBtn.addEventListener('click', (event) => {
    title.innerText = '';
    stopBtn.style.display = 'none';
    video.style.display = "none";
    backDashboard.style.display = 'flex';
  });
}
