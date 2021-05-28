

function myResult() {

  alert("Please fill up te names");

  var count = Math.round(Math.random() * 100);

  if (count >= 90) {
    document.getElementsByClassName("result")[0].innerHTML = "Congratulations! You both are MADE for EACHOTHER. Your love is " + count + " %.";
  }
  else if (count < 90 && count > 70){
    document.getElementsByClassName("result")[0].innerHTML = "Congratulations! You both seems to be BESTIE. Your Love is " + count + " %.";
  }
  else if (count < 70 && count > 40){
    document.getElementsByClassName("result")[0].innerHTML = "YePPiee! Keep Trying CUTIES. Your Love is " + count + " %.";
  }
  else if (count < 40 && count > 20){
    document.getElementsByClassName("result")[0].innerHTML = "AAH! ONESIDED LOVE. Your Love is " + count + " %.";
  }
  else {
    document.getElementsByClassName("result")[0].innerHTML = "OOPS! Better Luck with someone else. Your Love is " + count + " %.";
  }

}
