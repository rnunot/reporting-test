<template>
  <v-row class="text-center">
    <v-col cols="12">
      <sample-chart :options="chartOptions" />
    </v-col>

    <v-col cols="12">
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      />
    </v-col>

    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        Welcome to Vuetify
      </h1>

      <p class="subheading font-weight-regular">
        For help and collaboration with other Vuetify developers,
        <br />please join our online
        <a href="https://community.vuetifyjs.com" target="_blank"
          >Discord Community</a
        >
      </p>
    </v-col>
  </v-row>
</template>

<script>
import SampleChart from '@/components/SampleChart.vue';

export default {
  name: 'HelloWorld',

  components: {
    SampleChart,
  },

  data() {
    return {
      chartOptions: {
        color: [
          this.$vuetify.theme.currentTheme.primary,
          this.$vuetify.theme.currentTheme.secondary,
          this.$vuetify.theme.currentTheme.tertiary,
        ],
        legend: {},
        tooltip: {},
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
          splitLine: false,
        },
        dataset: {
          source: [
            [
              'layer picker',
              '08:00h',
              '09:00h',
              '10:00h',
              '11:00h',
              '12:00h',
              '13:00h',
              '14:00h',
              '15:00h',
              '16:00h',
            ],
            ['LP 1', 1, 2, 0, 4, 0, 0, 2, 0, 0],
            ['LP 2', null, null, 0, 1, 1, 0, 0, 0, 0],
          ],
        },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            lineStyle: {
              width: 4,
            },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            lineStyle: {
              width: 4,
            },
          },
        ],
      },
      chartData: {
        labels: [
          '08:00h',
          '09:00h',
          '10:00h',
          '11:00h',
          '12:00h',
          '13:00h',
          '14:00h',
          '15:00h',
          '16:00h',
        ],
        datasets: [
          {
            label: 'LP 1',
            borderColor: this.$vuetify.theme.currentTheme.primary,
            backgroundColor: this.$vuetify.theme.currentTheme.primary,
            data: [1, 2, 0, 4, 0, 0, 2, 0, 0],
            fill: false,
            lineTension: 0,
          },
          {
            label: 'LP2',
            borderColor: this.$vuetify.theme.currentTheme.secondary,
            backgroundColor: this.$vuetify.theme.currentTheme.secondary,
            data: [null, null, 0, 1, 1, 0, 0, 0, 0],
            fill: false,
            lineTension: 0,
            pointStyle: 'rectRot',
          },
        ],
      },
      chartOptions2: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            borderWidth: 5,
          },
        },
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true,
            boxWidth: 5,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                // drawBorder: false,
                drawOnChartArea: false,
                zeroLineWidth: 0,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
              },
              ticks: {
                precision: 0,
              },
            },
          ],
        },
      },
    };
  },
};
</script>
