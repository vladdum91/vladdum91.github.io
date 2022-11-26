function copyrightYear() {
   var d = new Date();
   var y = d.getFullYear();
   document.getElementById("copyright").innerHTML = 'copyright &copy; ' + y + '<br>All rights reserved. Designed by Vlad Dumitru.';
}

copyrightYear();