
myAudio = [ '0.mp3', '1.mp3', '2.mp3', '3.mp3', '4.mp3', 
            '5.mp3', '6.mp3', '7.mp3', '8.mp3', '9.mp3',
            '10.mp3', '11.mp3', '12.mp3', '13.mp3', '14.mp3',
            '15.mp3', '16.mp3', '17.mp3', '18.mp3', '19.mp3',
            '20.mp3', '21.mp3', '22.mp3', '23.mp3' ]; 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

var music_time;
switch (new Date().getHours()) {
    case 0:
        music_time = ;
        break;
    case 1:
        music_time = ;
        break;
    case 2:
        music_time = ;
        break;
    case 3:
        music_time = ;
        break;
    case 4:
        music_time = ;
        break;
    case 5:
        music_time = ;
        break;
    case  6:
        music_time = ;
}

function playBGSong () {
	var mySong = myAudio [0];
	mySong.play();
}


