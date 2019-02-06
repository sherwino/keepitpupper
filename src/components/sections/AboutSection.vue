<template>
  <div id="about" class="bg-primary-dark feature-img-section pt90 pb90">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class='text-white text-center'>About Us</h2>
          <p class="text-white-gray row align-items-center" id="musicHead" contenteditable="false">
            Here in the puppy lounge, we like to consider ourselves as an open format room you could listen to
            whatever you feel
            like listening to. Although we tend to lean towards a few genres, so it is likely that when you
            come into the room you
            would hear us playing the following
          </p>

          <!--Added musicHead from previous Version-->
          <ul class="list-inline text-center feature-list text-white-gray" id="musicHead" contenteditable="false">
            <b>
              <!--Added musicBody from previous Version-->
              <li id="musicBody" contenteditable="false">Rap</li>
              <li id="musicBody" contenteditable="false">Hip-Hop</li>
              <li id="musicBody" contenteditable="false">R&B</li>
              <li id="musicBody" contenteditable="false">Deep House</li>
              <li id="musicBody" contenteditable="false">Nu-Disco</li>
              <li id="musicBody" contenteditable="false">Trap</li>
              <li id="musicBody" contenteditable="false">Funk</li>
              <li id="musicBody" contenteditable="false">Dubstep</li>
              <li id="musicBody" contenteditable="false">Indie</li>
              <li id="musicBody" contenteditable="false">Latin</li>
              <li id="musicBody" contenteditable="false">Americana</li>
              <li id="musicBody" contenteditable="false">well who knows what else, just feel the room out.</li>
            </b>
          </ul>

          <p class="text-center">The only genre we stay away from is country music.
            We also like to welcome bluegrass and folk music around these parts.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-section',
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
