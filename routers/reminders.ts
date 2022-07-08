import { Router } from "express";
import CreateReminderDTO from "../DTOS/create-reminder";
import Reminder from "../models/reminder";

const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
    res.send("List of reminders");
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDTO;
  const reminder = new Reminder(title);

  reminders.push(reminder);

  res.status(201).json(title);
});

export default router;