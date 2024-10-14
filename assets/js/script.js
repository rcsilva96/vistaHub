function search(){

    var username = document.getElementById("inputUserName.value");
    var url = `https://api.github.com/users/${username}`;

    $.getJSON(url, response => {

        console.log(response);

    });

}