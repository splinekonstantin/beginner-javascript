const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  event.preventDefault();
  const shouldChangePage = confirm(
    'This website might be malicios!, do you wish to proceed?'
  );
  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry');
    event.preventDefault();
  }
});
