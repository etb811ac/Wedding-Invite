

export const BANNER_IMAGES = [
    {
        src: require('./assets/main-banner/1.jpg'),
    },
    {
        src: require('./assets/main-banner/2.jpg'),
    },
    {
        src: require('./assets/main-banner/3.jpg'),
    },
]

export const LOCATION = [
    {
        logo: "",
        title: "Ceremonia",
        info: [
            {
                title: "Día",
                body: "Sábado 24 de febrero- 9:30am",
                btnTxt: "Agendar",
                btnUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda - Esteban y Mariam&dates=20240224T100000/20240224T110000&location=Villa Blanca Cloud Forest, Los Angeles, San Ramón"
            },
            {
                title: "Lugar",
                body: "Villa Blanca Cloud Forest, Los Ángeles, San Ramón",
                btnTxt: "Dirección",
                btnUrl: "https://ul.waze.com/ul?preview_venue_id=180551782.1805648892.691451&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
            }
        ]
    },
    {
        logo: "",
        title: "Celebración",
        info: [
            {
                title: "Día",
                body: "Sábado 24 de febrero- 12:00md",
                btnTxt: "Agendar",
                btnUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Celebración - Esteban y Mariam&dates=20240224T120000/20240224T190000&location=Rancho Hermanos Ureña, Barranca, San Ramón"
            },
            {
                title: "Lugar",
                body: "Rancho Hermanos Ureña, Barranca, San Ramón",
                btnTxt: "Dirección",
                btnUrl: "https://ul.waze.com/ul?preview_venue_id=180551781.1805452275.1807470&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
            }
        ]
    }
]

export const GALERY = [
    {
        src: require('./assets/galery/1.jpeg'), width: 1000, height: 667,
    },
    {
        src: require('./assets/galery/2.jpeg'), width: 1000, height: 667,
    },

    {
        src: require('./assets/galery/3.jpeg'), width: 712, height: 1064,
    },
    {
        src: require('./assets/galery/4.jpeg'), width: 667, height: 1000,
    },
    {
        src: require('./assets/galery/7.jpeg'), width: 1000, height: 667,
    },
    {
        src: require('./assets/galery/5.jpeg'), width: 1300, height: 429,
    },
    {
        src: require('./assets/galery/6.jpeg'), width: 1000, height: 667,
    },
    {
        src: require('./assets/galery/17.jpeg'), width: 1400, height: 993,
    },
    {
        src: require('./assets/galery/15.jpeg'), width: 1400, height: 993,
    },
    {
        src: require('./assets/galery/11.jpeg'), width: 1400, height: 993,
    },
    {
        src: require('./assets/galery/20.jpeg'), width: 1400, height: 993,
    },
    {
        src: require('./assets/galery/8.jpeg'), width: 1000, height: 666,
    },
    {
        src: require('./assets/galery/9.jpeg'), width: 800, height: 1200,
    },
    {
        src: require('./assets/galery/10.jpeg'), width: 800, height: 1200,
    },
    {
        src: require('./assets/galery/19.jpeg'), width: 1000, height: 667,
    }



]

export const CARDS = [
    {
        title: "Fiesta",
        icon: "",
        body: "¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?",
        buttonText: "Sugerir canción",
        classes: "flowers-top-left"
    },

    {
        title: "Código de vestimenta",
        icon: "",
        body: "Podés ir como te sintás feliz. Si querés una sugerencia, estos  colores combinan con la temática",
        buttonText: "Ver más",
        classes: "",
        modal: {
            body: [
                { p: "La temática de la boda es vintage, por lo que si querés podés ir con pantalones, tirantes, camisa y corbatín." },
                { p: "Y si lo tuyo son los vestidos o trajes te dejamos algunos colores." }
            ],
            colors: [
                { color: "#CE8769" },
                { color: "#D5AA38" },
                { color: "#E4C57D" },
                { color: "#809164" },
                { color: "#B15F6A" }]
        }
    },

    {
        title: "Tips y notas",
        icon: "",
        body: "Información adicional para tener en cuenta",
        buttonText: "+ info",
        classes: "flowers-bottom-right",
        modal: {
            body: [
                { p: "Como parte de la celebración tendremos un toro mecánico, preparáte para disfrutarlo." },
                { p: "Si tu alimentación es vegetariana o vegana, contanos en la confirmación." },
                { p: "El camino a la Iglesia puede dificultar el acceso de vehículos muy bajos." }
            ]
        }
    }
]