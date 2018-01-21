var playlist = new Object ({ artistName: 'songTitle' });
//var playlist = {'song':'title'};
var playlist = {
 'Marine Boudeau': 'Something',
 'Someone else': 'Something else'
}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}