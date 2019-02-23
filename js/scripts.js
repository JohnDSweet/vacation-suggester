$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var temp = $("input:radio[name=temp]:checked").val();
    var active = $("input:radio[name=active]:checked").val();
    var budget = $("input:radio[name=budget]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var kids = $("input:radio[name=kids]:checked").val();
    var name = $("input#name").val();
    if (name === "") {
      name = "Hey stranger"
    }
    var result;
    var reason;
    if (temp === "hot" && active === "lazy") {
      result = "sail off to the Bahamas!";
      reason = "you chose Hot and Lazy";
    } else if  (temp === "hot" && kids === "yes") {
      result = "fly to Disney World!";
      reason = "you chose Hot, not Lazy, and you have kids";
    } else if  (temp === "cold") {
      result = "go skiing in Colorado!";
      reason = "you chose Cold";
    } else if  (budget === "rich") {
      result = "take a trip around the world!";
      reason = "you sound rich";
    } else if  (budget === "poor") {
      result = "go on a stay-cation in your yard!";
      reason = "you sound tight on funds";
    } else {
      result = "go camping!";
      reason = "you didn't trigger any specific vacations";
    }

    $("#output1").text(name + ", " + reason + " so..." );
    $("#output2").text("You should " + result);
    $(".output1").fadeIn(1000);
    setTimeout(function(){
      $(".output2").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }, 1000);

    event.preventDefault();
  });
});
