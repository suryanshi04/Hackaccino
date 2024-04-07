window.onload = function() {
    const profileImg = document.getElementById('profile-img');
    const profileUpload = document.getElementById('profile-upload');
    const profileForm = document.getElementById('profile-form');
  
    // Display selected profile picture
    profileUpload.addEventListener('change', function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        profileImg.src = e.target.result;
      }
      reader.readAsDataURL(file);
    });
  
    // Submit form data
    profileForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(profileForm);
      for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
      // Send formData to server using fetch or AJAX
      // Example: fetch('your-url', { method: 'POST', body: formData })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error('Error:', error));
    });
  };
  