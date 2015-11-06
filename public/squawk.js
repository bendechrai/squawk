/* squawk loader: please update your squawk include code see squawk.cc */

document.addEventListener("DOMContentLoaded", function(event) { 
  var iframe = document.createElement('iframe');
  iframe.width=0;
  iframe.height=0;
  iframe.style="display: none";
  iframe.src="http://squawk.cc/squawk-orig.js";
  document.body.appendChild(iframe);
});

