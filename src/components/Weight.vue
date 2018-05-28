<script>
export default ({
  props: ['weight'],
  template: `
  <div class="weight-container">
    <h1>IMPORTANCE</h1><br />
    <div class="weight-buttons">
      <li v-for="(w, index) in weight">
        <button :class="{ selected: index === $store.state.weight.selected  }" v-bind:style="{ 'background-color': w.colour, 'border-color': w.colour }" class="weight-button" @click="selectWeight(w , index)">{{ w.title }}</button>
      </li>
    </div>
  </div>
  `,
  data () {
    return {
      clicked: null
    }
  },
  methods: {
    selectWeight (weight, index) {
      this.$store.dispatch('selectWeight', index)
      this.$store.dispatch('setWeight', weight)
    }
  },
  mounted () {
  }
})
</script>

<style>
.selected {
  opacity: 0.5;
  transition: 100ms all ease-in-out
}
.weight-container {
  display: block;
  margin: auto;
}


.weight-button {
  border: 5px solid;
  padding: 10px 14px;
  width: 20%;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
}
.weight-button:hover {
  /*opacity:0.8;*/
}
@media only screen and (max-width: 600px) {
  li {
    display: block;
  }
  .weight-button {
    width:100% !important
  }
}
</style>
