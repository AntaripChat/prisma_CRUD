
import { allTodo, createTodo,findTodo,updateTodo,deteteTodo } from "../controller/todo.con.js";
import { todoMid } from "../middleware/todo.mid.js";

export default (app) =>{
    app.post('/create',[todoMid],createTodo);
    app.get('/see',allTodo);
    app.get('/findtodo/:id',findTodo);
    app.put('/updates/:id',updateTodo);
    app.delete('/delete/:id',deteteTodo)

}