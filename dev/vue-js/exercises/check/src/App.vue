<template>
  <CheckButton />
</template>

<script>
import CheckButton from './CheckButton/CheckButton.vue';

export default {
  components: {
    CheckButton: CheckButton,
  },
  name: 'App',
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
