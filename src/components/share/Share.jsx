import "./share.css";
import {MdPermMedia} from "react-icons/md"
import {AiFillTag} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {BsFillEmojiSmileFill} from "react-icons/bs"
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdPermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">add a media</span>
                </div>
                {/*<div className="shareOption">
                    <AiFillTag htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <GoLocation htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <BsFillEmojiSmileFill htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div> */}
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
