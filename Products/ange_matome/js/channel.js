function getYouTubeData() { 
	return $.ajax({ 
		type: 'GET', 
		dataType: 'json', 
		url: 'https://www.googleapis.com/youtube/v3/search', 
		data: { 
		key: 'AIzaSyBFts6_VnCh_gbbEeCVjEPhM4bNfk1UF_A', 
		channelId: 'UCHVXbQzkl3rDfsXWo8xi2qw', 
		part: 'snippet', 
		maxResults: 5, 
		order: 'date', 
		}, 
		error: function() { 
		console.error('YouTube動画情報を取得できませんでした。'); 
		} 
	}); 
} 
    
getYouTubeData().done(function(data) { 
	var items = data.items; 
	var html = [];
	// console.log(data);
	items.forEach(function(v) {
		// console.log(v)
		var videoId = v.id.videoId; 
		var snippet = v.snippet; 
		if (v.id.videoId && snippet.title !== 'Private video') { 
		html.push(` 
			<div class="glass">
			<div class="movie"> 
				${snippet.title}<br> 
				${new Date(snippet.publishedAt).toLocaleString()}<br> 
				<div class="movie-thumbnail">
				<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
				</div>
			</div> 
			</div>
		`); 
		} 
	}); 
	$('.movies').html(html.join(''));

	$('.movies').slick({
		arrows: true,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesToScroll: 1,
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