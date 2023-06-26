<template>
  <!--    top blur-->
    <div class="gradient-blur" style="transform: rotate(180deg); top: 0; left: 0; right: 0">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  <!--    navbar-->
    <nav class="position-absolute container-xxl position-fixed fixed-top py-5 d-flex justify-content-lg-between justify-content-center px-sm-5 px-4"
         data-aos="fade-down">
        <img src="/logo.svg" class="d-none d-lg-block"
             style="filter: grayscale(100%)" height="45">
        <div class="hstack gap-5 fs-5">
            <NuxtLink class="fw-medium text-decoration-none text-body" href="/">Home</NuxtLink>
            <NuxtLink class="fw-medium text-decoration-none text-body" href="/#about">About</NuxtLink>
            <NuxtLink class="fw-medium text-decoration-none text-body" href="/#contact">Contact</NuxtLink>
        </div>
        <div class="hstack gap-5 fs-5 d-none d-lg-flex">
            <a class="btn btn-dark px-4 py-3 get-big-small" href="mailto:mail@benherbst.net">mail@benherbst.net</a>
        </div>
    </nav>
    <div data-scroll-container class="container-xxl">
        <!-- main hero-->
        <div class="d-flex justify-content-center align-items-center flex-column vh-100"
             data-aos="zoom-in-up">
            <h1 class="text-center text-nowrap bigText">BEN HERBST</h1>
            <p class="fs-3 d-inline text-center">14 years old web and game developer</p>
        </div>
        <div
                class="d-flex justify-content-center align-items-center flex-column fs-5 text-center vh-100" id="about"
                data-aos="zoom-in-up">
            <h2 class="mb-4 h1">About me</h2>
            <div style="max-width: 30em;">
                <p>Hey 😄, I am Ben.</p>
                <p>I started programming when I was around 10 years old, starting with Java and JavaFx.
                    I later learned
                    more languages and frameworks like Python, Vue.js or Godot.
                <p>
                </p> Nowadays I mainly do web development and
                game development, using Godot and Nuxt 3.</p>
                <p>I am currently 14 years old and I live in Germany. I currently build a dev and medium alternative
                    🔥🔥🔥</p>
                <p>Feel free to contact me, scroll down to see my projects!</p>
            </div>
        </div>
        <div class="vstack" style="gap: 15rem;">
            <div class="d-flex justify-content-center align-items-center flex-column gap-5 fs-5" data-aos="fade-up"
            >
                <h2 class="h1">DevsForDevs.com</h2>
                <div class="projectImageWrapper">
                    <img class="img-fluid rounded-4 projectImage" src="/devsfordevs.webp" data-aos="zoom-in-up">
                </div>
                <p class="m-0 p-0">Dev.to and Medium killer</p>
                <div class="d-flex justify-content-center rounded-pill">
                    <a href="https://devsfordevs.com" class="btn btn-dark px-5 py-3 get-big-small">Go to the site ( WIP
                        )</a>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column gap-5 fs-5" data-aos="fade-up"
            >
                <h2 class="h1">Gymnasium Baesweiler</h2>
                <div class="projectImageWrapper">
                    <img class="img-fluid rounded-4 projectImage" src="/g-bw.webp" data-aos="zoom-in-up">
                </div>
                <p class="m-0 p-0">School Blog Page</p>
                <div class="d-flex justify-content-center rounded-pill">
                    <a href="https://blog.g-bw.de" class="btn btn-dark px-5 py-3 get-big-small">Go to the site</a>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column gap-5 fs-5" data-aos="fade-up"
            >
                <h2 class="h1">Dalaix</h2>
                <div class="projectImageWrapper">
                    <img class="img-fluid rounded-4 projectImage"
                         src="https://raw.githubusercontent.com/BenHerbst/Dalaix/main/docs/Screenshots/form.png"
                         data-aos="zoom-in-up">
                </div>
                <p class="m-0 p-0">ChatGPT locally on your PC</p>
                <div class="d-flex justify-content-center rounded-pill">
                    <a href="https://github.com/BenHerbst/Dalaix"
                       class="btn btn-dark px-5 py-3 get-big-small">GitHub</a>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column gap-5 fs-5" data-aos="fade-up"
            >
                <h2 class="h1">Livit</h2>
                <div class="projectImageWrapper">
                    <img class="img-fluid rounded-4 projectImage"
                         src="/livit.webp"
                         data-aos="zoom-in-up">
                </div>
                <p class="m-0 p-0">Big game written in Godot</p>
                <div class="d-flex justify-content-center rounded-pill">
                    <button class="btn btn-dark px-5 py-3">Not released</button>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column gap-5 fs-5" data-aos="fade-up"
            >
                <h2 class="h1">Idaesbasic</h2>
                <div class="projectImageWrapper">
                    <img class="img-fluid rounded-4 projectImage"
                         src="https://user-images.githubusercontent.com/83538916/141648768-c7746c7a-ff53-4aee-9e7c-ccb2e5abb0fa.png"
                         data-aos="zoom-in-up">
                </div>
                <p class="m-0 p-0">Project management software build with JavaFx</p>
                <div class="d-flex justify-content-center rounded-pill gap-4">
                    <a href="https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Idaesbasic.shtml"
                       class="btn btn-dark px-5 py-3 get-big-small">Softpedia</a>
                    <a href="https://github.com/BenHerbst/idaesbasic" class="btn btn-dark px-5 py-3 get-big-small">GitHub</a>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column gap-5 fs-5" data-aos="fade-up"
            >
                <h2 class="h1">ChatBot</h2>
                <div class="projectImageWrapper">
                    <img class="img-fluid rounded-4 projectImage"
                         src="/chatbot.webp"
                         data-aos="zoom-in-up">
                </div>
                <p class="m-0 p-0">Assistant like Cortana or Siri</p>
                <div class="d-flex justify-content-center rounded-pill">
                    <button class="btn btn-dark px-5 py-3">Not released</button>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column gap-5 fs-5" data-aos="fade-up"
            >
                <h2 class="h1">ORPGG</h2>
                <div class="projectImageWrapper">
                    <img class="img-fluid rounded-4 projectImage"
                         src="/orpgg.webp"
                         data-aos="zoom-in-up">
                </div>
                <p class="m-0 p-0">Pokemon like game written in Godot</p>
                <div class="d-flex justify-content-center rounded-pill">
                    <button class="btn btn-dark px-5 py-3">Not released</button>
                </div>
            </div>
        </div>
        <div class="vh-100 d-flex justify-content-center align-items-center flex-column gap-5 fs-5" id="contact"
             data-aos="fade-up">
            <h3 class="h1">Get in touch 👋</h3>
            <div class="d-flex flex-wrap gap-3 justify-content-center" data-aos="fade-right">
                <a class="btn btn-dark get-big-small" href="mailto:benherbst.net">Email: mail@benherbst.net</a>
                <a class="btn btn-dark get-big-small" href="https://github.com/BenHerbst">GitHub: @benherbst</a>
                <a class="btn btn-dark get-big-small" href="https://discord.com/users/925765028756463627">Discord:
                    @benherbst</a>
                <a class="btn btn-dark get-big-small" href="https://www.reddit.com/user/IAmOpensourced">Reddit:
                    u/IAmOpenSourced</a>
                <a class="btn btn-dark get-big-small" href="https://github.com/benherbst">Dev.to: @benherbst</a>
            </div>
        </div>
        <div class="vh-100 d-flex justify-content-center flex-column gap-5 fs-5" id="contact"
             data-aos="fade-up">
            <h1>Imprint</h1>
            <h2 class="h3">
                Angaben gemäß § 5 TMG
            </h2>
            <p>
                Ben Herbst<br>
                Ursulinerstraße 11<br>
                52062 Aachen<br>
            </p>

            <p>
                Kontakt<br>
                E-Mail: mail@benherbst.net
            </p>

            <p>
                Redaktionell verantwortlich<br>
                Ben Herbst
            </p>

            <p>
                Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
            </p>
        </div>
    </div>
  <!-- bottom blur-->
    <div class="gradient-blur d-none d-lg-block" style="bottom: 0; left: 0; right: 0">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
import AOS from "aos";

if (process.client) {
    AOS.init();
    // const LocomotiveScrollPromise = () => import('locomotive-scroll');
    // const LocomotiveScroll = await LocomotiveScrollPromise();
    // const scroll = new LocomotiveScroll.default({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // });
}
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap";

.projectImage {
  min-height: 15rem;
  object-fit: cover;
}

.projectImageWrapper {
  max-width: 60rem !important;
}

.bigTop {
  margin-top: 15em;
}

.vh-100 {
  min-height: 100vh;
}

.bigText {
  font-weight: 800;
  font-size: 3.5em;
  @include media-breakpoint-up(sm) {
    font-size: 6em;
  }
  @include media-breakpoint-up(md) {
    font-size: 8em;
  }
  @include media-breakpoint-up(lg) {
    font-size: 10em;
  }
}

nav {
  z-index: 1000;
  /*backdrop-filter: blur(50px);*/
}

.get-big-small {
  transition: all 0.1s ease-in-out;

  &:active {
    transform: scale(0.8);
  }
}

.gradient-blur {
  position: fixed;
  z-index: 5;
  height: 15em;
  pointer-events: none;
}

.gradient-blur > div,
.gradient-blur::before,
.gradient-blur::after {
  position: absolute;
  inset: 0;
}

.gradient-blur::before {
  content: "";
  z-index: 1;
  mask: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0) 0%,
                  rgba(0, 0, 0, 1) 12.5%,
                  rgba(0, 0, 0, 1) 25%,
                  rgba(0, 0, 0, 0) 37.5%
  );
}

.gradient-blur > div:nth-of-type(3) {
  z-index: 4;
  backdrop-filter: blur(4px);
  mask: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0) 37.5%,
                  rgba(0, 0, 0, 1) 50%,
                  rgba(0, 0, 0, 1) 62.5%,
                  rgba(0, 0, 0, 0) 75%
  );
}

.gradient-blur > div:nth-of-type(4) {
  z-index: 5;
  backdrop-filter: blur(8px);
  mask: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0) 50%,
                  rgba(0, 0, 0, 1) 62.5%,
                  rgba(0, 0, 0, 1) 75%,
                  rgba(0, 0, 0, 0) 87.5%
  );
}

.gradient-blur > div:nth-of-type(5) {
  z-index: 6;
  backdrop-filter: blur(16px);
  mask: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0) 62.5%,
                  rgba(0, 0, 0, 1) 75%,
                  rgba(0, 0, 0, 1) 87.5%,
                  rgba(0, 0, 0, 0) 100%
  );
}

.gradient-blur > div:nth-of-type(6) {
  z-index: 7;
  backdrop-filter: blur(32px);
  mask: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0) 75%,
                  rgba(0, 0, 0, 1) 87.5%,
                  rgba(0, 0, 0, 1) 100%
  );
}

.gradient-blur::after {
  content: "";
  z-index: 8;
  backdrop-filter: blur(64px);
  mask: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0) 87.5%,
                  rgba(0, 0, 0, 1) 100%
  );
}
</style>