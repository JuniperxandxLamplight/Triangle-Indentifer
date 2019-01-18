$(function(){

  $("#submitButton").click(function(event){
    var aInput = $("#a").val();
    var bInput = $("#b").val();
    var cInput = $("#c").val();

    var aParse = parseInt(aInput);
    var bParse = parseInt(bInput);
    var cParse = parseInt(cInput);

    if ((aParse + bParse <= cParse || aParse + cParse <= bParse || bParse + cParse <= aParse) || (aParse === 0 || bParse === 0 || cParse === 0)) {
      $("#not").show();
    } else if (aParse === bParse && bParse === cParse && cParse === aParse) {
      $("#equal").show();
    } else if (aParse !== bParse && bParse !== cParse && cParse !== aParse) {
      $("#scalene").show();
    } else if (aParse === bParse || bParse === cParse || cParse === aParse) {
      $("#isosceles").show();
    }

    event.preventDefault();
  });
});
