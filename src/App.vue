<script setup>
import HomePage from "./components/HomePage.vue"

</script>

<template>
  <Navbar></Navbar>
  <HomePage/>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  components: {
    Navbar,
  }
}

</script>

<style>

</style>
