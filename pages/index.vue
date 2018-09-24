<template>
  <section>
    <h1>{{ title }}</h1>

    <div>
      <p>{{ counter }}</p>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'index',

    data: () => ({
      title: 'Главная',
    }),

    computed: mapState({
      counter: state => state.counter.counter,
    }),

    head () { return {
      title: this.title,
      meta: [{
        hid: 'index-description',
        name: 'description',
        content: 'Описание главной страницы',
      }],
    }},
  };
</script>
