<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white navbar-transparent-light navbar-sticky"
    >
      <div class="container">
        <a class="navbar-brand" href="#home" id="mainHead" contenteditable="false">Puppy Lounge</a>
        <!--We can add logo here in between a tag-->

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#landingkit-navbar"
          aria-controls="landingkit-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="landingkit-navbar">
          <!--target="_blank" add when done-->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link active" data-scroll href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" data-scroll href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-scroll href="#roomRules">Room Rules</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-scroll href="https://jqbx.fm/" target="_blank">jqbx.fm</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-scroll
                href="https://www.last.fm/user/puppylounge"
                target="_blank"
              >last.fm</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hero-section></hero-section>
    <about-section></about-section>
    <events-section></events-section>
    <rules-section></rules-section>

    <footer class="footer">
      <div class="text-center copyright">
        <span>
          &copy; Copyright 2018-2019. Designed and Built by
          <a href="#">Fellow Puppers!</a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import HeroSection from "@/sections/HeroSection.vue";
import AboutSection from "@/sections/AboutSection.vue";
import EventsSection from "@/sections/EventsSection.vue";
import RulesSection from "@/sections/RulesSection.vue";

export default {
  name: "app",
  components: {
    HeroSection,
    AboutSection,
    EventsSection,
    RulesSection
  }
};
</script>

<style lang="scss">
*,
p {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(to bottom, #ffffff, #5180af);
}

.editing {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  padding: 16px 0px 16px 16px;
  margin: 20px 4px 12px 0px;
  border: 2px solid #44b5f7;
  color: #fff;
  background: #010;
}
</style>
