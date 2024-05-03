let formData = { email: '', message: '' };

const formSubmit = document.querySelector('.feedback-form');
const emailInp = document.querySelector('.email');
const messageInp = document.querySelector('.message');
const check = localStorage.getItem('feedback-form-state');
if (check !== null) {
  formData = JSON.parse(check);
  console.log(formData);
  emailInp.value = formData.email || '';
  messageInp.value = formData.message || '';
}
function resetForm() {
  localStorage.removeItem('feedback-form-state');
  formSubmit.reset();
  formData = { email: '', message: '' };
}
formSubmit.addEventListener('submit', event => {
  event.preventDefault();
  if (
    emailInp &&
    messageInp &&
    emailInp.value.trim() !== '' &&
    messageInp.value.trim() !== ''
  ) {
    for (const inp of formSubmit.elements) {
      if (inp.tagName === 'INPUT' || (inp.tagName === 'TEXTAREA' && inp.name)) {
        formData[inp.name] = inp.value.trim();
      }
    }

    console.log(formData);
    resetForm();
  } else {
    alert('All form fields must be filled in');
  }
});

formSubmit.addEventListener('input', event => {
  event.preventDefault();
  if (event.target === emailInp && emailInp.value.trim() !== '') {
    formData.email = emailInp.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } else if (event.target === messageInp && messageInp.value.trim() !== '') {
    formData.message = messageInp.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});
