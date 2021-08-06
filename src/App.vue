<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand"
          >InMoment Software, Inc.</router-link
        >
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/contacts" class="nav-link">Contacts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add Contact</router-link>
          </li>
        </div>
      </div>
    </nav>

    <div class="container mt-3">
      <h2>Vue Firebase Realtime Contact Application(CRUD)</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
.container h2 {
  text-align: center;
  margin: 25px auto;
}
</style>
