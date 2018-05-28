<script>
import Highcharts from 'highcharts'

export default ({
  template: `
    <div>
    <div id="team-chart"></div>
    <button @click="dataToggle">Toggle</button>
    <button @click="print">Print</button>
    </div>
  `,
  data () {
    return {
      chart: null,
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
      console.log('Tog')
      console.log(this.chart.series)
      let series = this.chart.series[0]
      if (series.visible) {
        series.hide()
      } else {
        series.show()
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
        type: 'area',
        renderTo: 'team-chart',
        style: {
          fontFamily: 'Karla'
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        split: true,
        enabled: true,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 0,
        borderWidth: 0,
        crosshairs: [false, true],
        shadow: {
          color: 'transparent',
          width: 0,
          offsetX: 0,
          offsetY: 0
        }
      },
      title: {
        text: 'Team View'
      },
      xAxis: {
        categories: ['Community', 'Change-making', 'Tech. Innovation', 'Political Influence', 'Health'],
        tickmarkPlacement: 'off',
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Overall Potential'
        },
        labels: {
          formatter: function () {
            return this.value
          }
        }
      },
      plotOptions: {
        area: {
          // stacking: 'normal',
          lineColor: 'transparent',
          lineWidth: 1,
          marker: {
            lineWidth: 0,
            lineColor: 'transparent'
          }
        }
      },
      series: [{
        name: 'BD',
        data: [50, 32, 31, 33, 26],
        color: '#639292'
      }, {
        name: 'NA',
        data: [44, 31, 43, 47, 45],
        color: '#357A78'
      }, {
        name: 'PP',
        data: [55, 51, 31, 31, 22],
        color: '#ED5A3F'
      }, {
        name: 'MJ',
        data: [32, 55, 43, 41, 25],
        color: '#DA4444'
      }]
      // credits: false
    }
    this.chart = new Highcharts.Chart(highchartsOptions)
  }
})
</script>
