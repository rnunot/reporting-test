<template>
  <div style="sample-chart">
    <e-charts :options="options" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';

export default {
  components: {
    ECharts,
  },
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.sample-chart {
  width: 100%;
  min-height: 500px;

  & >>> .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
