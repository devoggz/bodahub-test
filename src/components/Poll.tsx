"use client";

// components/Poll.tsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";

interface PollProps {
  question: string;
  onVote: (points: number) => void;
}

const Poll: React.FC<PollProps> = ({ question, onVote }) => {
  const [voted, setVoted] = useState(false);

  const handleVote = (answer: "yes" | "no") => {
    if (!voted) {
      setVoted(true);
      onVote(5); // Award 5 points
      toast.success(`You voted ${answer}. You've been awarded 5 points!`);
    }
  };

  return (
    <div className="poll space-y-6 rounded-lg bg-white border p-4">
      <h2 className=" mt-4 mb-12 text-slate-600 font-bold text-2xl">
        {question}
      </h2>
      <div className="flex flex-row gap-4 items-center justify-between">
        <Button
          className="w-full bg-green-500"
          onClick={() => handleVote("yes")}
          disabled={voted}
        >
          Ndio
        </Button>
        <Button
          variant="destructive"
          className="w-full"
          onClick={() => handleVote("no")}
          disabled={voted}
        >
          La
        </Button>
      </div>
    </div>
  );
};

export default Poll;
