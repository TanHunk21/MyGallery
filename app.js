const currentImage = document.querySelection("#image");
const images = ['img/pic1.jpg', 'pic2.jpg' , 'img/pic3.jpg', 'img/pic4.']

function changeImage(){
    console.log("Hello from script file!");
    let rnd = Match.floor(Match.random() * images.length);
    curentimage.src = image [rnd];
    console.log(rnd);

}