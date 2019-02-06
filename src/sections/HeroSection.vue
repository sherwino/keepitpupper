<template>
  <div id="home" class="hero-gradient-dark gradien-primary">
    <div class="transparent-angle angle-top-right"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mr-auto ml-auto pb50">
          <h3 class="mb20 text-white">Welcome to the Puppy Lounge Site</h3>
          <p class=" mb30 lead text-white-gray">
            The puppy lounge is an open format room where you could listen to whatever you feel like listening to.
          </p>
          <div>
            <a data-scroll href="https://app.jqbx.fm/room/puppy" target="_blank" class="btn btn-primary mr-3 my-3">Join
              Us</a>
          </div>
        </div>

        <div class="col-lg-6 mr-auto ml-auto">
          <div class="carousel-outer">
            <div class="owl-carousel owl-theme carousel-browser">
              <div class="item">
                <img src="https://i.imgur.com/gNuIcJL.png" alt="Artist: Frank Ocean">
              </div>
              <div class="item">
                <img src="https://i.imgur.com/10olGfj.jpg" alt="Artist: Saba">
              </div>
              <div class="item">
                <img src="https://i.imgur.com/4NiUyR2.jpg" alt="Artist: Mac Miller">
              </div>
            </div>
          </div>
        </div>
        <!--End of the Artist slider @top of page-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero-section',
  props: {

  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style lang="scss">

</style>
