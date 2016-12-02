function init()
{
  var container = document.getElementById('wp_confetti');
  for (var i = 0; i < 100; i++)
  {
    container.appendChild(create_confetti(i));
  }
}

function randomInteger(low, high)
{
  return low + Math.floor(Math.random() * (high - low));
}

function randomFloat(low, high)
{
  return low + Math.random() * (high - low);
}

function pixelValue(value)
{
  return value + 'px';
}

function durationValue(value)
{
  return value + 's';
}

function create_confetti(i)
{
  var dropDiv = document.createElement('div');
  var swingDiv = document.createElement('div');
  var imageCanvas = document.createElement('canvas');
  var rand_num = randomInteger(1, 6);
  swingDiv.className = "swing" + randomInteger(1, 6);
  imageCanvas.id = "canvas" + i;
  
  imageCanvas.width = "20";
  imageCanvas.height = "10";
  
  var ctx = imageCanvas.getContext('2d');
  ctx.beginPath();
  ctx.fillStyle = 'rgb('+randomInteger(1, 255)+', '+randomInteger(1, 255)+', '+randomInteger(1, 255)+')';
  ctx.fillRect(0, 0, 20, 10);
  
  dropDiv.style.top = pixelValue(-40);
  dropDiv.style.left = pixelValue(randomInteger(-20, 620));
  dropDiv.style.opacity = '0';
  
  var DropDuration = durationValue(randomFloat(2, 3)*randomInteger(3, 6));
  var SwingDuration = durationValue(randomFloat(4, 5)*randomInteger(3, 6));
  var DropDelay = durationValue(randomFloat(0, 10)*randomInteger(1, 3));
  
  var userAgent = window.navigator.userAgent.toLowerCase();
	if (userAgent.indexOf("firefox") > -1) {
  	dropDiv.style.MozAnimationName = 'fade, drop';
  	swingDiv.style.MozAnimationName = 'swing, rotate';
  	dropDiv.style.MozAnimationDuration = DropDuration + ', ' + DropDuration;
  	dropDiv.style.MozAnimationDelay = DropDelay + ', ' + DropDelay;
    swingDiv.style.MozAnimationDuration = SwingDuration + ', ' + randomInteger(1, 6)/3+ 's' ;
    imageCanvas.style.MozAnimationDelay = DropDelay;
	}
	else if (userAgent.indexOf("opera") > -1) {
  	dropDiv.style.OAnimationName = 'fade, drop';
  	swingDiv.style.OAnimationName = 'swing, rotate';
  	dropDiv.style.OAnimationDuration = DropDuration + ', ' + DropDuration;
  	dropDiv.style.OAnimationDelay = DropDelay + ', ' + DropDelay;
    swingDiv.style.OAnimationDuration = SwingDuration + ', ' + randomInteger(1, 6)/3+ 's' ;
    imageCanvas.style.OAnimationDelay = DropDelay;
	}
	else if (userAgent.indexOf("safari") > -1 || userAgent.indexOf("chrome") > -1 || userAgent.indexOf("webkit") > -1) {
  	dropDiv.style.webkitAnimationName = 'fade, drop';
  	swingDiv.style.webkitAnimationName = 'swing, rotate';
  	dropDiv.style.webkitAnimationDuration = DropDuration + ', ' + DropDuration;
  	dropDiv.style.webkitAnimationDelay = DropDelay + ', ' + DropDelay;
    swingDiv.style.webkitAnimationDuration = SwingDuration + ', ' + randomInteger(1, 6)/3+ 's' ;
    imageCanvas.style.webkitAnimationDelay = DropDelay;
	}
	else {
  	dropDiv.style.AnimationName = 'fade, drop';
  	swingDiv.style.AnimationName = 'swing, rotate';
  	dropDiv.style.AnimationDuration = DropDuration + ', ' + DropDuration;
  	dropDiv.style.AnimationDelay = DropDelay + ', ' + DropDelay;
    swingDiv.style.AnimationDuration = SwingDuration + ', ' + randomInteger(1, 6)/3+ 's' ;
    imageCanvas.style.AnimationDelay = DropDelay;
	}

  swingDiv.appendChild(imageCanvas);
  dropDiv.appendChild(swingDiv);
  
  return dropDiv;
}
