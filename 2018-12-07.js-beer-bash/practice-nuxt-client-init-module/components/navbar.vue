<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
  
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start"></div>
      <div class="navbar-end">
      
        <nuxt-link class="navbar-item is-size-6" to="/one">One</nuxt-link>
        <nuxt-link class="navbar-item is-size-6" to="/two">Two</nuxt-link>
        <nuxt-link class="navbar-item is-size-6" to="/three">Three</nuxt-link>
  
      </div>
    </div>
  </nav>
</template>
