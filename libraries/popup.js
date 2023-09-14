let hid = document.getElementById("hid")
function showIt() {
  hid.style.display = "block";
  setTimeout("showIt()", 9000); // after 10 seconds
  }

  function closeModel() {
    hid.style.display = "none"
  }

showIt();
  