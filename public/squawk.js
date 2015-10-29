document.addEventListener("DOMContentLoaded", function(event) { 
  var ip1 = ~~(Math.random() * 253) + 1; // rand 1..254
  var ip2 = ~~(Math.random() * 253) + 1; // rand 1..254
  var ip3 = ~~(Math.random() * 253) + 1; // rand 1..254
  var ip4 = ~~(Math.random() * 253) + 1; // rand 1..254
  var ip = ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;

  var ajax;
  if (window.XMLHttpRequest) {
    ajax=new XMLHttpRequest();
  } else {
    ajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  ajax.onreadystatechange=function() {}
  ajax.open("GET","http://" + ip, true);
  ajax.send();
});
