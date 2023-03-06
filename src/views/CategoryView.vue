<template>
  <div :class="[bgColor, 'w-full p-4 h-full min-h-screen']">
    <router-link to="/" class="px-6 py-2 bg-indigo-500 text-white rounded hover:drop-shadow-md">Back to Home Page</router-link>
    <div class="w-full flex mt-5">
      <div :class="[defaultClassColumn, 'px-6 mb-5 border-r-2 border-gray-400 md:h-full md:min-h-screen']">
        <p class="text-center">Backlog</p>
        <TodoCard v-for="todo in backlogList" :key="todo.id" :todo="todo"></TodoCard>
      </div>
      <div :class="[defaultClassColumn, 'px-6 mb-5 border-r-2 border-gray-400']">
        <p class="text-center">In progress</p>
        <TodoCard v-for="todo in inProgressList" :key="todo.id" :todo="todo"></TodoCard>
      </div>
      <div :class="[defaultClassColumn, 'px-6 mb-5']">
        <p class="text-center">Done</p>
        <TodoCard v-for="todo in doneList" :key="todo.id" :todo="todo"></TodoCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Category, Todo } from '@/store/StateInterface';
import { setup, Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex'
import TodoCard from '@/components/TodoCard.vue'

@Options({
  components: {
    TodoCard
  },
})
export default class CategoryView extends Vue {

  state = setup(() => {
    return useStore();
  })

  mounted(): void {
    this.state.dispatch('getCategoryByPath', this.$route.params.categoryPath)
    this.state.dispatch('getTodoListByCategoryPath', this.category?.id)
  }

  get defaultClassColumn():string {
    return 'grow shrink md:basis-3/6 lg:basis-2/6 w-full md:w-3/6 lg:w-2/6'
  }

  get bgColor():string {
    return this.category && this.category.color ? `bg-${this.category.color}-100` : ''
  }

  get category():Category|null {
    return this.state.getters.getCategory;
  }

  get backlogList():Todo[] {
    return this.state.getters.getCategory;
  }
  get inProgressList():Todo[] {
    return this.state.getters.getInProgressTodoList;
  }
  get doneList():Todo[] {
    return this.state.getters.getDoneTodoList;
  }
}
</script>
