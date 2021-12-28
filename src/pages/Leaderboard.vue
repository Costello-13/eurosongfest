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
                <th class="headrow">
                    Place
                </th>
                <th class="headrow">
                   Artist
                </th>
                <th class="headrow">
                   Title 
                </th>
                <th class="headrow">
                   Points
                </th>
                <th class="headrow">
                    Spotify
                </th>
               </tr>
               <tr>
                <td id="place" class="headrow">
                    <div v-for="(song,index) in SortonPoints(songs)" :key="index">
                        {{index + 1}}
                    </div>
                </td>
                <td class="headrow">
                    <div v-for="(song,index) in SortonPoints(songs)" :key="index">
                        {{song.artist}}
                    </div>
                </td>
                <td class="headrow">
                    <div v-for="(song,index) in SortonPoints(songs)" :key="index">
                       {{song.title}}
                    </div>
                </td>
                <td id=points class="headrow">
                    <div v-for="(song,index) in SortonPoints(songs)" :key="index">
                        {{song.points}}
                    </div>
                </td>
                <td id="spotifylink" class="headrow"> 
                    <div v-for="(song,index) in SortonPoints(songs)" :key="index">
                       <a :href="song.spotify" id="link">
                           Click here 
                       </a>
                    </div>
                </td>
               </tr>
           </table>
        </div>
        
        <Googlechart
            :graphData="graphData"
        />
    </div>
</template>

<script>
import Googlechart from "../components/Googlechart.vue"
export default {
    name: 'Leaderboard',
    components: {
        Googlechart
    },
    data(){
        return{
            songs: [],
            graphData: [["Title", "Points"]],
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

                    var graph_stuff = [song.title, song.points];
                    this.graphData.push(graph_stuff);
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
