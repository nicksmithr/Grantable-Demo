<template>
  <div>
    <div class="intro-overlay">
      <div class="intro-container">
        <h3>INTRO</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
  </div>
  <div class="panel">
    <ul class="question-container fade-in one">
      <li class="buttons" v-for="q in q.slice($store.state.binary.count, $store.state.binary.count+1)">
        <p class="question" v-if="q">{{ q.question }}</p>
        <p class="question" v-else="q">else</p>

        <!-- BUTTONS -->

        <!-- q.outcomes  -->
      <outcome-binary :outcomes="q.outcomes"></outcome-binary>

      <Weight :weight="q.risk"></Weight>

      <button :class="{ clickableClass: $store.state.outcome.selected != null && $store.state.weight.selected != null }" class="submit-button" @click="Submit()">Next</button>
    </li>
</ul>
    <vue-progress-bar></vue-progress-bar>
    <footer>
      {{ Math.round(($store.state.binary.count / 10) * 100) }}%
    </footer>
  </div>
</div>
</template>

<script>
import db from '../db.js'
import Weight from './Weight.vue'
import OutcomeBinary from './OutcomeBinary.vue'

export default {
  name: 'name',
  components: { Weight, OutcomeBinary },
  data () {
    return {
      chartData: {
        age: 55,
        currentPensionValue: 22000,
        retireAge: 87
      },
      q: [{
        question: 'title'
      }],
      change: false,
      magnitude: 3,
      progress: 0
    }
  },
  firebase: {
    q: {
      source: db.ref('questions')
    }
  },
  computed: {
  },
  watch: {

  },
  methods: {
    Submit () {
      if (this.$store.state.binary.count === this.q.length - 1) {
        this.$router.push('Analyse')
        this.$store.state.nav.index = 'Analyse'
      } else if (this.$store.state.outcome.selected != null && this.$store.state.weight.selected != null) {
        this.$store.dispatch('reset')
        this.$store.dispatch('incrementCount', null)
        this.updateProgress()
        OutcomeBinary.chosen = null
        Weight.clicked = null
        console.log(this.$store.state.binary.count)
      } else {
        console.log('error')
        this.$Progress.fail()
      }
    },
    updateProgress () {
      this.progress = (this.$store.state.binary.count / this.q.length) * 100
      this.$Progress.set(this.progress)
    },
    updateScale (e) {
      this.magnitude = e.target.value
      this.change = !this.change
      console.log(e.target.value)
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.intro-overlay {
  display:none;
  padding-top: 20%;
  text-align: center;
  /*display:block;*/
  position: fixed;
  z-index: 1;
  top: 0;
  background: rgba(255,255,255,.90);
  width:100%;
  height:100%;
}
.intro-container {
  width:60%;
  margin: auto;
}
.fade-in.one {
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-duration: 0.99s;
    -moz-animation-duration: 0.99s;
    animation-duration: 0.99s;
}
.fade-in {
    opacity: 0;
    /* make things invisible upon start */
    -webkit-animation: fadeIn ease-in-out 1;
    /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
    -moz-animation: fadeIn ease-in-out 1;
    animation: fadeIn ease-in-out 1;
    -webkit-animation-fill-mode: forwards;
    /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
@-webkit-keyframes fadeIn {
    from {
        opacity: 0;
        -webkit-transform: translateY(20px);
    }

    to {
        opacity: 1;
        -webkit-transform: translateY(0px);
    }
}

@-moz-keyframes fadeIn {
    from {
        opacity: 0;
        -webkit-transform: translateY(20px);
    }

    to {
        opacity: 1;
        -webkit-transform: translateY(0px);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        -webkit-transform: translateY(20px);
    }

    to {
        opacity: 1;
        -webkit-transform: translateY(0px);
    }
}
hr {
    border: 0.5px solid rgba(0,0,0,0.09);
    margin-top: 2em;
}
.active {
  border-radius:5px;
}
.question-container {
  text-align: center;
}
.chart-container {
  width: 500px;
  margin: auto !important
}

.question {
    font-size: 24px;
    display: block;
    width: 80%;
    margin: auto;
    padding: 1em;
}

ul {
  list-style-type: none;
  padding: 0;
}
.progress-bar {
  /*position: absolute;*/
  /*bottom: 0px;*/
  height:20px;
  background: red
}

li {
  display: inline;
}
li .risk {
  display: inline;
}


/*.risk button:first-child {
  border-radius: 5px 0px 0px 5px;
}*/

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

.submit-button {
    display: block;
    margin: auto;
    margin-top: 20px;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 3px;
    font-weight: 700;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.33);
    color: rgba(0, 0, 0, 0.33);
}
.clickableClass {
  background: #323639;
  border: 1px solid #323639;
  color: rgba(255, 255, 255, 0.66);
}

.submit-button:active {
  /*padding: 10px 12px;*/
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
.data-container {
  margin-top:1em;
  text-align: center;
  margin:auto !important
}
.data-container p {
  display: inline;
  text-align: center;
  padding-right: 0.5em;
  padding-left: 0.5em;
  line-height: 2em;
  font-size: 2em;
  font-weight: bold
}
.data-container p:first-child {
  color: red
}

.data-container p:nth-child(2) {
  color: blue
}

.data-container p:nth-child(3) {
  color: green
}
a {
  color: #35495E;
}
.li {
  padding: 0 !important;
  margin: auto !important
}
.change-enter-active
{
	background-color: yellow;
	visibility: visible;
	transition: visibility 3s;
}
.change-enter-to
{
	background-color: red;
	visibility: hidden;
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
