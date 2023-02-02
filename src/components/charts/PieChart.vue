<template>
  <div>
    <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import { formatPriceCurrency } from '@/shared/formatters';

export default defineComponent({
  name: 'PieChart',
  data() {
    return {

    };
  },
  props: {
    currencies: { required: true, type: Array },
    showTitle: { required: false, type: Boolean },
  },
  setup(props) {
    let series: any = [];
    let chartOptions = {
      chart: {
        width: 380,
        type: 'pie',
        foreColor: 'white'
      },
      labels: [],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    props.currencies.map((item: any) => {
      series.push(item.est_stake);
      chartOptions.labels.push(item.currency);
    });

    return { series, chartOptions }
  },
});
</script>
