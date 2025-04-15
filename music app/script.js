
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const button = document.getElementById("refresh");
const songname = document.getElementById("songname");



const songs = [
  {
    name: "song1",
    displayName: "Enjoy",
    file: "songs/128-Ilahi - Yeh Jawaani Hai Deewani 128 Kbps.mp3",
    cover: "images/image1.jpg",
    name:"illah-ye jawani he diwani-simala wale maza"
  
  },
  {
    name: "song2",
    displayName: "Love song",
    file: "songs/128-Tum Tak - Raanjhanaa 128 Kbps.mp3",
    cover: "images/image2.jpeg",
     name:"Tum tak song---movie-Ranjana"
   
  },
  {
    name: "song3",
    displayName: "Kanha",
    file: "songs/Radha Gori Gori -  Indresh Upadhyay ji(Pagalourld.in).mp3",
    cover: "images/image3.jpeg",
     name:"Radha Gori Gori -  Indresh Upadhyay ji"
   
  }
];

function getRandomSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  const song = songs[randomIndex];

  title.innerText = song.displayName;
  audio.src = song.file;
  cover.src = song.cover;
  songname.innerText=song.name;

  audio.play();
}

button.addEventListener("click", getRandomSong);
