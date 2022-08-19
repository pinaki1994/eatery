function formData() {
    var inputEmail3 = document.forms["userform"]["Email"];
    var name = document.forms["userform"]["Name"];
    if (inputEmail3.value == "") {
      window.alert("Please Enter your email");
      return false;
    }
    if (name.value == "") {
      window.alert("Please Enter your name");
      return false;
    }
    return true;
  }
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$(document).ready(function(){
  $("#fiend").click(function(){
    $("#find_text").toggle();
  });
  $("#reserv").click(function(){
    $("#reserv_text").toggle();
  });
});
