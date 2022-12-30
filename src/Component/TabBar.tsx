import "./Component.scss"
import {AiFillHome, AiOutlineHistory } from 'react-icons/ai';
import { BsFillPlusCircleFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
export default function TabBar() {
  const navigate = useNavigate();
  return (
    // This component is used for navigating to, homepage, add new page and habits page.
    <div className='navi'>
      <AiFillHome className="naviicon"  onClick={() => navigate("/")}/>
     < BsFillPlusCircleFill className="naviicon" onClick={() => navigate("/add-new")} />
      <AiOutlineHistory className="naviicon" onClick={() => navigate("/all-history")}/>
    </div>
  )
}
