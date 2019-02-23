$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var temp = $("input:radio[name=temp]:checked").val();
    var active = $("input:radio[name=active]:checked").val();
    var budget = $("input:radio[name=budget]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var kids = $("input:radio[name=kids]:checked").val();
    var name = $("input#name").val();
    var result;

    if (temp === "hot" && active === "lazy") {
      result = "you should sail off to the Bahamas!";
    } else if  (temp === "hot" && kids === "yes") {
      result = "you should fly to Disney World!";
    } else if  (temp === "cold") {
      result = "you should go skiing in Colorado!";
    } else if  (budget === "rich") {
      result = "you should take a trip around the world!";
    } else if  (budget === "poor") {
      result = "you shold go on a stay-cation in your yard!";
    } else {
      result = "you should go camping!";
    }

    $("#output").text(name + ", " + result);
    $(".answer").show();

    event.preventDefault();
  });
});
