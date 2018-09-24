<template>
  <section>
    <main-page-header />

    <main-page-content />
  </section>
</template>

<script>
  import MainPageHeader from '~/components/MainPageHeader';
  import MainPageContent from '~/components/MainPageContent';

  export default {
    name: 'default',

    components: {
      MainPageHeader,
      MainPageContent,
    },
  };
</script>
