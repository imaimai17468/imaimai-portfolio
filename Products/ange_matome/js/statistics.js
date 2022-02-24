function jpFormat(_val){
  const _string = String(_val);
  const _length = _string.length;
  const _digits = ['', '万', '億', '兆', '京', '垓'];
  let _result = '';
  let _results = [];
  
  for(i = 0; i < Math.ceil(_length / 4); i++){
    _results[i] = Number(_string.substring(_length - i * 4, _length - (i + 1) * 4));
    if(_results[i] != 0) _result = String(_results[i]).replace(/(\d)(?=(\d\d\d)+$)/g, '$1,') + _digits[i] + _result;
  }
  return _result;
}

function getYouTubeData() { 
  return $.ajax({ 
    type: 'GET', 
    dataType: 'json', 
    url: 'https://www.googleapis.com/youtube/v3/channels', 
    data: { 
      key: 'AIzaSyBFts6_VnCh_gbbEeCVjEPhM4bNfk1UF_A', 
      id: 'UCHVXbQzkl3rDfsXWo8xi2qw', 
      part: 'statistics', 
    }, 
    error: function() { 
      console.error('YouTubeチャンネル情報を取得できませんでした。'); 
    } 
  }); 
} 
    
getYouTubeData().done(function(data) { 
  var items = data.items; 
  var html = [];
  var viewCount = jpFormat(items[0].statistics.viewCount);
  var subscriberCount = jpFormat(items[0].statistics.subscriberCount);
  // console.log(viewCount);
  // console.log(subscriberCount);
  html.push(`
    <h3>チャンネル登録者数</h3>
    <p class="value">${subscriberCount} 人</p>
    <h3>チャンネル再生回数</h3>
    <p class="value">${viewCount} 回</p>
  `);
  $('#analytics').html(html.join(''));
});