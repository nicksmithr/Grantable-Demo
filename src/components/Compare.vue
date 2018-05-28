<template>
  <div>
    <div class="compare-container">
    <div class="compare-panel">
    <div class="bar-container">
      <bar-chart :title="'vs. Other Foundations'" :data="$store.state.chartData" :value="agePotValue"></bar-chart>
    </div>
  </div>
  <div class="compare-panel">
<iframe src="https://snazzymaps.com/embed/28427" class="map" style="border:none;"></iframe>
<br>
    <span class="map-description">Data from <b>360 Giving</b> and <b>Charities Commission</b>.</span>
  </div>
</div>
<br>
<div class="compare-container">
  <div class="compare-bottom">
    <div class="metrics">
      <h3><sup>RISK</sup><br>59<sup>TH</sup> PERCENTILE</h3>
      <h3><sup>IMPACT</sup><br>73<sup>RD</sup> PERCENTILE</h3>
      <h3><sup>CHANGE</sup><br>44<sup>TH</sup> PERCENTILE</h3>
    </div>
  </div>
</div>
<br><br>
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
h3 {
  display: inline-block;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
}
sup {
  font-size:0.75em;
  opacity: 0.5
}
.metrics {
  display: block;
  text-align: center
}
.map {
  display:block;
  height:350px;
  margin: auto;
  width: 100%
}
.map-description {
  margin: 1em;
}
.bar-container,.team-container {
  width: 90%;
  padding: 1em;
  margin: auto
}
.compare-container {
  display: flex
}
.compare-panel:first-child {
  margin-top:50px !important;
  margin-right: 10px !important
}
.compare-panel:nth-child(2) {
  margin-left: 10px !important;
  padding: 0;
  padding-bottom:10px !important;
}
.compare-panel:nth-child(3) {
  display: block;
}
.compare-bottom {
  width: 82%  !important;
  padding: 1em;
  margin: auto;
  background: #FFFFFF;
  border: 1px solid #F4F4F4;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.09);
  border-radius: 3px;
}
.compare-panel {
  margin:auto;
  padding: 1em;
  margin: auto;
  width:40%;
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
button {
  font-family: 'Karla', Helvetica, Arial, sans-serif;
  margin: 0;
  border: 0;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  outline: none;
  transition: all .1s ease-in;
}

input[type=range] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 50%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497E3;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #2497E3;
}
input[type=range]:focus::-ms-fill-upper {
  background: #2497E3;
}
</style>
