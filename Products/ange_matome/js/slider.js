$(function(){
    $(document).ready(function(){
        $('.movies').slick({
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1200,//モニターの横幅が769px以下の見せ方
                    settings: {
                        slidesToShow: 2,//スライドを画面に2枚見せる
                    }
                },
                {
                    breakpoint: 700,//モニターの横幅が426px以下の見せ方
                    settings: {
                        slidesToShow: 1,//スライドを画面に1.5枚見せる
                    }
                }
            ]
        });
    });
});