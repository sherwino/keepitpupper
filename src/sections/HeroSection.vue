<template>
  <div id="home" class="hero-gradient-dark gradien-primary">
    <div class="transparent-angle angle-top-right"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mr-auto ml-auto pb50">
          <h3 class="mb20 text-white">Welcome to the Puppy Lounge Site</h3>
          <p
            class="mb30 lead text-white-gray"
          >The puppy lounge is an open format room where you could listen to whatever you feel like listening to.</p>
          <div>
            <a
              data-scroll
              href="https://app.jqbx.fm/room/puppy"
              target="_blank"
              class="btn btn-primary mr-3 my-3"
            >
              Join
              Us
            </a>
          </div>
        </div>

        <div class="col-lg-6 mr-auto ml-auto">
          <div class="carousel-outer">
            <div class="owl-carousel owl-theme carousel-browser">
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/U2GSGrh.jpg"
                  alt="Artist: Mac Miller"
                />
              </div>
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/YMsqt4T.jpg"
                  alt="Artist: Drake"
                />
              </div>
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/lDt1MdK.jpg"
                  alt="Artist: Kendrick Lamar"
                />
              </div>
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/Cc7Llnp.jpg"
                  alt="Artist: Kanye West"
                />
              </div>
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/ftApk3x.jpg"
                  alt="Artist: Frank Ocean"
                />
              </div>
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/z1HpQIE.jpg"
                  alt="Artist: BROCKHAMPTON"
                />
              </div>
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/NXWgFXc.jpg"
                  alt="Artist: J. Cole"
                />
              </div>
              <div class="item">
                <img class="feature-image" src="https://i.imgur.com/10olGfj.jpg" alt="Artist: Saba" />
              </div>
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/D9qzxRP.jpg"
                  alt="Artist: Anderson .Paak"
                />
              </div>
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/0jRlViy.jpg"
                  alt="Artist: The Weeknd"
                />
              </div>
              <div class="item">
                <img
                  class="feature-image"
                  src="https://i.imgur.com/1szY3gX.jpg"
                  alt="Artist: The Internet"
                />
              </div>
              <div class="item">
                <img src="https://i.imgur.com/8WHqslq.jpg" alt="Artist: Childish Gambino" />
              </div>
              <div class="item">
                <img src="https://i.imgur.com/Mc14P6L.jpg" alt="Artist: Atmosphere" />
              </div>
              <div class="item">
                <img src="https://i.imgur.com/SLVd0tv.jpg" alt="Artist: Toro Y Moi" />
              </div>
              <div class="item">
                <img src="https://i.imgur.com/uXw74Tr.jpg" alt="Artist: People Under The Stairs" />
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
  name: "hero-section",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@media (max-width: 991px) {
  .hero-gradient-dark {
    padding-bottom: 0rem;
    padding-top: 4rem;
  }
  .navbar-toggler {
    position: absolute;
    right: 15px;
    background-image: none;
    border: 0px;
    padding: 0px;
    top: 0;
    .navbar-toggler-icon {
      background-image: none;
      &:after {
        font-family: "Linearicons";
        content: "\e92b";
        position: absolute;
        right: 0;
        font-size: 2em;
        top: 3px;
        transition: all 0.3s;
        -webkit-transition: all 0.3s;
        color: #000;
        cursor: pointer;
      }
    }
  }
  .navbar .navbar-nav .nav-link {
    border-top: 0px;
  }
  .navbar.navbar-expand-lg {
    .nav-link.btn {
      display: none;
    }
    .navbar-collapse.show {
      height: 250px;
      overflow-y: scroll;
    }
  }
  .dropdown-menu {
    box-shadow: none;
  }
  .feature-img-section {
    text-align: center;
  }
  .feature-list li {
    padding-left: 21px;
    margin-left: 20px;
    display: inline-block;
  }
  .feature-img {
    position: static;
    margin-bottom: 30px;
    width: 100%;
    height: 100%;
    display: table;
    margin: 0 auto;
    display: block;
  }
}
</style>
