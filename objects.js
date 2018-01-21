var playlist = new Object ({ artistName: 'songTitle' });
//var playlist = {'song':'title'};
var playlist = new Object({keys: '0'});

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}