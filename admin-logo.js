const vidElem = document.querySelector('#jw-player');
const vidJw = jwplayer('jw-player');
const movieElem = document.querySelector('#movie');
const movieJw = jwplayer('movie');
const logoImage = `https://blogger.googleusercontent.com/img/a/AVvXsEhanLmKsOOhS-wanuq-6Xo7ML68_SDZ3f0VKGGKcJKEJ7DcwOcJtrQtu339omTcPI0nhGnftW9VG7dOCjqFbJYvHOHF-509w58fCg7ZuexajA69bZ4crq4GQTAg5vos5Ku0Ml70F-rXlcgdjzz1vzBmw5Zi_YlOGZO2tP2j-aC_bw_OTqMPwSE9a2nw=s1017`;
const createCustomLogo = () => {
    let logo = {
        file: logoImage,
        hide: false,
        margin: "20",
        position: "top-left",
        link: homePageUrl
    }
    return logo;
}
const loadJwPlayer = () => {
    try {
        if (vidElem) {
            vidJw.setup({
                file: file.src,
                logo: createCustomLogo(),
                image: getBlogPostImage()
            })
        } else if (movieElem) {
            movieJw.setup({
                logo: createCustomLogo(),
                captions: {
                    fontSize: 14,
                    backgroundOpacity: 0,
                    edgeStyle: "raised"
                },
                playlist: [{
                    image: getBlogPostImage(),
                    file: movie.src,
                    captions: [{
                            label: movie.subtitles[0].lang,
                            file: movie.subtitles[0].src,
                            default: true
                        },
                        {
                            label: movie.subtitles[1].lang,
                            file: movie.subtitles[1].src
                        }
                    ]
                }]
            })
        }
    } catch (e) {
        console.log(`Error! ការកំណត់របស់អ្នកមិនត្រឹមត្រូវទេ។`)
    }
};
window.addEventListener('DOMContentLoaded', loadJwPlayer);
