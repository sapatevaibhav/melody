

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/marathi/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Dhaga Dhaga Song ", filePath: "songs/marathi/1.mp3", coverPath: "covers/oneee.jpg"},
    {songName: "Tu Havishi song ", filePath: "songs/marathi/2.mp3", coverPath: "covers/twooo.jpg"},
    {songName: "Ka Kalena Song ", filePath: "songs/marathi/3.mp3", coverPath: "covers/threeee.jpg"},
    {songName: "Tola Tola  Romantic Song", filePath: "songs/marathi/4.mp3", coverPath: "covers/fourrr.jpg"},
    {songName: "Kitida Navyane", filePath: "songs/marathi/5.mp3", coverPath: "covers/fiveee.jpg"},
    {songName: " Swarg Ha Nava Song ", filePath: "songs/marathi/6.mp3", coverPath: "covers/sixxx.jpg"},
    {songName: "Adhir Man full song", filePath: "songs/marathi/7.mp3", coverPath: "covers/sevennn.jpg"},
    {songName: " Nako chandra tare fulanche pasare ", filePath: "songs/marathi/8.mp3", coverPath: "covers/eighttt.jpg"},
    {songName: "Jagana He Nyara Jhala Ji ", filePath: "songs/marathi/9.mp3", coverPath: "covers/nineee.jpg"},
    {songName: " Shivba Raja  Sher Shivraj", filePath: "songs/marathi/10.mp3", coverPath: "covers/tennn.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/marathi/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/marathi/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/marathi/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})