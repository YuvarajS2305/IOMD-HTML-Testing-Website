/* Place your JavaScript in this file */

function openComponent(eve, category) {

    var fileName;
    switch (category){
      case "credit":
      fileName = "creditInfo.html"
      break;
      case "address":
      fileName = "addressInfo.html"
      break;
      case "signin":
      fileName = "signinInfo.html"
      break;
      case "signup":
      fileName = "signupInfo.html"
      break;
      case "forget":
      fileName = "forgetInfo.html"
      break;
      case "hertz":
      fileName = "hertz.html"
      break;
      case "coravin":
      fileName = "coravin.html"
      break;
    }
    window.location.href=fileName;
  var i;
  var x = document.getElementsByClassName("field");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(category).style.display = "block"; 
  $(".tabs.tablinks").removeClass("active"); 
  $(eve.currentTarget).addClass("active");
}

function openSubComponent(eve, category) {
  var i;
  var x = document.getElementsByClassName("sub-field");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(category).style.display = "block";  
  $(".subtab.tablinks").removeClass("active"); 
  $(eve.currentTarget).addClass("active");
}
function validateExpiryDate(s) {

  // Check 2-2 digits
  if (!/\d\d-\d\d/.test(s)) {
    return 'Expiry date format must be MM-YY: ' + s;
  }
  
  // Check month is 1 to 12 inclusive
  var b = s.split('-');
  if (b[0]<1 || b[0]>12) {
    return 'Expiry month must be from 00 to 12: ' + b[0];
  }
  
  // Check is this month or later
  var d = new Date()
  var c = d.getFullYear()/100 | 0 + '';
  if (new Date(c + b[1], b[0], 1) < d) {
    return 'Expiry date must be this month or later: ' + s;
  }
  
  return true;
}
