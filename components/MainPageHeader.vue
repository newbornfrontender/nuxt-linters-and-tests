<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">Главная</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/counter">Счетчик</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'MainPageHeader',
  };
</script>
