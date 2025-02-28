document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const petName = document.getElementById('petName').value;
    const petType = document.getElementById('petType').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
  

    const isSuccess = true; 
    if (isSuccess) {

      const confirmationMessage = `Appointment booked successfully for ${petName} on ${date} for ${service}.`;
      document.getElementById('appointmentMessage').textContent = confirmationMessage;
      document.getElementById('appointmentMessage').style.color = 'green';


      document.getElementById('appointmentForm').reset();
    } else {

      document.getElementById('appointmentMessage').textContent = 'Booking failed. Please try again.';
      document.getElementById('appointmentMessage').style.color = 'red'; // Style the error message
    }
  });