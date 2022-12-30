import { FiCheckCircle } from "react-icons/fi/index";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateDayStatus } from "../Redux/updateHabitSlice";
// import { State } from "../redux/types";

interface IProps {
  habitTitle: string;
  habitDescription: string;
  id: number;
  habitStatus: string;
  index: number
}

// This components take the props as IProps and display the habit card.
export default function TaskCard({
  habitTitle,
  habitDescription,
  id,
  habitStatus,
  index
}: IProps) {
  const dispatch = useDispatch();

  return (
    <div
      className="black"
    >
      <div className="Taskvcardleft">
        {/* Ficheck circle icon will change the status to be done */}
        {" "}
        <FiCheckCircle
          className={`Taskvcardlefticon ${
            habitStatus === "done" ? "blacks" : "grey"
          }`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "done",
              })
              )
          }
          }
        />
        {/* IoMdCloseCircleOutline circle icon will change the status to be not-done */}

        <IoMdCloseCircleOutline
          className={` Taskvcardlefticon ${
            habitStatus === "not-done" ? "blacks" : "grey"
          }`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "not-done",
              })
              )
          }
          }
        />
        {/* AiOutlineMinusCircle circle icon will change the sattus to be none */}
        <AiOutlineMinusCircle
          className={`Taskvcardlefticon ${
            habitStatus === "none" ? "blacks" : "grey"
          }`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "none",
              })
              )
          }
          }
        />
      </div>

      <div className="Taskvcardright">
        {/* This shows the title and description of a habit */}
        <div className="TaskvcardRightHabit">
        <span className="">{habitTitle}</span>
        </div>
        <span className="TaskvcardRightdesc">
          {habitDescription}
        </span>
      </div>
    </div>
  );
}
