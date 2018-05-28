<script>
import Highcharts from 'highcharts'

export default ({
  props: ['data', 'value', 'title'],
  template: `
    <div id="thechart"></div>
    <button @click="dataToggle">Toggle</button>
    <button @click="print">Print</button>
  `,
  data () {
    return {
      enableDataLabels: false
    }
  },
  methods: {
    redraw () {
      this.chart.series[0].setData(this.value, true)
    },
    print () {
      // this.char
    },
    dataToggle () {
      let series = this.chart.series[0]
      if (series.visible) {
        this.chart.series[0].hide()
      } else {
        this.chart.series[0].show()
      }
    }
  },
  watch: {
    data () { this.redraw() },
    steven () { this.redraw() },
    value () { this.redraw() }
  },
  mounted () {
    var highchartsOptions = {
      chart: {
        type: 'bar',
        renderTo: 'thechart',
        style: {
          fontFamily: 'Karla'
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 0,
        borderWidth: 0,
        shadow: {
          color: 'transparent',
          width: 0,
          offsetX: 0,
          offsetY: 0
        }
      },
      title: {
        text: this.title
      },
      xAxis: {
        allowDecimals: false,
        title: {
          text: 'Marginalised community'
        }
      },
      exporting: {
        enabled: true
      },
      yAxis: {
        title: {
          text: 'Impact Percentile'
        },
        labels: {
          formatter: function () {
            return this.value
          }
        },
        opposite: false
      },
      plotOptions: {},
      series: [{
        name: 'Data',
        data: this.value,
        color: '#639292'
      },
      {
        name: 'Data',
        data: this.value,
        color: '#DA4444'
      }]
      // credits: false
    }
    this.chart = new Highcharts.Chart(highchartsOptions)
  }
})
</script>
