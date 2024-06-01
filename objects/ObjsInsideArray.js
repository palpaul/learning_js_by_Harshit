//Objects Inside Arrays
//very useful in real world applicarions

const users = [
{userId:1,firstName:"Rahul",gender:"Male"},
{userId:2,firstName:"Mohit",gender:"Male"},
{userId:3,firstName:"Vineela",gender:"Female"},

];
console.log(users);
// now we want to iterrate this array 
for(let user of users){
    console.log(user);
    //console.log(user.userId);
    //console.log(user.gender);
}

//nested destructuring
const [user1,user2,user3] = users;
console.log(user1);

const [{firstName:user1FristName,userId:user1UserId}, , {gender:user3Gender}] = users; // skipin obj2 using comma
console.log(user1FristName,user1UserId,user3Gender);
