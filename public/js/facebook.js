function checkLoginState() {
  FB.getLoginStatus(function(response){
    statusChangeCallback(response);
  })
}

function statusChangeCallback(response) {
  if(response.status === 'connected') {
    console.log('Successfully logged in with Facebook');
    //Logged into my app and Facebook. Gets name and picture.
    FB.api('me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  $(".facebookLogin").hide();
  $("#name").text(response.name);
  $("#photo").attr("src", response.picture.data.url);
}
