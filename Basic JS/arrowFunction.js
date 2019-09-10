const todos = [{
                name:'Hrites',
                done: false
               },
               {
                 name: 'Olindo',
                 done: true
               },{
                 name: 'Medula',
                 done: false
}];
const doneObject = todos.filter((todo)=>todo.done == false);
console.log(doneObject);
