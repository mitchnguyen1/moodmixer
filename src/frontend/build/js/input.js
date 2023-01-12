class Song {
    constructor(id = 0) {
        this.newSongs = [];
        this.id = id;
    }

    addSong (artist,song_name, genre, link){
        const item = {
        artist: artist,
        song_name: song_name,
        genre: genre,
        link: link,
        id: this.id++,
     };
    this.newSongs.push(item);
    }   
}

// Initialize a new TaskManager with currentId set to 0
const itemsController = new Song();
//initialize an array
const newSongs = itemsController.newSongs;

function save(artist,song_name, genre, link){
    const data = {artist,song_name, genre, link};
    
            fetch('https://moodmixer.org/songs/add', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        
function modifyLink(link) {
    // Split the input link at '/'
    const linkParts = link.toString().split('/');
    // Replace 'track' with 'embed/track' in the link parts
    linkParts.splice(3, 1, 'embed/track');
    // Join the link parts with '/' to get the modified link
    const modifiedLink = linkParts.join('/');
    // Add the desired suffix to the modified link
    console.log('link changed');
    return modifiedLink + "?utm_source=generator";
}


//select the button
const newItemForm = document.getElementById('newItemForm');
// Select the inputs
const newItemName = document.getElementById('name');
const newItemArtist = document.getElementById('artist');
const newItemGenre = document.getElementById('my-slider');
const newItemLink = document.getElementById("link");


//function to perform when submitting form
newItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
//modify the link 
    let newLink = modifyLink(newItemLink.value);
// Add the song to the itemsController
    itemsController.addSong(newItemArtist.value,newItemName.value, newItemGenre.value, newLink);
//save to database
    save(newItemArtist.value,newItemName.value, newItemGenre.value, newLink);
    newItemName.value = '';
    newItemArtist.value = '';
    newItemGenre.value = '';
    newItemLink.value = '';

});


//DOM for Slider
const slider = document.getElementById("my-slider");
const valueText = document.getElementById("value");

slider.addEventListener("input", function() {
    if(this.value == 0){
        valueText.innerText = "💔Depressed💔";
    }
    else if(this.value == 1){
        valueText.innerText = "😭Sad😢"
    }
    else if(this.value == 2){
        valueText.innerText = "😢Neutral🙃"
    }
    else if(this.value == 3){
        valueText.innerText = "😊Uplifting😄"
    }
    else if(this.value == 4) {
        valueText.innerText = "😜Happy😁"
    }
    else if(this.value == 5){
        valueText.innerText = "😆Euphoric🥰"
    }
    else if(this.value == 6) {
        valueText.innerText = "😤Rage😈"
    }
  });


