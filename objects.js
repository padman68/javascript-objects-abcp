var playlist = new Object ({ artistName: 'songTitle' });
//var playlist = {'song':'title'};
playlist.artistName = 'Bobby';

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}