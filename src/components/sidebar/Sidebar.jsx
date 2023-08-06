import "./sidebar.css"
import {CgProfile} from "react-icons/cg"
import {MdOutlineTipsAndUpdates} from "react-icons/md"
import {MdOutlinePermContactCalendar} from "react-icons/md"
import {MdRssFeed} from "react-icons/md"
import {BsFillChatFill} from "react-icons/bs"
import {BsCameraVideoFill} from "react-icons/bs"
import {BiGroup} from "react-icons/bi"
import {BsFillBookmarkFill} from "react-icons/bs"
import {BsQuestionCircle} from "react-icons/bs"
import {GrUserWorker} from "react-icons/gr"
import {GiSevenPointedStar} from "react-icons/gi"
import {MdGolfCourse} from "react-icons/md"
import {Users} from "../../dummyData"
import Closefriend from "../closefriend/Closefriend"
import {Link} from "react-router-dom"
export default function Sidebar()
{
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <CgProfile className="sidebarIcon" />
                        <span className="sidebarListItemText">Profile</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlineTipsAndUpdates className="sidebarIcon" />
                        <span className="sidebarListItemText">Updates</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlinePermContactCalendar className="sidebarIcon" />
                        <span className="sidebarListItemText">Helpdesk</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdRssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    {/*<li className="sidebarListItem">
                        <BsFillChatFill className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsCameraVideoFill className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <BiGroup className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillBookmarkFill className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsQuestionCircle className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <GrUserWorker className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                       <GiSevenPointedStar className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdGolfCourse className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>*/}
                </ul>
                {/*<button className="sidebarButton">Show More</button>*/}
                {/*<hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map((u)=>(
                        <Closefriend key={u.id} user={u}/>
                    ))
                </ul>*/}
            </div>
        </div>
    )
}