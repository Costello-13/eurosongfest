<template>
  <div>
    <h3>
      Visualisation 
    </h3>
    <GChart
      type="BarChart"
      :data="graphData"
      :options="chartOptions"
    />    
  </div>
</template>
 
<script>
import { GChart } from "vue-google-charts";
export default {
  name: "Googlechart",
  props: [
    "graphData"
  ],
  components: {
    GChart
  },
  data() {
    return {
      chartOptions: {
        width: auto
      }
    };
  }
};
</script>