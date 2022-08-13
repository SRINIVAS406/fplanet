function showserviceinfo(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("moreserviceinfo");
    var btnText = document.getElementById("servicebtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }

}