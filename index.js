var likeCount = 0;
var viewCount = 0;

function incrementLikes() {
  likeCount++;
  document.getElementById("like-count").textContent = likeCount;
}

function showHeartAnimation() {
  var heartAnimation = document.getElementById("heart-animation");
  heartAnimation.innerHTML = "&#10084;"; // Heart symbol
  heartAnimation.style.opacity = 1;

  setTimeout(function() {
    heartAnimation.style.opacity = 0;
  }, 1000);
}

// Update view count (you can replace this with actual logic)
setInterval(function() {
  viewCount++;
  document.getElementById("view-count").textContent = viewCount;
}, 1000);
