<template>
    <div id="home" class="hero-gradient-dark gradien-primary">
        <div class="transparent-angle angle-top-right"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mr-auto ml-auto pb50">
                    <h3 class="mb20 text-white">Welcome to the Puppy Lounge Site</h3>
                    <p class=" mb30 lead text-white-gray">
                        The puppy lounge is an open format room where you could listen to whatever you feel like
                        listening to.
                    </p>
                    <p>
                        <editable doc-key="/components/HeroSection/Fields/Header"></editable>
                    </p>
                    <!-- DYNAMIC CONTENT USING THE EDITABLE WRAPPER -->
                    <h1><editable doc-key="/components/HeroSection/Fields/Header"></editable></h1>
                    <!-- *********************** -->
                    <div>
                        <a data-scroll href="https://app.jqbx.fm/room/puppy" target="_blank"
                           class="btn btn-primary mr-3 my-3">Join
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
    import Editable from '@/components/Editable.vue';

    export default {
        name: 'hero-section',
        components: {
            Editable
        },
        props: {},
        data() {
            return {};
        },
        methods: {},
    };
</script>

<style lang="scss">
    @media(max-width: 991px) {
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
                    font-family: 'Linearicons';
                    content: "\e92b";
                    position: absolute;
                    right: 0;
                    font-size: 2em;
                    top: 3px;
                    transition: all .3s;
                    -webkit-transition: all .3s;
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
            display: table;
            margin: 0 auto;
            display: block;
        }
    }
</style>
