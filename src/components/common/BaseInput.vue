<template>
  <div class="relative w-full">
    <input 
        v-model="inputValue"
        @input="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        :class="inputClass"
        :id="id"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :checked="isChecked" />
    <label v-if="label" :class="labelClass" :for="id">{{ label }}</label>
    <span v-if="errorMessage" class="">{{errorMessage}}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

interface InputFileEvent extends Event {
    target: HTMLInputElement;
}

@Options({
  props: {
    value: {
      type: [String,Boolean],
      default: '',
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    errorMessage: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'on'
    },
  },
  watch: {
    value(newValue: string|boolean) {
      this.inputValue = newValue;
    }
  }
})
export default class BaseInput extends Vue {
  type: string;
  label: string;
  value: string|boolean;
  errorMessage?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled: boolean;
  autocomplete: string;

  inputValue: string|boolean = '';
  isFocus: boolean = false;

  mounted() {
    this.inputValue = this.value || '';
  }

  get isCheckbox():boolean {
    return this.type === 'checkbox';
  }

  get isChecked():boolean {
    return this.isCheckbox && Boolean(this.value);
  }

  get labelClass():object {
    return {
      'absolute left-0 transition-all': true,
      'text-base top-3': !this.isFocus && !this.inputValue,
      'text-xs -top-2': !this.isCheckbox && (this.isFocus || this.inputValue),
    };
  }

  get inputClass():object {
    return {
      'px-1 py-3 focus:outline-none border-b  bg-transparent z-10 relative w-full': true,
      'border-white': !this.isFocus,
      'focus:outline-none transition-all border-slate-800': !this.isCheckbox && this.isFocus,
    };
  }

  handleChange():void {
    this.$emit('updateInput', this.inputValue);
  }
  handleFocus():void {
    this.isFocus = true;
  }
  handleBlur():void {
    if(!this.value) {
      this.isFocus = false;
    }
  }
}
</script>

