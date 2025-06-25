document.getElementById("serviceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const location = document.getElementById("location").value;
  const service = document.getElementById("service").value;

  alert(`Service "${service}" booked for location: ${location}`);
});
