// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/styles/main.scss'],
    app: {
        htmlAttrs: {
            lang: 'en',
        },
        head: {
            title: 'Ben Herbst - Software Engineer, Game & Web Developer - Portfolio',
            ogTitle: 'Ben Herbst - Software Engineer, Game & Web Developer - Portfolio',
            description: 'Hey, I am Ben Herbst. A german 14 years old game and web developer. Check out my portfolio!',
            ogDescription: 'Hey, I am Ben Herbst. A german 14 years old game and web developer. Check out my portfolio!',
            ogImage: 'https://www.benherbst.net/ogimg.png',
        },
        script: [
            {
                src: "https://www.googletagmanager.com/gtag/js?id=G-8VHHHVK4LB", async: true
            },
            {
                children: `

                    window.dataLayer = window.dataLayer || [];

                    function gtag() {
                    dataLayer.push(arguments);
                }

                gtag('js', new Date());

            gtag('config', 'G-8VHHHVK4LB');
                        `
            }
        ]

    }
})
