var status = "";
function preload()    {
    img= loadImage("https://tse2.mm.bing.net/th?id=OIP.d8zuVqQAzPRDL5TsXNpf2gHaE8&pid=Api&P=0&h=180")
}
function setup()    {
    canvas= createCanvas(500,450);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("name").innerHTML= "Object Matched as:";
}

function modelLoaded()  {
    console.log("CocoSSD has been initialized");
   status= true;
   objectDetector.detect(img, gotResult);
}
function gotResult()    {
    if( error){
        console.log( error);
    }
    console.log(results);
}

function draw()     {
    image (img, 0, 0, 500, 400);
    stroke ('orangered');
    fill('orangered');
    noFill();
    rect(30, 10, 300, 300);
    text("Laptop", 45, 75);

    stroke ('lightseagreen');
    fill('lightseagreen');
    noFill();
    rect(335, 200, 135, 120);
    text("Camera", 360, 230);

    stroke ('deeppink');
    fill('deeppink');
    noFill();
    rect(370, 60, 110, 130);
    text("Plant", 400, 100);
}