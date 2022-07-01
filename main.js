function setup()
{
   video = createCapture(VIDEO);
   video.size(375, 375);

   canvas = createCanvas(420, 420);
   canvas.position(560,150);

   poseNet = ml5.poseNet(video, modeLoaded);
   poseNet.on('pose', gotPoses)
}
function modeLoaded(){
    console.log('PoseNet Is Initailized')
}


function draw()
{
    background('#FF0000');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

