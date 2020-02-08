const custom = document.querySelector('.custom');
console.log(custom.dataset);
custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
