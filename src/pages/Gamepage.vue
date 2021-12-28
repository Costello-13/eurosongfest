<template>
    <div>
        <button @click="goToPage('home')">
            Go to home
        </button>
        <h1>
            Game
        </h1>

        <Carousel 
            :items="songs"
            :activeIndex="activeSongIndex"
            @change-index="changeActiveSongIndex"
        />

        <div v-for="(vote,index) in votes" :key="index">
           <button @click="addVote(vote.points)" v-if="!vote.isVoted">
                Add {{vote.points}} points
               
           </button>
        </div>
    </div>
</template>

<script>
    //Components
    import Carousel from "../components/Carousel.vue";
    export default {
    name: "Gamepage",
    components: {
        Carousel
    },
    data() {
        return {
            songs: [],
            activeSongIndex: 0,
            votes: [
                {
                    points: 1,
                    isVoted: false,
                },
                {
                    points: 2,
                    isVoted: false,
                },
                {
                    points: 4,
                    isVoted: false,
                },
                {
                    points: 8,
                    isVoted: false,
                },
            ]
        }
    },
    mounted() {
        //console.log("MOUNTED");
        //Get all songs
        this.fetchSongs();
       
    },
    methods: {
        //Navigation method
        goToPage(page) {
            this.$emit("change-page",page)
        },
        //Data method
        fetchSongs() {
            //Get all songs
            const url="http://webservies.be/eurosong/Songs";
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((songs) => {
                     this.fetchArtists(songs)
                    //console.log(songs);
                });
        },

        fetchArtists(songs) {
            //Get all artists
            const url="http://webservies.be/eurosong/Artists";
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((artists) => {
                    //Loop over array songs with map method
                    songs.map((song) => {
                        //Find the artist in an array
                        const artist = artists.find((artist) => artist.id == song.artist);
                        //Replace the id by the artist object
                        song.artist = artist;
                        //Return the new object
                        return song;
                    });
                    //Change data of songs, so everything will get rerenderd;
                    this.songs = songs;
                });
        },

        postVote(points) {
            const songId = this.songs[this.activeSongIndex].id;
            const url = "http://webservies.be/eurosong/Votes";

            fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    songID: songId,
                    points: points,
                })
            })
            .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    console.log(result);
                })
        },

        changeActiveSongIndex(index) {
            this.activeSongIndex = index;
        },

        addVote(points) {
            let votes = this.votes;
            //create new array when points is equal to given points, change isVoted
            votes.map((vote) => {
                if(vote.points == points) {
                    vote.isVoted = true;
                }
                return vote;
            })
            // Post to API
            this.postVote(points)

            // Check if all votes are set to true OR no false votes
            let activeVotes = votes.filter((vote) => vote.isVoted == true);
            
            // If everything is voted, redirect to ranking
            if (activeVotes.length == votes.length){
                this.goToPage("ranking");
            } // everything = voted
        }
    }
}
</script>