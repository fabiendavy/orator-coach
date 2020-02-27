import swal from 'sweetalert';

const initSweetalert = () => {
  let datasetSuccess = document.getElementById('list-of-review-types');
  datasetSuccess = datasetSuccess ? datasetSuccess.dataset.sweet : null;
  let datasetError = document.getElementById('enter-speech-password');
  datasetError = datasetError ? datasetError.dataset.sweet : null;

  if (datasetSuccess === "success") {
    swal({
      title: 'Thank you !',
      text: 'Successfully connected to the session',
      icon: 'success',
      confirmButtonText: 'Continue'
    })
    let url = new URL(window.location.href);
    history.replaceState({}, null, url.href.split('?')[0]);
  }

  if (datasetError === "error") {
    swal({
      title: 'Sorry !',
      text: 'Wrong access key...',
      icon: 'error',
      confirmButtonText: 'Continue'
    })
    let url = new URL(window.location.href);
    history.replaceState({}, null, url.href.split('?')[0]);
  }
};

export { initSweetalert };
