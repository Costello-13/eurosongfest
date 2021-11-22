<template>
  <div id="app">
    <!-- Nav -->
    <Navigation />

    <!-- content -->
    <h1>
      Eurosong festival
    </h1>

    <Counter />

    <Feedback 
    v-for="(message, index) in messages"
    :key = "index"
    :message="message.message"
    :classType="message.classType"
    />

    <button @click="addMessage"> 
      Add Message
    </button>
  </div>
</template>

<script>

// import for the whole styling of the app
import style from './scss/style.scss';

// Components
import Navigation from "./components/Navigation.vue";
import Counter from "./components/Counter.vue";
import Feedback from "./components/Feedback.vue";

// App component
export default {
  name: 'App',
  components: {
    Navigation,
    Counter,
    Feedback
  },
  data() {
    return {
      messages: [
        {
          message: "Error, 't is kapot",
          classType: "error"
        },
        {
          message: "Great success",
          classType: "success"
        },
        {
          message: "Er is een fout gebeurd",
          classType: "warning"
        }
      ]
    }
  },
  methods: {
    addMessage() {
      this.messages.push({
        message: "Hallo nieuwe feedback item",
        classType: "success"
      })
    }
  }
}

</script>