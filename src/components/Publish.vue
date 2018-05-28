<template>
  <div class="panel publish">
    <h3>PUBLISH</h3>
    <div class="export-buttons">
      <button class="report-button">EMBED IMPACT REPORT</button>
      <button class="report-button">PUBLISH IMPACT STATISTICS TO PDF</button>
      <button class="report-button">CREATE CUSTOM REPORT</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Publish',
  computed: {

  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.export-buttons {
  margin-left: auto;
  margin-right: auto;
  width: 40%;

}
.export-buttons button {
  display: block;
  border-radius: 3px;
  margin: 1em;
  width: 250px;
}

.publish h3 {
  padding-left: 1em
}
</style>
