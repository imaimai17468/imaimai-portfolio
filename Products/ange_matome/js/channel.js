function getYouTubeData() { 
    return $.ajax({ 
      type: 'GET', 
      dataType: 'json', 
      url: 'https://www.googleapis.com/youtube/v3/search', 
      data: { 
        key: 'AIzaSyBFts6_VnCh_gbbEeCVjEPhM4bNfk1UF_A', 
        channelId: 'UCHVXbQzkl3rDfsXWo8xi2qw', 
        part: 'snippet', 
        maxResults: 10, 
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
    items.forEach(function(v) { 
      var videoId = v.id.videoId; 
      var snippet = v.snippet; 
      if (v.id.videoId && snippet.title !== 'Private video') { 
        html.push(` 
          <li> 
          videoId: ${videoId}<br> 
          title: ${snippet.title}<br> 
          publishedAt: ${new Date(snippet.publishedAt).toLocaleString()}<br> 
          <iframe width="280" height="157" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
          </li> 
        `); 
      } 
    }); 
    $('#result').html(html.join('')); 
  });