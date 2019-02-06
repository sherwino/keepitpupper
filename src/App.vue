<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-transparent-light navbar-sticky">
      <div class="container">
        <a class="navbar-brand" href="#home" id="mainHead" contenteditable="false">Puppy Lounge</a>
        <!--We can add logo here in between a tag-->

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#landingkit-navbar"
                aria-controls="landingkit-navbar" aria-expanded="false" aria-label="Toggle navigation">
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
              <a class="nav-link" data-scroll href="https://www.last.fm/user/puppylounge" target="_blank">last.fm</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hero-section></hero-section>
    <about-section></about-section>
    <events-section></events-section>
    <rules-section></rules-section>
  </div>
</template>

<script>
import HeroSection from '@/sections/HeroSection.vue';
import AboutSection from '@/sections/AboutSection.vue';
import EventsSection from '@/sections/EventsSection.vue';
import RulesSection from '@/sections/RulesSection.vue';

export default {
  name: 'app',
  components: {
    HeroSection,
    AboutSection,
    EventsSection,
    RulesSection
  },
};
</script>

<style>

</style>
