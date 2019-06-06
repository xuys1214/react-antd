import React from 'react';
import { Link } from 'react-router-dom';

export default() => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/login">登录</Link>
                </li>
                <li>
                    <Link to="/counter">Redux Counter</Link>
                </li>
                <li>
                    <Link to="/user">用户</Link>
                </li>
            </ul>
        </div>
    )
}