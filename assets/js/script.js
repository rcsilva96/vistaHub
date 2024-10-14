function search(){

    var username = document.getElementById("inputUserName").value;
    var url = `https://api.github.com/users/${username}`;

    $.getJSON(url, user => {

        console.log(user)

        document.getElementById("name").innerHTML = user.name;
        document.getElementById("html_url").innerHTML = user.html_url;
        document.getElementById("company").innerHTML = user.company;
            

    });

}