import React from 'react';
import './Topbar.css';
import { NotificationsNoneOutlined, Language , Settings } from '@mui/icons-material';
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">IamAdmin</span>
                </div>
                <div className="topright">
                    <div className="topbariconContainer">
                        <NotificationsNoneOutlined />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbariconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbariconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/9712732/pexels-photo-9712732.jpeg?auto=compress&cs=tinysrgb&w=600" alt="topAvatar" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar
