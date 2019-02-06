<template>
  <div>

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
