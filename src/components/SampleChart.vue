<template>
  <div style="sample-chart">
    <e-charts :options="options" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';

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

<style lang="scss">
.echarts {
  width: 100%;
  min-height: 500px;
}
</style>
