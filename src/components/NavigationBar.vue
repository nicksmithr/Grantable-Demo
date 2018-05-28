<script>
export default ({
  data () {
    return {
      menuToggle: false
    }
  },
  template: `
    <div>
    <div class="mobile-display">
      <button class="toggle navigation-button" @click="showMenu">Menu</button>
      <ul v-if="menuToggle" class="navigation-links">
        <router-link class="navigation-button" v-bind:class="{ active: $store.state.nav.index === 'Review'}" v-on:click.native="pass('Review')" :to="{ name: 'Review', params: {} }">Review</router-link>
        <router-link v-bind:class="{ active: $store.state.nav.index === 'Analyse'}" v-on:click.native="pass('Analyse')" class="navigation-button" :to="{ name: 'Analyse', params: {} }">Analyse</router-link>
        <router-link v-bind:class="{ active: $store.state.nav.index === 'Compare'}" v-on:click.native="pass('Compare')" class="navigation-button" :to="{ name: 'Compare', params: {} }">Compare</router-link>
        <router-link v-bind:class="{ active: $store.state.nav.index === 'Measure'}" v-on:click.native="pass('Measure')" class="navigation-button" :to="{ name: 'Measure', params: {} }">Measure</router-link>
        <router-link v-bind:class="{ active: $store.state.nav.index === 'Publish'}" v-on:click.native="pass('Publish')" class="navigation-button" :to="{ name: 'Publish', params: {} }">Publish</router-link>
      </ul>
      </div>
      <ul class="navigation-links desktop-display">
      <router-link class="navigation-button" v-bind:class="{ active: $store.state.nav.index === 'Review'}" v-on:click.native="pass('Review')" :to="{ name: 'Review', params: {} }">Review</router-link>
      <router-link v-bind:class="{ active: $store.state.nav.index === 'Analyse'}" v-on:click.native="pass('Analyse')" class="navigation-button" :to="{ name: 'Analyse', params: {} }">Analyse</router-link>
      <router-link v-bind:class="{ active: $store.state.nav.index === 'Compare'}" v-on:click.native="pass('Compare')" class="navigation-button" :to="{ name: 'Compare', params: {} }">Compare</router-link>
      <router-link v-bind:class="{ active: $store.state.nav.index === 'Measure'}" v-on:click.native="pass('Measure')" class="navigation-button" :to="{ name: 'Measure', params: {} }">Measure</router-link>
      <router-link v-bind:class="{ active: $store.state.nav.index === 'Publish'}" v-on:click.native="pass('Publish')" class="navigation-button" :to="{ name: 'Publish', params: {} }">Publish</router-link>
      </ul>
    </div>
  `,
  methods: {
    showMenu: function () {
      this.menuToggle = !this.menuToggle
    },
    pass (Param) {
      console.log(Param)
      this.$store.state.nav.index = Param
      console.log(this.$store.state.nav.index)
    }
  },
  watch: {
    // navIndex: function () {
    //   console.log(this.$route.name)
    //   return this.$route.name
    // }
  },
  mounted () {
    this.$store.state.nav.index = this.$route.name
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navigation-links {
    margin: 0 !important;
    padding: 0
}
.navigation-button {
    padding: 0.3em;
    text-decoration: none;
    color: #1d1d1d;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    font-family: 'Karla',sans-serif;
}
.desktop-display {
  display: none
}
.mobile-display {
  display: block
}
.active {
  background: rgb(231, 232, 232);
  border-radius: 0px 3px 3px 0px !important;
}
.toggle {
  text-align: right;
  padding: 1em 1em 1em 0em;
  width: 100%;
  display: inline;
  border: none;
  background: none;
}
.navigation-links a {
  display: block;
  width: 100%;
  margin: auto;
  text-align: center;
  border-bottom: 1px solid #e7e8e8;
}
.navigation-links a:first-child {
  border-top: 1px solid #e7e8e8;
}
@media only screen and (min-width: 700px) {
  .desktop-display {
    display: block;
    padding-top:0.5em
  }
  .mobile-display {
    display: none
  }
  .navigation-links a {
    display: inline;
    width: auto;
    padding: 0.5em !important;
    border: none;
  }
  .navigation-links {
    padding-right: 0.5em;
    text-align: right;
  }
  .toggle {
    display: none
  }
}
</style>
