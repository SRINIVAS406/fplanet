var modalImg = document.getElementById("img01");
var modal = document.getElementById("myGalleryModal");
var captionText = document.getElementById("caption");
function myGalleryFunction(event) { 
  var x = event.target;
  if(x.tagName=="IMG"){
  modal.style.display = "block";
  modalImg.src = x.src;
  captionText.innerHTML = x.alt;
}
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

