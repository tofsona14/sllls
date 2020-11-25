var objLogin = [
    {
        username: "Gio",
        password: "topkaca"
    },
    {
        username: "nika",
        password: "melia"
    },
    {
        username: "gia",
        password: "xucishvili"
    }
]


function getinfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById("password").value
    for(i = 0; i < objLogin.length; i++) {
        if(username == objLogin[i].username && password == objLogin[i].password) {
            console.log("თქვენ წარმატებით გაიარეთ ვერიფიკაცია")
        }else {
            console.log("username ან password არასწორია")
            return
        }
    }
}