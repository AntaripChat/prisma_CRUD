import prismacl from "../config/db.config.js";

//---------create------------
export const createTodo = async(req,res) =>{
    const {name,todo} = req.body;
    try{
        const todoC = await prismacl.todo.create({
            data:{
                name:name,
                todo:todo
            }
        });
        return res.send(`${todoC.name} your todo add`);
    }catch{
        return res.send(`Sorry There is an problem`)
    }
}

//-------------see all user--------------------------
export const allTodo = async (req,res) =>{
    const alltodo = await prismacl.todo.findMany();
    // res.send(`name - ${alltodo.name} your task - ${alltodo.todo}`)
    return res.send(alltodo)
}


//----------------task by id------------------------------
export const findTodo = async(req,res) =>{
    const {id} = req.params;
    try{
       const data = await prismacl.todo.findFirst({
            where:{
                id:parseInt(id)
            }
        });
        if(data){
            return res.send(data);
        }else{
            return res.send(`User not find`)
        }
        
    }catch{
        return res.send(`Sorry There is an problem`)
    }
}


//---------------update--------------------------
export const updateTodo = async(req,res)=>{
    const {id} = req.params;
    const {name,todo} = req.body;
    try{
        const data = await prismacl.todo.update({
            where:{
                id:parseInt(id)
            },
            data:{
                name:name,
                todo:todo
            }
        });
        return res.send(`update ${data}`);
    }catch{
        return res.send(`Some problem`)
    }
}


//---------------------datele task-------------------
export const deteteTodo = async(req,res)=>{
    const {id} = req.params;
    try{
        await prismacl.todo.delete({
            where:{
                id:parseInt(id)
            },
        
        });
        return res.send(`Task Deleted`);
    }catch{
        return res.send(`Some problem`)
    }
}


