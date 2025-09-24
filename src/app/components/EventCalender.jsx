"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// ValuePiece = Date | null;

// Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY

const events = [
  {
    id: 1,
    title: "Loren ipsum dolor",
    tine: "12:00 PM — 2:00 PM",
    description: "Loren ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM — 2:00 PM",
    description: "Loren ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM — 2:00 PM",
    description: "Loren ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-white p-4 rounded-lg ">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default EventCalender;
