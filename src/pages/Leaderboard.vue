<template>
    <div>
        <button @click="goToPage('ranking')">
        Go to ranking
        </button>
        <h1 id="title">
            Leaderboard
        </h1>
        <div id="rankingtable">
           <table>
               <tr>
                <th>
                    Place
                </th>
                <th>
                   Artist
                </th>
                <th>
                   Title 
                </th>
                <th>
                   Points
                </th>
               </tr>
               <tr>
                <td>
                    <div v-for="(song,index) in SortonPoints(songs)" :key="index">
                        {{index + 1}}
                    </div>
                </td>
                <td>
                    <div v-for="(song,index) in SortonPoints(songs)" :key="index">
                        {{song.artist}}
                    </div>
                </td>
                <td>
                    <div v-for="(song,index) in SortonPoints(songs)" :key="index">
                       {{song.title}}
                    </div>
                </td>
                <td id=points>
                    <div v-for="(song,index) in SortonPoints(songs)" :key="index">
                        {{song.points}}
                    </div>
                </td>
               </tr>
           </table>
        </div>
    </div>
</template>

<script>


export default {
    name: 'Leaderboard',
    data(){
        return{
            songs: []
        };
    },

    mounted() {
      this.fetchSongs();      
    },

    methods: {
        goToPage(page){
            // klikt op button en dit gaat het naar boven doorsturen om page werkt 
            this.$emit("change-page", page);
        },
        // alle songs gaan binnen halen 
        // data methods 
        fetchSongs(){
            // get all songs
            const url = "http://webservies.be/eurosong/Songs";
            
            
            fetch(url)
            .then((response) =>{
                return response.json();
            })
            .then((songs) => {
                this.fetchArtists(songs);
                songs.map((song)=> {
                    song.points = 0;
                    return song;
                })
                this.songs = songs;
                this.fetchPoints(songs);
            });
        },
        
        fetchArtists(songs){
            
            const url = "http://webservies.be/eurosong/Artists";
            fetch(url)
            .then((response) =>{
                return response.json();
            })
            .then((artists) => {
                
                songs.map((song) => {
                    // find the artist in an array
                    const artist = artists.find((artist) => artist.id == song.artist);

                    // replace the id by the artist object 
                    song.artist = artist.name;
                    
                    // return the new object 
                    return song;

                });

                // change data of songs, so everything will get rerenderd
                this.songs = songs;
            });
        },

        fetchPoints(songs){
            songs.map((song) => {
                // get all votes
                const url = "http://webservies.be/eurosong/Songs/"+ song.id + "/points";
                
                
                fetch(url)
                .then((response) =>{
                    return response.json();
                })
                .then((points)=>{
                    song.points= points;
                })

                return song;
            })

            // change data of songs, so everything will get rerenderd
            this.songs = songs;
        
        }, 

        SortonPoints(songs) { 
            return songs.slice().sort(function(a, b) {
            return b.points - a.points;
            })
        }
    }
}
</script>
