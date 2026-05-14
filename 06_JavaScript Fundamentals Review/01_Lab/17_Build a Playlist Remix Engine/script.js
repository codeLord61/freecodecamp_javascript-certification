const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists) {
    if(!Array.isArray(playlists)) {
        return []
    }

    let flattenedTracks = []
    // One way of flattening nested array and merging to existing array in 1 liner
    // flattenedTracks = flattenedTracks.concat(playlists.flat())
  
    for (let playlistIndex = 0; playlistIndex < playlists.length; playlistIndex++) {
        const tracks = playlists[playlistIndex]

        for (let trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
            const trackObj = tracks[trackIndex];
            trackObj.source = [playlistIndex, trackIndex]
            flattenedTracks.push(trackObj)
        }
    }

    return flattenedTracks;
}



function scoreTracks(tracksArr) {
    for (const trackObj of tracksArr) {
        const score = trackObj.votes * 10 - Math.abs(trackObj.bpm - 120)
        trackObj.score = score
    }
    return tracksArr
}

function dedupeTracks (tracksArr) {
    const hashMap = new Set()

    for (let index = 0; index < tracksArr.length; index++) {
        const trackObj = tracksArr[index];
        
        // Add track to hashmap if fresh or first discovered 
        if (!hashMap.has(trackObj.trackId)) {
            hashMap.add(trackObj.trackId)
        } else {
            // Duplicate track so remove from main array
            tracksArr.splice(index, 1)
            index--
        }
    }

    return tracksArr
}

function enforceArtistQuota (tracksArr, maxOccurence) {
    const artistsCounter = {}

    for (let index = 0; index < tracksArr.length; index++) {
        const trackObj = tracksArr[index];
        
        if (!Object.hasOwn(artistsCounter, trackObj.artist)) {
            artistsCounter[trackObj.artist] = 1
        } else {
            // lets say maxOccurence = 2, now for 3rd time seeing the track with same artist
            // we'll observe the artist counter will already be equal to maxOccurence then we drop the element
            if (artistsCounter[trackObj.artist] === maxOccurence) {
                tracksArr.splice(index, 1)
                index--
            } else {
                artistsCounter[trackObj.artist] += 1
            }
        }
    }
    return tracksArr
}

function buildSchedule (tracksArr) {
    const schedule = []

    for (let index = 1; index < tracksArr.length+1; index++) {
        const trackObj = tracksArr[index-1];
        schedule.push({
            slot: index,
            trackId: trackObj.trackId
        })
    }
    return schedule;
}

function remixPlaylist (playlists, maxPerArtist) {
    const flattened = flattenPlaylists(playlists)
    const withScores = scoreTracks(flattened)
    const deduplicated = dedupeTracks(withScores)
    const withArtistConstraint = enforceArtistQuota(deduplicated, maxPerArtist)
    const finalWithSchedule = buildSchedule(withArtistConstraint)

    return finalWithSchedule
} 

console.log(remixPlaylist(playlists, 1));
