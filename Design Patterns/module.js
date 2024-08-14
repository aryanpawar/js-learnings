const musicPlayer = (function () {
  let current = 0;
  // Let's make sure no one can directly access our songList
  const songList = ["Blue Eyes", "Why This Kolavari Di", "Dastaan"];

  // We'll expose all these functions to the user
  function play() {
    console.log(`Playing ${songList[current]}!`);
  }

  function pause() {
    console.log("Im paused!");
  }

  function addTrackToMusicQueue(track) {
    songList.push(track);
    console.log(`${track} Added`);
  }

  function showNextTrack() {
    console.log("My next track is", songList[current + 1]);
  }

  function playNextSong() {
    if (songList[current + 1]) {
      loadSong();
      play();
    } else {
      console.log("Empty Queue");
    }
  }

  // Let's hide this function
  function loadSong() {
    console.log(`Loaded ${songList[current + 1]}`);
    current++;
    // filesystem.loadNextSong(); // Sample File Operation
  }

  return {
    playMusic: play,
    pauseMusic: pause,
    showNextTrack: showNextTrack,
    playNext: playNextSong,
    addTrack: addTrackToMusicQueue,
  };
})();

const musicModule = musicPlayer;
musicModule.playMusic();
musicModule.pauseMusic();
musicModule.showNextTrack();
musicModule.playNext();
musicModule.addTrack("Sanam Re");
musicModule.showNextTrack();
musicModule.playNext();
musicModule.playNext();
musicModule.playNext();

// Things we can't access...
// musicModule.loadSong(); // error: not a function
// musicModule.songList.push("White Rabbit"); // undefined error
