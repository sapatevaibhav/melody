

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/hindi1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: " Trendz Music", filePath: "songs/hindi1.mp3", coverPath: "covers/onee.jpg"},
    {songName: " Aankhon Se Batana ", filePath: "songs/hindi2.mp3", coverPath: "covers/twoo.jpg"},
    {songName: "SunSonio Studio ", filePath: "songs/hindi3.mp3", coverPath: "covers/threee.jpg"},
    {songName: "Mera Din Bhi Tu", filePath: "songs/hindi4.mp3", coverPath: "covers/fourr.jpg"},
    {songName: "2018s 50 HIT BOLLYWOOD SONGS", filePath: "songs/hindi5.mp3", coverPath: "covers/fivee.jpg"},
    {songName: " FEEL THE LOVE  MASHUP", filePath: "songs/hindi6.mp3", coverPath: "covers/sixx.jpg"},
    {songName: "This 5 Min Makes Your Day ", filePath: "songs/hindi7.mp3", coverPath: "covers/sevenn.jpg"},
    {songName: "O Saathi", filePath: "songs/hindi8.mp3", coverPath: "covers/eightt.jpg"},
    {songName: " Ik Supna Full Audio Song", filePath: "songs/9.mp3", coverPath: "covers/ninee.jpg"},
    {songName: "Tarsati Hai Nigahen", filePath: "songs/hindi10.mp3", coverPath: "covers/tenn.jpg"},
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
        audioElement.src = `songs/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})