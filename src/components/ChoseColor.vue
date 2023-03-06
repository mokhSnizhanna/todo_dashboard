<template>
  <div class="w-full my-4 flex justify-between">
    <div v-for="(color, key) in items" 
          :key="key" 
          :class="['h-8 w-8 rounded-full inline-block', `bg-${color}-400`, {'border-4 border-blue-800': selectColor === color }]"
          @click="handleChoseColor(color)">
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    items: {
      type: Array,
      default: ()=>[],
    }
  },
})
export default class ChoseColor extends Vue {
  items:string[];
  selectColor:string = '';

  handleChoseColor(color: string):void {
    this.selectColor = color;
    this.$emit('input', color);
    this.$emit('change', color);
  }

}
</script>
