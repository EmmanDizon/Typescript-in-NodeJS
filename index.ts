import remindersRouter from "./routers/reminders";
import express from "express";
const app = express();
app.use(express.json());

app.use("/api/reminders", remindersRouter);

app.listen(8000, () => {
    console.log("Listening on port 8000");
});