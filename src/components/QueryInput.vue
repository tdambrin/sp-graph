<template>
    <div class='query-input-container'>
        <input class='search-input' 
        v-model='searchValue' @input="$emit('update:modelValue', $event.target.value)"
        type='text' :placeholder='placeholder' autofocus ref='input'>
        <span style="padding-right: 30px; padding-left: 30px;"> with types </span>
        <multiselect 
        id="type-selector" 
        v-model="selectedTypes" 
        :options="allTypes" 
        :multiple="true" 
        :allowEmpty="false"
        :closeOnSelect="false"
        placeholder="Select types"
        group-values="types" group-label="grp" track-by="name" label="name" :group-select="true" :hideSelected="true"
        />
    </div>

  </template>
  
  <script>
  /**
   * A user control that renders input string with read-only prefix/suffix
   */
   import Multiselect from 'vue-multiselect'


  export default {
    props: ['placeholder', 'modelValue'],
    watch: {
      modelValue(newValue) {
        console.log('emitted');
        this.$refs.input.value = newValue;
        return newValue
      }
    },
    data: () => ({
      searchValue: '',
      allTypes: [{
        grp: "All",
        types: [
            {name:'album'},{ name:'artist'}, {name: 'track'}
        ],
      }],
      selectedTypes: [
            {name:'album'},{ name:'artist'}, {name: 'track'}
        ],
    }),
    components: {
      Multiselect,
    },
    computed: {
    },
    methods: {
      focus() {
        this.$refs.input.focus();
      },
    },
    mounted() {}
  }
  </script>
 
 <style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
  <style lang="stylus">
  @import('../vars.styl');
  
  .query-input-container {
    position: relative;
    display: flex;

    span {
      display: inline;
    }
  
    input {
      border: none;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      padding: 0;
      color: highlight-color
      height: 100%;
      font-size: 16px;
      &:focus {
        outline: none;
      }
    }
  }
  
  .multiselect {
    .multiselect__tag {
      display: inline-flex;
      vertical-align: center;
    }

  }

  .search-input{
    width: 300px;
  }
  </style>