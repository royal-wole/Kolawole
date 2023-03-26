function proceedToInput2() {
  if (document.querySelector('#vn').value) {
    // Update progress bar and active step
    if (progress) {
      progress.style.width = '33.33%';
    }
    document.querySelector('#step1').classList.remove('active');
    document.querySelector('#step2').classList.add('active');
    // Hide input1 and show input2
    input1.classList.add('hidden');
    input2.classList.remove('hidden');
  }
}


      function proceedToInput3() {
        if (document.querySelector('#make').value) {
          // Update progress bar and active step
          progress.style.width = '66.66%';
          document.querySelector('#step2').classList.remove('active');
          document.querySelector('#step3').classList.add('active');
          // Hide input2 and show input3
          input2.classList.add('hidden');
          input3.classList.remove('hidden');
        }
      }

      function submitForm() {
        if (document.querySelector('#reg').value) {
          // Update progress bar
          progress.style.width = '100%';
          // Submit form
          form.submit();
        }
      }

      const progress = document.querySelector('#progress');
      const input1 = document.querySelector('#input1');
      const input2 = document.querySelector('#input2');
      const input3 = document.querySelector('#input3');
      const form = document.querySelector('#form');

      document.querySelector('#proceed1').addEventListener('click', proceedToInput2);
      document.querySelector('#proceed2').addEventListener('click', proceedToInput3);
      document.querySelector('#submit').addEventListener('click', submitForm);
