document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');

  // Adjust font size based on window width
  function adjustFontSize() {
      if (window.innerWidth < 480) {
          document.body.style.fontSize = "14px";
      } else if (window.innerWidth < 768) {
          document.body.style.fontSize = "16px";
      } else {
          document.body.style.fontSize = "18px";
      }
  }

  // Call the function on page load
  adjustFontSize();

  // Add event listener to adjust font size on window resize
  window.addEventListener('resize', adjustFontSize);

  form.addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Collect form data
      const formData = new FormData(form);
      
      // Convert form data to object
      const formDataObj = {};
      formData.forEach((value, key) => {
          formDataObj[key] = value;
      });

      console.log(formDataObj);

      let signupdata = {
          'username': formDataObj.name,
          'email': formDataObj.email,
          'password': formDataObj.password,
          'state': formDataObj.state,
          'city': formDataObj.city,
          'phoneNo': formDataObj.phone,
          'address': formDataObj.Address
      };

      // Send form data to backend
      try {
          const response = await fetch('https://fooddonatebackend.onrender.com/signup', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(signupdata),
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const data = await response.json();
          alert(data.response);
      } catch (error) {
          console.error('Error:', error);
          alert("Error in registration");
      }
  });
});
