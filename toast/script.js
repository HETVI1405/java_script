let toastbox = document.getElementById('toastbox');
let successmsg = '<i class="ri-checkbox-circle-line"></i> Successfully submitted';
let errormsg = '<i class="ri-close-circle-line"></i> Please fix the error';
let invalidmsg = '<i class="ri-error-warning-line"></i>Invalid input, check again';

function showtoast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastbox.appendChild(toast);

  if(msg.includes('error')){
    toast.classList.add('error');
  }
  if(msg.includes('Invalid')){
    toast.classList.add('Invalid');
  }
  setTimeout(() =>{
 toast.remove();
  },5000);

}