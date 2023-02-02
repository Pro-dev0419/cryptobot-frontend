<template>
    <div class="relative w-full bg-[#ffffff4b] h-0.5 rounded">
        <div class="absolute bg-primary h-full" :style="'width:'+percent+'%'">{{ percent }}%</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'ProgressBar',
  components: {  },
  props: {
    percent: { required: true, default: 0, type: String },
  },
  setup() {
    
  },
});
</script>
