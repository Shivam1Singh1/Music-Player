console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/Tere Hawaale.mp3');
let masterPlay = document.getElementById('masterplay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songs = [
    {
        songName: "Tere Hawaale", filePath: "songs/Tere Hawaale.mp3", coverPath: "covers/1.jpeg"
    },
    {
        songName: "Ram Siya Ram", filePath: "songs/Ram Siya Ram.mp3", coverPath: "covers/2.jpeg"
    }, {
        songName: "Kesariya", filePath: "songs/Kesariya(PagalWorld.com.pe).mp3", coverPath: "covers/3.jpeg"
    }, {
        songName: "Arjan Vailly", filePath: "songs/Arjan Vailly.mp3", coverPath: "covers/4.jpeg"
    }, {
        songName: "Mere Sohneya", filePath: "songs/Mere Sohneya.mp3", coverPath: "covers/5.jpeg"
    }, {
        songName: "Tu Hai To Mujhe Phir Aur Kya Chahiye          ", filePath: "songs/Tu Hai To Mujhe Phir Aur Kya Chahiye(PagalWorld.com.pe).mp3", coverPath: "covers/6.jpeg"
    }, {
        songName: "Kabhi Shaam Dhale", filePath: "songs/Kabhi Shaam Dhale.mp3", coverPath: "covers/7.jpeg"
    }

];

audioElement.play();
gif.style.opacity = 1;
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});
progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });

});
document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

