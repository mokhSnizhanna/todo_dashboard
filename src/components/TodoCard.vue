<template>
  <div class="w-full">
    <p><span>Title</span><b>Edit</b><i>delete</i></p>
  </div>
</template>

<script lang="ts">
import { Todo } from '@/store/StateInterface';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {},
    }
  }
})
export default class TodoCard extends Vue {
item: Todo
}
</script>
