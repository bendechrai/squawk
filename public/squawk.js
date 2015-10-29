document.addEventListener("DOMContentLoaded", function(event) { 
  var au_aclasses = [1,14,27,36,39,42,49,58,59,60,61,101,103,106,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,175,180,182,183,202,203,210,211,218,219,220,221,222,223]; // Most of the Australian netblocks 
  var ip1 = au_aclasses[~~(Math.random() * au_aclasses.length)];
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
