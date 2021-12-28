<template>
  <div>
 
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
      chartOptions:{

                height:600,
                width: 1300,
                fontSize: 13,
                backgroundColor: "151B26",
                titleTextStyle: { color: "#ebebeb", fontSize: '20'},
                colors: ['#886BF2'],
                bar: { groupWidth: "40%" },
                hAxis:{
                    title: 'Points',
                    titleColor: "ebebeb",
                    textColor: "525252"
                },
                vAxis: {
                 textColor: "ebebeb"
                },
                legend:{
                    position: 'none'
                },
      },
    };
  }
};
</script>