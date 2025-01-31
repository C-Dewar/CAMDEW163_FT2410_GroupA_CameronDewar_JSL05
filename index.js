// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "The Chain", artist: "Fleetwood Mac", genre:"Rock"},
    // { title: ""}
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot":"Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = Object.entries(guardians).map(([guardian, genre]) => {
            const filteredSongs = songs.filter(song => song.genre === genre);
            return{ guardian, songs:filteredSongs};
});
return playlists;   
}

//Function to display the playlists dynamically
function displayPlaylists(playlists) {
    const playlistsDiv = document.getElementById("playlists");
    playlistsDiv.innerHTML = '';

    playlists.forEach(playlist => {
        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('playlist');

        const guardianName = document.createElement('h3');
        guardianName.textContent = `${playlist.guardian}'s Playlist:`;
        guardianDiv.appendChild(guardianName);

        const songList = document.createElement('ul');
        playlist.songs.forEach(song => {
            const songItem = document.createElement('li');
            songItem.classList.add('song');  // Add the 'song' class here

            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title');  // Add the 'song-title' class here
            songTitle.textContent = `${song.title}`;

            const artistName = document.createElement('span');
            artistName.classList.add('artist-name');
            artistName.textContent = ` by ${song.artist}`;

            // Append the song title and artist to the songItem
            songItem.appendChild(songTitle);
            songItem.appendChild(artistName);

            songList.appendChild(songItem);
        });
        guardianDiv.appendChild(songList);
        playlistsDiv.appendChild(guardianDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);


