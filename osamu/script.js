function load_video(){
  $.ajax({
      url: 'api_ip23/get_videos.php',
      method: 'get',
      dataType: 'json',
  })
  .done(function(data) {
    data['videos'].forEach(function(video){
      
      let div = $('<div>')
      div.append('<img src="'+video['link']+'" >')
      div.append('<h3 align="center">'+video['name']+'</h3>')
      div.append('<h3 align="center">'+video['year']+'</h3>')
      div.append('<h4 align="justify">'+video['description']+'</h4>')		
      $('#videos').append(div)
    })
  })
}