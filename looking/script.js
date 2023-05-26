let number = 0 
let sticker = true
const stamps = [
  `assets/man1.jpeg`,
  `assets/man2.jpeg`,
  `assets/man3.jpeg`,
  `assets/man4.jpeg`,
  `assets/man5.jpeg`,
  `assets/man6.jpeg`,
  `assets/man7.jpeg`,
  `assets/man8.jpeg`,
  `assets/man9.jpeg`,
  `assets/man10.jpeg`,
  `assets/man11.jpeg`,
  `assets/man12.jpeg`,
  `assets/man13.jpeg`,
  `assets/man14.jpeg`,
  `assets/man15.jpeg`,
  `assets/man16.jpeg`,
  `assets/man17.jpeg`,
  `assets/man18.jpeg`,
  `assets/man19.jpeg`,
  `assets/man20.jpeg`,
  `assets/man21.jpeg`,
  `assets/man22.jpeg`,
  `assets/man23.jpeg`,
  `assets/man24.jpeg`,
  `assets/man25.jpeg`,
  `assets/man26.jpeg`,
  `assets/man27.jpeg`,
  `assets/man28.jpeg`,
  `assets/man29.jpeg`,
  `assets/man30.jpeg`,
  `assets/man31.jpeg`,
  `assets/man32.jpeg`,
  `assets/man33.jpeg`,
  `assets/man34.jpeg`,
  `assets/man35.jpeg`,
  `assets/man36.jpeg`,
  `assets/man37.jpeg`,
  `assets/man38.jpeg`,
  `assets/man39.jpeg`,
  `assets/man40.jpeg`,
  `assets/man41.jpeg`,
  `assets/man42.jpeg`,
  `assets/man43.jpeg`,
  `assets/man44.jpeg`,
  `assets/man45.jpeg`,
  `assets/man46.jpeg`,
  `assets/man47.jpeg`,
  `assets/man48.jpeg`,
  `assets/man49.jpeg`,
  `assets/man50.jpeg`,
]

const stampsTag = document.querySelector(`div.stamps`)

function addStamps(x,y){
  const img = document.createElement(`img`)
  img.setAttribute(`src`, stamps[number]);
  
//    if(number < stamps.length - 1){
//     img.setAttribute(`src`, stamps[number]);
//        console.log(stamps[number])
//     number++;
//    } else{
//      number = 0
//  }
 
  //The x, y that the stamps are positioned are relative to the stamps.div container, which starts at 50% of the window width which will cause the stamps to go off the page, unless you adjust by subtracting half of the width of the viewport
  img.style.left = x + `px`
  img.style.top = y + `px`
  
  
  stampsTag.appendChild(img)

      number = Math.floor(Math.random() * 50);
    
    // number += 1
    // if (number > stamps.length - 1){
    //     number = 0
    // }
  
  //Add audio
  const audio = document.createElement("audio")
  audio.setAttribute(`src`, `assets/grindr.mp3`)
  audio.play()
}

document.addEventListener(`click`, function(event){
    if(sticker == true){
        addStamps(event.pageX, event.pageY)
        console.log(event.pageX + "," + event.pageY)}
})
