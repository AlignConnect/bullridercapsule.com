/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {

        NEXT_APP_API_URL: 'https://api.brahmikalp.com/api/',


        // SHOPIFY APIS TOKEN AND URL

        SHOPIFY_URL: "https://arayurveda.shop",

        NEXT_APP_API_URL_SHOPIFY: "https://shopifyapi.plantifygarden.in",


        SHOPIFY_GENERATE_TOKEN:
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9waWZ5YWNjZXNzdG9rZW4iOiJzaHBhdF8wMDg2MGQ3ZDg5YjlhM2NhOTExMmI3MGQ3MGJmNWZmZiIsInNob3BpZnl1cmwiOiJodHRwczovLzZlMTJmNy04ZS5teXNob3BpZnkuY29tIiwiaWF0IjoxNzI1NTI5Mjc3fQ.F098pecX4aU-4jqgrszxR5gU7ac2eCAbxVoBX_xZCB_6qW5G0tHGhOgJPLzYu8J757DJtFEsA6iP90XJ4zMHnSAAJ8Uww2PUqBs3TgruHLHQNORkw78aEjAHN9EEDPg5A9tQlJXcyv7N7ws0u1A5rgNyeJZ8jmi_3t4raPVQi_GjkXW1UVu9WFpc131OWMr0N75fU4yFo5OH6N_vWHzO657tDFzo18lLiLa82_4ZUBaIEWk6JO4KhniIbSaNeTM1XJoYHz6CEyAV9gxnTHKqw2SBHsyTWwgK-gTqDQ895pVWaJQ55E0zJfAI5yeI3WPG0gOijHi1exUFEpSHwA_Sow",



        //main env

        NEXT_APP_URL: 'https://bullridercapsule.com',
        NEXT_APP_API_KEY: 'CrxjgBqWrYMJuGvQPlfHfWZftdAVjbchWnXOdqXFwkjelpognR',


        //brj env

        NEXT_APP_URL_BRJ: "https://bullridercapsule.com/brj",
        NEXT_APP_API_KEY_BRJ: "IIbwlWDpYKnMbJIdDMonAcuUjTAAewQKKUOgmAMWgOxJFUcTXW",

        // brk env

        NEXT_APP_URL_BRK: 'https://bullridercapsule.com/brk',
        NEXT_APP_API_KEY_BRK: 'bKczmwFlFFlhcXsQROzzuZGIJGdenObQrgZWlbnjfPGBFAtUEp',

        //brb env

        NEXT_APP_URL_BRB: "https://bullridercapsule.com/brb",
        NEXT_APP_API_KEY_BRB: "QgrBfzCeHVRBPcsAYEUJAoqsUislwWcsDEFPdvfWUYTYnVErlS",


        // NEXT_APP_URL_BRC

        // brc env

        NEXT_APP_URL_BRC: "https://bullridercapsule.com/brc",
        NEXT_APP_API_KEY_BRC: "LRBBCwLwOdRcjQHjpFvjiffmaWpeYrHjwcuKfrveyOFqnihHiL",


        //brh env

        NEXT_APP_URL_BRH: 'https://bullridercapsule.com/brh',
        NEXT_APP_API_KEY_BRH: 'uOnBhBVCmQroBYbPGDRAMAOPcffAXEJiEYbMrngxFBYDGpBclG',

        NEXT_APP_URL_BRG: "https://bullridercapsule.com/brg",
        NEXT_APP_API_KEY_BRG: "yTfvIXMRkGRYXdivCatHpISsoMDPmAfTNReKTKeVHjuKcCZDqJ",

        //mg 

        NEXT_APP_URL_MG: "https://bullridercapsule.com/mg",
        NEXT_APP_API_KEY_MG: "LzqfqsstYGZvoCWBERMhmGWVwuoWsuheLiavqqxBLcNZetYgnW",

        NEXT_APP_URL_BRGWHIZ: "https://bullridercapsule.com/brgwhiz",
        NEXT_APP_API_KEY_BRGWHIZ: "bzcbBCfyIdNaoEZInqIdHfbxYgBZJFfDSBDniQOpbWlYMToRum",

        NEXT_APP_URL_BRCEXA: "https://bullridercapsule.com/brcexa",
        NEXT_APP_API_KEY_BRCEXA: "LzrHslGWOexrIEHxVfgERIkqGTzUbNgmcTlQFZHZxuTcaqGCFW",

        NEXT_APP_URL_BHF: 'https://bullridercapsule.com/bhf',
        NEXT_APP_API_KEY_BHF: 'BmPeyYnCtYhbbvXotTrBoRozrizPVZsdzaUrGgEHNVALiAbLXA',

        NEXT_APP_URL_BRCFLIP: 'https://bullridercapsule.com/brcflip',
        NEXT_APP_API_KEY_BRCFLIP: 'zUTXWkykjtcBFzophiIyAIDrBUjCjBWFETtqJFSxFhiJOYmrKJ',


        NEXT_APP_URL_BRKNOTS: "https://bullridercapsule.com/brknots",
        NEXT_APP_API_KEY_BRKNOTS: "WtSFFJeHdGDIoknBFBfhwSfEyFqvZmajorJfFGykSLxabNLiAN",

        NEXT_APP_URL_BRRISING: "https://bullridercapsule.com/brrising",
        NEXT_APP_API_KEY_BRRISING: "rZSYZBAPfiHFqzybxqiPteCzFUEHvXHLxjNrHnGdyHTpPZRvUw",

        NEXT_APP_URL_BRPILLOW: "https://bullridercapsule.com/brpillow",
        NEXT_APP_API_KEY_BRPILLOW: "tTyxwjrSeeQsXbTbLACRNZsIwiCDWtYyEqBxuGBvtrNlDrDnoq",

        NEXT_APP_URL_BRMATTING: "https://bullridercapsule.com/brmatting",
        NEXT_APP_API_KEY_BRMATTING: "eoKDtldPdEDFaZiboGiBaKIBzhvdsSbIwUCKAgAaKZQzGtJCmO",


        NEXT_APP_URL_MGB: 'https://bullridercapsule.com/mgb',
        NEXT_APP_API_KEY_MGB: 'aMzsoGBJbUnRRQKfEQNgPprGUQqOkkpZimiXawgQcpiOSfQUOc',

        // Shredha Blog
        NEXT_APP_URL_FBR: 'https://bullridercapsule.com/fbr',
        NEXT_APP_API_KEY_FBR: 'SColQRtmpuzNcRAPdgLhZRbRZpKOuUDvPXBFcTNEWlBcRtZYvg'

    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,




    output: "export",

}

module.exports = nextConfig
