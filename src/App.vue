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

<style lang="scss">

	*, p {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background: linear-gradient(to bottom, #ffffff, #5180af);
	}


	.editing {
		-webkit-transition: all 0.30s ease-in-out;
		-moz-transition: all 0.30s ease-in-out;
		-ms-transition: all 0.30s ease-in-out;
		-o-transition: all 0.30s ease-in-out;
		outline: none;
		padding: 16px 0px 16px 16px;
		margin: 20px 4px 12px 0px;
		border: 2px solid #44b5f7;
		color: #FFF;
		background: #010;
	}

	.header {
		width: 100%;
		text-align: center;
		z-index: 1;
		position: relative;
		color: #000;
		text-shadow: #aaa 0.2rem 0.3rem 2px;
		font-family: Verdana, sans-serif;
		font-size: 2vw;
	}

	.subtitle-link {
		text-decoration: none;
		text-shadow: none;
		color: #bbb;
	}

	.main-flex {
		display: flex;
		flex-direction: column;
	}

	.the-lounge {
		height: 1fr;
		padding: 0;
		color: #000;
		position: relative;

		> p {
			background: linear-gradient(to bottom, #5180af23, #0000002f);
			height: 20vw;
			width: 1fr;
			padding: 0.5rem 0.8rem 2rem 0.8rem;
			margin: -0.5rem 0 0 0;
		}
	}

	.overlay {
		margin: 0 0 0 35%;
		width: 1fr;

		> img {
			width: 60%;
		}
	}

	.the-music {
		padding: 2rem 0.8rem;
		background: linear-gradient(to bottom, #0000002f, #00000099);
		height: 1fr;
		width: 1fr;
		color: #010;
		position: relative;
		z-index: 3;
	}

	.the-rules {
		padding: 2rem 0.8rem;
		background: linear-gradient(to bottom, #00000099, #000000cc);
		background: #00000099;
		height: 1fr;
		width: 1fr;
		color: #aaa;
		position: relative;
		z-index: 4;
	}

	.the-events {
		padding: 2rem 0.8rem;
		background: linear-gradient(to bottom, #0000009a, #000000a2);
		height: 1fr;
		width: 1fr;
		color: #ccc;
		position: relative;
		z-index: 5;
	}


</style>
