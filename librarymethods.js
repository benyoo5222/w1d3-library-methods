var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists : function () {
    for (var a=1; this.playlists["p0"+a]!==undefined;a++){
      if(a==1){
        var title="p0"+a+":";
        title+=" "+ this.playlists["p0"+a].name+" - ";
        title+=this.playlists["p0"+a].tracks.length+ " tracks";
        title+="\n";
      } else{
        title+="p0"+a+":";
        title+=" "+ this.playlists["p0"+a].name+" - ";
        title+=this.playlists["p0"+a].tracks.length+ " tracks";
      }
    }
    return title;
  },
  printTracks : function () {
  var a=1;
  var title="";
  for (; this.tracks["t0"+a]!==undefined;a++){
    title+="t0"+a+":"
    title+=" "+ this.tracks["t0"+a].name+" by ";
    title+=this.tracks["t0"+a].artist+ " (" + this.tracks["t0"+a].album+")";
    title+="\n";
  }
  return title;
},
  printPlaylist : function (playlistId) {
  for (var a=1; this.playlists["p0"+a]!==undefined;a++){
  if(a==1){
    var title="p0"+a+":";
    title+=" "+ this.playlists["p0"+a].name+" - ";
    title+=this.playlists["p0"+a].tracks.length+ " tracks";
    title+="\n";
    for (var b=1; b<=this.playlists["p0"+a].tracks.length;b++){
      if(b==1){
        title+="t0"+b+":";
        title+=" "+ this.tracks["t0"+b].name+" by ";
        title+=this.tracks["t0"+b].artist+ " (" + this.tracks["t0"+b].album+")";
        title+="\n";
      } else{
        title+="t0"+b+":";
        title+=" "+ this.tracks["t0"+b].name+" by ";
        title+=this.tracks["t0"+b].artist+ " (" + this.tracks["t0"+b].album+")";
        title+="\n";
      }
    }
  } else {
      title+="p0"+a+":";
      title+=" "+ this.playlists["p0"+a].name+" - ";
      title+=this.playlists["p0"+a].tracks.length+ " tracks";
      title+="\n";
      for (var b=1; b<=this.playlists["p0"+a].tracks.length;b++){
        if(b==1){
          title+="t0"+b+":";
          title+=" "+ this.tracks["t0"+b].name+" by ";
          title+=this.tracks["t0"+b].artist+ " (" + this.tracks["t0"+b].album+")";
          title+="\n";
        } else{
          title+="t0"+b+":";
          title+=" "+ this.tracks["t0"+b].name+" by ";
          title+=this.tracks["t0"+b].artist+ " (" + this.tracks["t0"+b].album+")";
          title+="\n";
        }
    }
  }
}
  return title;
},
addTrackToPlaylist : function (trackId, playlistId) {
  function checktrackid(trackId){
    for(var a=1; this.tracks["t0"+a]!==undefined;a++){
      if(trackId==this.tracks["t0"+a].id){
        return true;
      }
    }
    return false;
  }

  function checkplaylistid(playlistId){
    for(var a=1; this.playlists["p0"+a]!==undefined; a++){
      if(playlistId==this.playlists["p0"+a].id){
        return true;
      }
    }
    return false;
  }

  if(checktrackid(trackId)&&checkplaylistid(playlistId)){
    var track=this.tracks[trackId].id;
    this.playlists[playlistId].tracks.push(track);
    return (this.playlists[playlistId].tracks);
  } else{
    console.log("Not an existing track/playlist id");
  }

},
uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
addTrack : function (name, artist, album) {
  for(var a=1; this.tracks["t0"+a]!==undefined;a++){
    var newa=a;
  }
  newa++;


  this.tracks["t0"+newa]={};

  this.tracks["t0"+newa]["id"]=this.uid();

  this.tracks["t0"+newa]["name"]=name;

  this.tracks["t0"+newa]["artist"]=artist;

  this.tracks["t0"+newa]["album"]=album;
  return this.tracks;
  }
}
console.log(library.addTrack("basketball","ben","NBA"));