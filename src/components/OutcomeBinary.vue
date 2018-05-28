<script>
export default ({
  props: ['outcomes'],
  template: `
  <div class="button-container">
    <li v-for="(outcome, index) in outcomes">
      <button :class="{ selectedButton: index === $store.state.outcome.selected  }" class="button" @click="submit(outcome, index)">{{ outcome.title }}</button>
    </li>
  </div>
  `,
  data () {
    return {
      chosen: null,
      clickable: false
    }
  },
  methods: {
    submit (outcome, index) {
      this.$store.dispatch('selectOutcome', index)
      this.$store.dispatch('setOutcome', outcome.value)
    }
  },
  mounted () {
  }
})
</script>

<style>
.selectedButton {
  background: rgba(44, 62, 80, 0.13) !important
}
.button-container {
  border-radius: 3px;
  border: solid 1px black;
  display:inline-flex;
}

.button {
    border: solid 1px black;
    padding: 10px 30px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1em;
}
.button-container button {
    background: transparent;
}
.button-container button:first-child {

}
.button-container button:active {
  background-color: rgba(234, 233, 233, 0.24);
}
.button-container button:nth-child(2) {
  border-radius: 0px 5px 5px 0px; /* top left, top right, bottom right, bottom left */
}
</style>
