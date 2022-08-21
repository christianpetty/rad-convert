function convertmm() {
    var mm = document.getElementById("mm");
    if (mm.value.length == 0) {
      document.getElementById("inches").value = "";
    } else {
        var newval = parseFloat(mm.value) / 25.4;
        document.getElementById("inches").value = newval.toFixed(4);
      }
  }
  
  function convertinches() {
    var inches = document.getElementById("inches");
    if (inches.value.length == 0) {
      document.getElementById("mm").value = "";
    } else {
        var newval = parseFloat(inches.value) * 25.4;
        document.getElementById("mm").value = newval.toFixed(4);
      }
  }
  