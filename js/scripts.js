
var rad = document.getElementById('circle').offsetWidth / 2;
rad = rad + (rad * 0.2);
var titleCircleBlue = new CircleType(document.getElementById('titleCircleBlue'));
var titleCircleGreen = new CircleType(document.getElementById('titleCircleGreen'));
var titleCircleRed = new CircleType(document.getElementById('titleCircleRed'));
var titleCircleYellow = new CircleType(document.getElementById('titleCircleYellow'));
titleCircleBlue.radius(rad);
titleCircleGreen.radius(rad);
titleCircleRed.radius(rad).dir(-1);
titleCircleYellow.radius(rad).dir(-1);

window.addEventListener('resize', function updateRadius() {
  var rad = document.getElementById('circle').offsetWidth / 2;
  rad = rad + (rad * 0.2);
  titleCircleBlue.radius(rad);
  titleCircleGreen.radius(rad);
  titleCircleRed.radius(rad);
  titleCircleYellow.radius(rad);
});