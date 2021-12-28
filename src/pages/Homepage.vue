<template>
    <div>
        <img id="backgroundimg" :src="image2"/>
        <div>
            <img :src="image" />
        </div>
        <div id="buttons">
        <button class="homebuttons" @click="goToPage('game')">
        Show Game
        </button>
        <div class="divider"/>
        <button class="homebuttons" @click="goToPage('ranking')">
        Show Ranking
        </button>
        </div>
    </div>
</template>

<script>
import image from "../assets/eurotranswhite.png"
import image2 from "../assets/euroback.jpg"

export default {
    name: "Homepage",
    data: function () {
            return {
                image: image,
                image2: image2
            }
    },
    methods: {
        goToPage(page){
            this.$emit("change-page", page);
        }
    }

}
</script>
