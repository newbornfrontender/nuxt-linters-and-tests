<template>
  <section>
    <h1 v-if="checkStatusCode(404)">{{ title }}</h1>
    <h1 v-else>Ошибка в коде</h1>

    <nuxt-link to="/">Перейти на главную страницу</nuxt-link>
  </section>
</template>

<script>
  export default {
    name: 'error',

    props: {
      error: {
        type: Object,
        default: () => {},
      },
    },

    data: () => ({
      title: 'Страница не найдена',
    }),

    methods: {
      checkStatusCode (num) {
        return this.error.statusCode === num;
      },
    },

    head () { return {
      title: this.title,
      meta: [{
        hid: 'error-description',
        name: 'description',
        content: 'Описание страницы с ошибкой',
      }],
    }},
  };
</script>