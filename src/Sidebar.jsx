import { MdToken } from "react-icons/md";
import { RiNftFill, RiTokenSwapFill } from "react-icons/ri";
import { ImFacebook2, ImLinkedin, ImTwitter } from "react-icons/im";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <RiNftFill className="icon_header" /> NFTify
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li
          className="sidebar-list-item"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          {/* <a href=""> */}
          <MdToken className="icon" /> Tokken Address
          {/* </a> */}
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => {
            window.location.href = "/pair";
          }}
        >
          {/* <a href=""> */}
          <RiTokenSwapFill className="icon" /> Pair Address
          {/* </a> */}
        </li>
        </ul>
      <div className="icon-new">
      <ImFacebook2 />
      <ImLinkedin />
      <ImTwitter />
      </div>
    </aside>
  );
}

export default Sidebar;
