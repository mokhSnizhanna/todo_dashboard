<template>
  <div class="w-full h-screen flex justify-center items-center content-center bg-gray-50 flex-wrap">
    <h1 class="w-full text-center text-5xl pb-7">Categories</h1>
    <div v-if="categories.length > 0" class="w-full mx-20 flex flex-wrap">
      <div v-for="category in categories" 
          class="grow shrink md:basis-3/6 lg:basis-2/6 w-full md:w-3/6 lg:w-2/6 px-6 mb-5">
        <router-link :to="`/${category.path}`"
                    :class="[`bg-${category.color || 'white'}-400`, 'rounded shadow p-6 block w-full']">
                    {{ category.title }}
        </router-link>
      </div>
    </div> 
    <PrimaryButton v-if="!isShowCreateCategory" label="Add Category" @click="handleShowAddCategory"/>
    <CreateCategory v-if="isShowCreateCategory" @update="handleShowAddCategory"/>
  </div>
</template>

<script lang="ts">
import { Category } from '@/store/StateInterface';
import { Options, setup, Vue } from 'vue-class-component';
import { useStore } from 'vuex'
import CreateCategory from '@/components/CreateCategory.vue';
import PrimaryButton from '@/components/common/PrimaryButton.vue';

@Options({
  components: {
    PrimaryButton,
    CreateCategory,
  },
})
export default class HomeView extends Vue {
  isShowCreateCategoryCard:boolean = false;

  state = setup(() => {
    return useStore();
  })
  created(): void {
    this.state.dispatch('getCategories')
  }

  get categories():Category[] {
    return this.state.getters.getCategories;
  }
  get isShowCreateCategory() {
    return this.isShowCreateCategoryCard || this.categories.length <= 0;
  }

  handleShowAddCategory() {
    this.isShowCreateCategoryCard = !this.isShowCreateCategoryCard;
  }
}
</script>
