//Lindsey Sannar
function validateAnswer1() {
   var getAnswer1 = document.getElementById("question1").value;
   if (getAnswer1 == "reactive" || getAnswer1 == "Reactive") {
      document.getElementById("question1").style.color = "green";
      document.getElementById("response1").innerHTML = "Correct!";
   } else {
      document.getElementById("question1").style.color = "red";
   }
}

function validateAnswer2() {
   var getAnswer2 = document.getElementById("question2").value;
   if (getAnswer2 == "aligned" || getAnswer2 == "Aligned") {
      document.getElementById("question2").style.color = "green";
      document.getElementById("response2").innerHTML = "Correct!";
   } else {
      document.getElementById("question2").style.color = "red";
   }
}

function validateAnswer3() {
   var getAnswer3 = document.getElementById("question3").value;
   if (getAnswer3 == "reviled" || getAnswer3 == "Reviled") {
      document.getElementById("question3").style.color = "green";
      document.getElementById("response3").innerHTML = "Correct!";
   } else {
      document.getElementById("question3").style.color = "red";
   }
}

function validateAnswer4() {
   var getAnswer4 = document.getElementById("question4").value;
   if (getAnswer4 == "diaper" || getAnswer4 == "Diaper") {
      document.getElementById("question4").style.color = "green";
      document.getElementById("response4").innerHTML = "Correct!";
   } else {
      document.getElementById("question4").style.color = "red";
   }
}

function validateAnswer5() {
   var getAnswer5 = document.getElementById("question5").value;
   if (getAnswer5 == "revel" || getAnswer5 == "Revel") {
      document.getElementById("question5").style.color = "green";
      document.getElementById("response5").innerHTML = "Correct!";
   } else {
      document.getElementById("question5").style.color = "red";
   }
}

function validateAnswer6() {
   var getAnswer6 = document.getElementById("question6").value;
   if (getAnswer6 == "rotates" || getAnswer6 == "Rotates") {
      document.getElementById("question6").style.color = "green";
      document.getElementById("response6").innerHTML = "Correct!";
   } else {
      document.getElementById("question6").style.color = "red";
   }
}

function submitAnswer1() {
   setCookie("correct", 2, 1);
   window.location.href = 'intelligence2.html';
}

function submitAnswer2() {
   var total = getCookie("correct");
   getCookie("correct");
   window.location.href = 'intelligence3.html';
}

function submitAnswer3() {
   window.location.href = 'intelligence4.html';
}

function submitAnswer4() {
   window.location.href = 'results.html';
}
//courtesty of w3schools from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
   var expires = "expires=" + d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
   var name = cname + "=";
   var ca = document.cookie.split(';');
   for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return "";
}

function calculateScore() {}

// create class for colors for the border of the answer
// each function after first page should set a cookie and call the one from the last page.
// at the end the function should call the cookies and add them up for the total.
// var total should add the previous value to the current value
// the function that calls the cookies should also have the link to the next page with the window.location.href=
