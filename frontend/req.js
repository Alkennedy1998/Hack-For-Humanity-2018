const xhr = new XMLhttpRequest();
  const url = '/api/submission';
  const Points;
  xhr.responseType = 'json';
  xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLhttpRequest.DONE){
          points = xhr.response;
      }
  }
  xhr.open('GET', url);
  xhr.send();
  export default Points; 