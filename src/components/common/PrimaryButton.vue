<template>
  <div class="text-center mt-5">
      <button class="px-6 py-2 bg-indigo-500 text-white rounded hover:drop-shadow-md" 
      @click.stop="handleClick">{{ label }}</button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    label: {
      type: String,
      default: 'Button'
    }
  },
})
export default class PrimaryButton extends Vue {
  label:string;


  handleClick():void {
    this.$emit('click');
  }

}
</script>
