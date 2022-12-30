import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HabitHistoryCard from "../Component/HabitHistoryCard";
import TabBar from "../Component/TabBar";
import Task from "../Component/Task";
import { RootState } from "../Redux/store";

export default function AllHistoryPage() {
  const history_habit_card = require("../Assests/history-habit-card.png");
  const {id} = useParams()
  const data: any  = useSelector((state: RootState) => state.updateHabit);
  const {updateHabit } = useSelector((state: RootState) => state);

  return (
    // This page Display All the habits stored and clicking on that habit it will  shows the particular habit status days wise
    <div className="allHistoryPage">
      <div className="design ">
        
        <div className="p-4">
          <img   src="https://static.vecteezy.com/system/resources/thumbnails/002/873/270/small/active-healthy-lifestyle-habits-concept-dieting-food-nutrition-illustration-with-character-sport-exercising-and-training-outdoor-workout-for-web-page-presentation-social-promotion-or-print-media-vector.jpg" alt="History Habit Card" className="img" />

          <div className="history-card  max-h-[44vh] overflow-y-scroll">
            {/* Display All the habits of the user  by using task component */}
             {
              updateHabit?.map((e: any, index) => (
                <Task
                habitTitle={e?.title}
                habitDescription={e?.description}
                id={e?.id}
                key={index}
                />
              ))
            }

          </div>
        </div>
        <div className="navis">
          {/* This is the component used for navigating to, homepage, add new page and habits page. */}
          <TabBar />
        </div>
      </div>
    </div>
  );
}
