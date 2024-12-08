import React, { useState } from 'react'
import './SideBar.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = () => {
  const [adminName,setAdminName] = useState(false)
  return (
    <div className='sideBar'>
        <p>ADMIN DASHBOARD</p>
        <hr />
        <div className="profile">
            <div className="profileAdmin">
              <div className="profileAdminTagHead hoverGrey" onClick={() => setAdminName(!adminName)}><p>Admin Name</p><TiArrowSortedDown className={adminName ? "arrow" : "arrowRotate"}/></div>
              <div className={adminName ? "profileAdminTagsHide" : "profileAdminTags"}>
              <div className="profileAdminTag hoverGrey"><FaRegUserCircle /> <p>My Profile</p></div>
              <div className="profileAdminTag hoverGrey"><BiEditAlt /> <p>Edit Profile</p></div>
              <div className="profileAdminTag hoverGrey"><IoSettingsOutline /> <p>Settings</p></div>
              </div>
            </div>
        </div>
        <hr />
        <div className="pages">
          <div className="page hoverGrey">District</div>
          <div className="page hoverGrey">Place</div>
          <div className="page hoverGrey">Category</div>
          <div className="page hoverGrey">SubCategory</div>
          <div className="page hoverGrey">Brand</div>
          <div className="page hoverGrey">Complaints</div>
          <div className="page hoverGrey">Feedback</div>
        </div>

    </div>
  )
}

export default SideBar