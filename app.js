import express from "express";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 
            'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
        return res.status(200).json({});
    }
    next();
});


app.get("/", (req, res) => res.send("Hello, Home page"));
app.use("/users", usersRoutes);

// 404 error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});



export default app;
