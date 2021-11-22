<template>
<div v-if="isVisible" v-bind:data-count="count"> <!-- v-bind gaat echt kijken naar de data (en ook meteen aanpassen) dus niet meer statisch maar opzoeken in structuur ,, werkt ook met ":" zonder de v-bind ervoor -->
    Buttoncounter: {{ count }}

    <button @click="addOne">
        Add 1
    </button>

    <button @click="minOne">
        Min 1
    </button>

    <button @click="hide">
        Hide 
    </button> 
</div>
</template>

<script>

export default {
    name: "Counter",
    data() {
        return {
            count: 0,
            isVisible: true
        }
    },
    methods: {
        addOne(){
            console.log("addOne");
            this.count++;
        },
        minOne(){
            console.log("minOne");
            this.count--;
        },
        hide() {
            this.isVisible = false;
        }
    } 
}
</script>
