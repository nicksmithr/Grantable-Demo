<template>
  <div class="analyse-container">
    <div class="panel">
    <div class="team-container">
      <team-chart></team-chart>
    </div>
  </div>
  <div class="panel">
    <div class="team-container">
    </div>
  </div>
</div>
</template>

<script>

import BarChart from './BarChart.vue'
import TeamChart from './TeamChart.vue'

export default {
  name: 'Analysis',
  components: { BarChart, TeamChart },
  data () {
    return {
      progress: 100
    }
  },
  computed: {
    reputationalRisk: function () {
      return Math.round(((this.count / 3) * 100))
    },
    dataComputed () {
      return (this.$store.state.chartData.currentPensionValue) / (this.$store.state.chartData.retireAge - this.$store.state.chartData.age)
    },
    agePotValue () {
      var agePotValue = [[this.$store.state.chartData.age, (this.dataComputed)], [this.$store.state.chartData.retireAge, this.$store.state.chartData.currentPensionValue]]
      return agePotValue
    }
  },
  watch: {

  },
  methods: {
  },
  mounted () {
    console.log(this.$store.state.chartData)
    this.$Progress.set(100)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bar-container,.team-container {
  padding: 1em;
  margin: auto
}
.analyse-container {

}
.panel {
  margin:auto;
  margin-top: 50px;
  width:66.66%;
  background: #FFFFFF;
  border: 1px solid #F4F4F4;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.09);
  border-radius: 3px;
}
.chart-container {
  width: 500px;
  margin: auto !important
}
@media only screen and (max-width: 600px) {
  .panel {
    margin-top: 30px;
    width:80%;
  }
  .chart-container {
    width: 300px
  }
}
</style>
