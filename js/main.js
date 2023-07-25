// RANDOM IMAGE GENERATOR RANDOM IMAGE GENERATOR RANDOM IMAGE GENERATOR RANDOM IMAGE GENERATOR
// RANDOM IMAGE GENERATOR RANDOM IMAGE GENERATOR RANDOM IMAGE GENERATOR RANDOM IMAGE GENERATOR
// RANDOM IMAGE GENERATOR RANDOM IMAGE GENERATOR RANDOM IMAGE GENERATOR RANDOM IMAGE GENERATOR

//Calling the many iterations of backgrounds.
const background = 
[
    'images/background1.png',
    'images/background2.png',
    'images/background3.png',
    'images/background4.png',
    'images/background5.png',
    'images/background6.png',
    'images/background7.png',
    'images/background8.png',
    
]

//Setting up a variable called "imageContainer" and storing anything with the class "displayedImage"
const imageContainer = document.getElementById('displayedImage')
//Doing the same with a variable called "switchButton"
const switchButton = document.getElementById('switchButton')

//A function that displays a random image.
function displayRandomImage() {//This equation generates a random image from the background array. 
    //A Random background is chosen when a number is decided randomly to a length of however many elements is in background array. (0-7, so 8 in total)
    let randomBackground = Math.floor(Math.random() * background.length);
    //A src is decided in the <img> tag by calling the "randomBackground" number at random. This sets a number, effecting what is in the HTML code - displaying a random image.
    imageContainer.src = background[randomBackground]
}
//Calling the function.
displayRandomImage()
switchButton.addEventListener('click', displayRandomImage)
//DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS 
//DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS 
//DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS DRAG ACTIONS 

// Grabbing all items with 'draggable' class and storing them all in a variable called 'draggables'. Constant, because they won't change.
const draggables = document.querySelectorAll('.draggable')
// Doing the same with containers into "container".
const containers = document.querySelectorAll('.container')
// Initializing currentContainer to... something... until I need it again.
let currentContainer = null

//Adding eventListeners to draggables.
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('Commencing drag action.');
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
        lastDraggedClass = draggable.className;
    })

})

//Adding eventListeners to containers, and using querySelectors to track what container a dragged item is hovering over (id=restZone/dropZone). 
//Eventually when the item is dropped in a container, it will be tracked and confirmed through console.
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        currentContainer = container; 
        container.classList.add('dragover');
        container.appendChild(draggable) ;
        
    })

    container.addEventListener('dragenter', e => {
        e.preventDefault();
        console.log('You are currently hovering over the ' + container.id + '.');
    })

    container.addEventListener('dragleave', () => {
        container.classList.remove('dragover');
    })

    container.addEventListener('drop', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
        container.classList.remove('dragover');
        console.log('Ending drag action.');
    })
})

// DROPZONE READER DROPZONE READER DROPZONE READER DROPZONE READER DROPZONE READER DROPZONE READER
// DROPZONE READER DROPZONE READER DROPZONE READER DROPZONE READER DROPZONE READER DROPZONE READER
// DROPZONE READER DROPZONE READER DROPZONE READER DROPZONE READER DROPZONE READER DROPZONE READER

//Grabbing <section id=dropZone> and store it as a const variable called "dropZone" 
const dropZone = document.getElementById('dropZone')
//Intializing a variable called "inDropzone" to be "false" by default.
let inDropzone = false

//Adding an eventListener to the dropZone, seeing if a draggable item has been dropped in its container. 
//Once item is dragged inside dropZone, "inDropzone" will be "true". When "true", console will confirm.
dropZone.addEventListener('drop', e => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    if (draggable && draggable.classList.contains('draggable')) {
        inDropzone = true;
        console.log( draggable.className + ' is inside the dropZone. Permission to play audio.');
    }

    dropZone.classList.remove('dragover')
})

// PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON
// PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON
// PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON PLAY BUTTON


//A function called "pressPlay" that checks which items in the draggable class are in the dropzone. 
// If the dropzone contains a draggable item, it search through the query of that class and looks for the corressponding audio file linked to that class.
// It will then confirm if draggables are in the dropzone through console.
function pressPlay() {
    const draggables = document.querySelectorAll('.draggable');
    const dropZone = document.getElementById('dropZone');
  
    draggables.forEach(draggable => {
      
      if (dropZone.contains(draggable)) {
        const audio = document.querySelector(`audio.${draggable.classList[0]}`);
        console.log('You have chosen audio and pressed play.')
        audio.play();
        }
    });
}
//Setting a variable up for the sound button by getting the HTML element of id=soundButton
const soundButton = document.getElementById('soundButton')
// When the soundButton is clicked, it will activate the function "pressPlay" - which, pressPlay() does it's own thing above this.
soundButton.addEventListener('click', pressPlay)