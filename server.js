import app from "./app.js";
import { PORT } from "./src/config/server.config.js";
import todoRoute from "./src/routes/todo.route.js";
todoRoute(app);


app.listen(PORT,console.log(`App Running on ${PORT}`))
