
import { BsSearch } from "react-icons/bs"
//import { BsFillPersonFill } from "react-icons/bs"
import { BsFillChatLeftFill } from "react-icons/bs"
import { IoMdNotifications } from "react-icons/io"
import { GrLogout } from "react-icons/gr"
import "./topbar.css"
import {Link} from "react-router-dom"

export default function Topbar()
{
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Thapar Networking System</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <BsSearch className="searchIcon"/>
                    <input
                        placeholder="Search for friend, post or video"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/home"><span className="topbarLink">Homepage</span></Link>
                    {/*<span className="topbarLink">Timeline</span>*/}
                </div>
                <div className="topbarIcons">
                    {/*<div className="topbarIconItem">
                        <BsFillPersonFill/>
                        <span className="topbarIconBadge">1</span>
                        </div>*/}
                    {/*<div className="topbarIconItem">
                        <BsFillChatLeftFill />
                        <span className="topbarIconBadge">2</span>
                    </div>*/}
                    <div className="topbarIconItem">
                        <IoMdNotifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to="/profile"><img src="/assets/person/1.jpeg" alt="" className="topbarImg"/></Link>
                <div className="topbarIcons">
                    <div className="topbarIconItem" >
                    <Link to="/logout"><GrLogout/></Link>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}