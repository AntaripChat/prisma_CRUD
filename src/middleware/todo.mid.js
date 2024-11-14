export const todoMid = (req,res,next)=>{
    if(!req.body.name){
        return res.send(`Enter the Your Name`)
    };
    if(!req.body.todo){
        return res.send(`Enter the todo`);
    };

    next();
};