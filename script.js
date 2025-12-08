// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // Add active to clicked tab
    tab.classList.add('active');

    // Hide all forms
    document.querySelectorAll('#searchForm > div').forEach(form => {
      form.classList.remove('form-active');
    });

    // Show selected form
    const tabId = tab.getAttribute('data-tab');
    if (tabId === 'flights') {
      document.getElementById('flights-form').classList.add('form-active');
    } else if (tabId === 'hotels') {
      document.getElementById('hotels-form').classList.add('form-active');
    } else if (tabId === 'packages') {
      document.getElementById('packages-form').classList.add('form-active');
    }
  });
});

// Search functions (you can connect to real APIs later)
function searchFlights() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const depart = document.getElementById('departDate').value;
  if (!from || !to || !depart) {
    alert('Please fill in all required fields!');
    return;
  }
  alert(`Searching flights from ${from} to ${to} on ${depart}...`);
  // Later: Connect to Amadeus, Skyscanner, etc.
}

function searchHotels() {
  alert('Searching the best hotels for you...');
  // Later: Connect to Booking.com or Expedia API
}

function searchPackages() {
  alert('Finding the best flight + hotel packages...');
  // Later: Combine flight + hotel APIs
}