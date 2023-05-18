export{}

interface IStudent {
    getUsers();
    getById(id: number);
    postData(user: Object);
    edit(id: number, updatedUser:Object);
}
interface User {
    id: number;
    username: string;
    email: string;
    message: string;
}

class Crud implements IStudent {
    users: User[];
    constructor() {
        this.users = [
            { id: 1, username: "ragul", email: "ragul@gmail.com", message: "hi Ragul" },
            { id: 2, username: "Saroo", email: "saroo@gmail.com", message: "hi Saroo" },
            { id: 3, username: "Ponni", email: "ponni@gmail.com", message: "hi Ponnelan" }
        ]
    }
    getUsers() {
        fetch('http://localhost:4000/getAllUsers')
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
        })
        // return "get all users" + JSON.stringify(this.users);
    }
    getById(id: number) {
        fetch(`http://localhost:4000/getById/+${id}`)
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
        })
        // let user = this.users.find(e => id === e.id)
        // if (user) return user
        // return "No Id Exists"
    }
    postData(user) {
        let {username,email,messages,}=user;
        fetch('http://localhost:4000/postdata', {
            method: 'POST',
            body: JSON.stringify({
                name: username,
                email: email,
                messages: messages
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
            })
        // this.users.push(user)
        // return "User Added Successfully  " + JSON.stringify(this.users)
    }

    //json.stringyfy and json.parse
    edit(id: number, updatedUser) {
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
        let user = this.users.find(e => id === e.id)
        if (user) {
            Object.assign(user, updatedUser)
            return "update Data" + JSON.stringify(this.users);
        }else{
            return "No user found";
        }
    }
}

let obj = new Crud();
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
let editId = 27
let updatedUser = { username: "Da", email: "da@gmail.com", messages: "hi Da" };
obj.edit(editId, updatedUser);


