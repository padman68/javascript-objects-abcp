var playlist = new Object ({ artistName: 'songTitle' });
//var playlist = {'song':'title'};
var playlist = {sugar:'candy'}
playlist.artistName = 'Bobby';
playlist[artistName] = 'cake';

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}