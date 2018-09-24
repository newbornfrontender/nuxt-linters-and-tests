<template>
  <section>
    <h1>{{ title }}</h1>

    <div>
      <p>Счетчик: {{ counter }}</p>

      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </div>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'counter',

    data: () => ({
      title: 'Счетчик',
    }),

    computed: mapState({
      counter: state => state.counter.counter,
    }),

    methods: mapMutations({
      increment: 'counter/increment',
      decrement: 'counter/decrement',
    }),

    head () { return {
      title: this.title,
      meta: [{
        hid: 'counter-description',
        name: 'description',
        content: 'Описание страницы счетчика',
      }],
    }},
  };
</script>
