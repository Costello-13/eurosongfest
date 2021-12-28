<template>
    <div>
        <button @click="goToPage('home')">
        Go to home
      </button>
      <h1 id="title">
        Ranking
      </h1>
      <div>
          <img id="podium" :src="image"/>
          <span v-for="(song,index) in SortonPoints(songs).slice(0,1)" :key="index" id="firstplace" class="places"> {{song.title}}  </span>
          <span v-for="(song,index) in SortonPoints(songs).slice(1,2)" :key="index" id="secondplace" class="places"> {{song.title}} </span>
          <span v-for="(song,index) in SortonPoints(songs).slice(2,3)" :key="index" id="thirdplace" class="places"> {{song.title}} </span>

      </div>
      <div id="leaderbutton">
          <button class="rankingbuttons" @click="goToPage('Leaderboard')"> 
              Leaderboard
          </button>
      </div>
    </div>
</template>

<script>
import image from "../assets/podium4.png"

export default {
    name: "Rankingpage",
    data(){
        return {
            songs:[],
            image: image
        };
    },
    mounted() {
        this.fetchSongs();
    },
    methods:{
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
