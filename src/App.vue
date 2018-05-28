<template>
  <div id='app'>
    <navigation-bar></navigation-bar>
    <div class='header'>
      <h1>EXAMPLE ORGANISATION</h1>
      <h2>Example Programme</h2>
    </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
export default {
  name: 'app',
  components: { NavigationBar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700');

body {
  font-family: 'Karla', Helvetica, Arial, sans-serif;
  margin: 0;
  background-color: #f4f5f5;
}
footer {
  font-size: 1em;
  position: fixed;
  bottom: 10px;
  left: 10px;
}
.header {
  width: 66.66%;
  margin: auto;
}
@media only screen and (max-width: 600px) {
  .header {
    width: 80%;
  }
}
h1,
h2 {
  font-weight: 700;
  margin: 0;
}
h1 {
  font-size: 1em;
  letter-spacing: 0.2px;
  margin-top: 20px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
button {
  outline: none;
  margin: 1em;
  padding: 0.75em;
  font-family: 'Karla', sans-serif;
  background: none;
  text-transform: uppercase;
  font-weight: 700;
  color: #383e41;
  font-size: 14px;
  border: none;
  background-color: #fe8;
}
.panel {
  margin: auto;
  margin-top: 50px;
  width: 66.66%;
  background: #ffffff;
  border: 1px solid #f4f4f4;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.09);
  border-radius: 3px;
}
</style>
