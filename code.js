var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3c307343-8b25-4252-bacc-532a73ea0f5c"],"propsByKey":{"3c307343-8b25-4252-bacc-532a73ea0f5c":{"name":"ball12","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"pbGe2LVcGS1g7GUN6ZQ9Z8PNgBE42C2w","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/3c307343-8b25-4252-bacc-532a73ea0f5c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 
var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="red";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="green";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
    ball.setAnimation("ball12")
   background("white")
function draw() {
  background(220);
  if (ball.isTouching(playerPaddle)) {
  playSound("assets/category_explosion/8bit_explosion.mp3")
}
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
  }
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  if(keyDown("space"))
  {
     ball.velocityX=25;
     ball.velocityY=25;
  }
  computerPaddle.y=ball.y;
 drawnet();
  if(ball.x<0 || ball.x>400)
  {
    resetball();
  }
 
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
}


function drawnet()
{  strokeWeight(10)
for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}
function resetball()
{
  ball.x=200;
  ball.y=200;
  ball.velocityY=0;
  ball.velocityX=0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
