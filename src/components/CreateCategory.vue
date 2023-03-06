<template>
  <div :class="['mx-6 rounded shadow p-6 w-full md:w-3/6 lg:w-2/6 mt-6', bgCard]">
    <BaseInput :value="title" label="Cateory title" @updateInput="handleInputTitle"/>
    <ChoseColor :items="categoryColors" @change="handelSelectColor"/>
    <PrimaryButton label="Add" @click="handleCreateCategory"/>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component';
import CategoryMixin from './mixins/CategoryMixin.vue';
import { useStore } from 'vuex'
import BaseInput from './common/BaseInput.vue';
import PrimaryButton from './common/PrimaryButton.vue';
import ChoseColor from './ChoseColor.vue';
import { Category } from '@/store/StateInterface';

@Options({
  mixins: [CategoryMixin],
  components: {
    BaseInput,
    ChoseColor,
    PrimaryButton,
  },
})
export default class CreateCategory extends Vue  {
  title:string = '';
  categoryColors:string[] = ['yellow', 'green', 'purple', 'gray'];
  choseColor:string = '';

  state = setup(() => {
    return useStore();
  })

  get bgCard(): string {
    return this.choseColor ? `bg-${this.choseColor}-200` : '';
  }

  handelSelectColor(color:string):void {
    this.choseColor = color;
  }

  handleInputTitle(value: string):void {
    this.title = value;
  }

  handleCreateCategory():void {
    // @ts-ignore
    const id: string = this.generateId();
    // @ts-ignore
    const path: string = this.getPathFromTitle(this.title);
    const data:Category = {
      id: id,
      title: this.title,
      path: path,
      color: this.choseColor,
    }

    this.cleanForm();

    this.state.dispatch('addCategory', data)
    this.$emit('update');
  }

  cleanForm() {
    this.title = '';
    this.choseColor = '';
  }

}
</script>

