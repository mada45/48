// Set the date we're counting down to
var countDownDate = new Date("May 17, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//SCROLL changing navbar
$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-bg-change");
    var $navText = $(".navText");
    var $navBurger = $(".nav-span-change");
    $nav.toggleClass('nav-bg-scroll-on', $(this).scrollTop() > 405);
    $nav.toggleClass('nav-bg-scroll-off', $(this).scrollTop() < 405);
    $navText.toggleClass('text-dark', $(this).scrollTop() > 405);
    $navBurger.toggleClass('bg-dark', $(this).scrollTop() > 405);
    $navBurger.toggleClass('bg-white', $(this).scrollTop() < 405);

  });
});


$(function () { 
  $(window).scroll(function () {
      if ($(this).scrollTop() > 405) { 
          $('.nav-bg-change .navbar-brand img').attr('src','images/red-logo.png');
      }
      if ($(this).scrollTop() < 405) { 
          $('.nav-bg-change .navbar-brand img').attr('src','images/white-logo.png');
      }
  })
});

$(".navbar-toggler").click(function(){
  $(".navbar").toggleClass("nav-bg-scroll-on");
  $(".navbar").toggleClass("nav-bg-scroll-off");
  $(".navText").toggleClass("text-dark");
  $(".nav-span-change").toggleClass("bg-dark");
  $(".nav-span-change").toggleClass("bg-white");
});

$(".navbar-toggler").click(function() { 
  var _this = $(".navbar .navbar-brand img");
  var current = _this.attr("src");
  var swap = _this.attr("data-swap");   
 _this.attr('src', swap).attr("data-swap",current);   
}); 