import { useEffect, useState } from "react";
import { AiFillHome, AiOutlineHistory } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../Component/ProgressBar";
import TabBar from "../Component/TabBar";
import TaskCard from "../Component/TaskCard";
import { RootState } from "../Redux/store";
import { addDay } from "../Redux/updateHabitSlice";

export default function HomePage() {
  const navigate = useNavigate();
  const { updateHabit } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const todayDate = new Date().toLocaleDateString();
  const event = new Date();
  const options: any = { weekday: "long" };
  const day: string = event
    .toLocaleTimeString(undefined, options)
    .split(" ")[0];
  const [pendingTask, setPendingTask] = useState<number>(0);
  const [today, setToday] = useState<string>("");

  //  This useEffect is used for adding new day like today by itselfy 
  //  by checking the condition date which is stored in localstorage and today date.

  useEffect(() => {
    const date = localStorage.getItem("date");

    if (date) {
      if (date.split("/")[1] !== todayDate.split("/")[1]) {
        console.log(date.split("/")[1], todayDate.split("/")[1]);
        localStorage.setItem("date", JSON.stringify(todayDate));
        dispatch(
          addDay({
            day: day,
            status: "none",
          })
        );
      } else {
        console.log(date.split("/")[1], todayDate.split("/")[1]);
      }
    } else {
      localStorage.setItem("date", JSON.stringify(todayDate));
      dispatch(
        addDay({
          day: day,
          status: "none",
        })
      );
    }
  }, []);

  // This useEffect is used for updating the status of the habits for today.
  useEffect(() => {
    setPendingTask(0);
    let pendingTasks = 0;
    updateHabit?.map((e: any, index) => {
      if (e?.day[e.day.length - 1].status === "none") {
        pendingTasks++;
      }
      setToday(e?.day[e.day.length - 1].day);
    });
    setPendingTask(pendingTasks);
  }, [updateHabit]);

  return (
    <div className="main">
      <div className="main-div">
        {/* The card for displaying the remaining task for today on homepage */}
        <div className="pending">
          <div className="">
            {" "}
            Hey, you have {pendingTask} Pending Task for {today}.
          </div>
        </div>

        {/* This is the section for showing progress of the habits. */}

        <div className="">
          <div className="">
            {/* Progess Bar Status of task visually and written format */}
            <div className="remaining">
              <div className="taskremaningdiv">
                <span>{pendingTask} Task Remaining</span>{" "}
                <span>
                  {updateHabit.length - pendingTask}
                  {" / "}
                  {updateHabit.length} (
                  {100 - Math.round((pendingTask / updateHabit.length) * 100)})
                  {"%"}
                </span>
              </div>
              <div className="progress">
              <ProgressBar 
                percentage={
                  100 - (pendingTask / updateHabit.length) * 100 + "%"
                }
              />{" "}
              </div>
              <div className=""></div>
            </div>

            {/* All todays habit to show */}

            <div className="t">
              {/* Using Map to iterate over the habits */}
              {updateHabit?.map((e: any, index) => (
                <TaskCard 
                
                  habitTitle={e?.title}
                  habitDescription={e?.description}
                  id={e?.id}
                  key={index}
                  habitStatus={e.day[e.day.length - 1].status}
                  index={e.day.length - 1}
                />
              ))}
            </div>
            {/* This tabbar shown below */}
            <div className="navigate">
              {/* This icon will redirect you to homepage */}
              <div>
                <AiFillHome
                className="navigateicon"
                onClick={() => navigate("/")}
              />
              </div>
              {/* This icon will redirect you to add new  habit page  */}

              <div>
                <BsFillPlusCircleFill
               className="navigateicon"
                onClick={() => navigate("/add-new")}
              />
              </div>
              {/* This icon will redirect you to all habit page where user can view all the habits. */}
              <div>
              <AiOutlineHistory
               className="navigateicon"
                onClick={() => navigate("/all-history")}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
