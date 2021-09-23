 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
     function togglePlus() {
         var x = document.getElementById("custom-dropdown");
         if (x.style.display === "none") {
             x.style.display = "block";
             var y = document.getElementById("plusicon");
             y.innerHTML = " - ";
         } else {
             x.style.display = "none";
             var y = document.getElementById("plusicon");
             y.innerHTML = " + ";
         }
     }
 }