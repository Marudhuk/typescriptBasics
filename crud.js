"use strict";
exports.__esModule = true;
var Crud = /** @class */ (function () {
    function Crud() {
        this.users = [
            { id: 1, username: "ragul", email: "ragul@gmail.com", message: "hi Ragul" },
            { id: 2, username: "Saroo", email: "saroo@gmail.com", message: "hi Saroo" },
            { id: 3, username: "Ponni", email: "ponni@gmail.com", message: "hi Ponnelan" }
        ];
    }
    Crud.prototype.getUsers = function () {
        fetch('http://localhost:4000/getAllUsers')
            .then(function (res) { return res.json(); })
            .then(function (json) {
            console.log(json);
        });
        // return "get all users" + JSON.stringify(this.users);
    };
    Crud.prototype.getById = function (id) {
        fetch("http://localhost:4000/getById/+" + id)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            console.log(json);
        });
        // let user = this.users.find(e => id === e.id)
        // if (user) return user
        // return "No Id Exists"
    };
    Crud.prototype.postData = function (user) {
        var username = user.username, email = user.email, messages = user.messages;
        fetch('http://localhost:4000/postdata', {
            method: 'POST',
            body: JSON.stringify({
                name: username,
                email: email,
                messages: messages
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(function (response) { return response.json(); })
            .then(function (json) {
            console.log(json);
        });
        // this.users.push(user)
        // return "User Added Successfully  " + JSON.stringify(this.users)
    };
    //json.stringyfy and json.parse
    Crud.prototype.edit = function (id, updatedUser) {
        // let {username,email,messages,}=updatedUser;
        // fetch(`http://localhost:4000/updateById/${id} `, {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         name: username,
        //         email: email,
        //         messages: messages
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.text())
        //     .then((json) => {
        //         console.log(json);
        //         this.getUsers() 
        //     });
        var user = this.users.find(function (e) { return id === e.id; });
        if (user) {
            Object.assign(user, updatedUser);
            return "update Data" + JSON.stringify(this.users);
        }
        else {
            return "No user found";
        }
    };
    return Crud;
}());
var obj = new Crud();
//get All users
// obj.getUsers()   
// console.log(getUsers,"fetch all users");
// //getBy Id
// let id = 4
// obj.getById(id)
// console.log(obj.getById(id));
// //post Data
// let user = { username: "Da", email: "da@gmail.com", messages: "hi Da" };
// console.log(obj.postData(user));
// //edit Data
var editId = 27;
var updatedUser = { username: "Da", email: "da@gmail.com", messages: "hi Da" };
obj.edit(editId, updatedUser);
