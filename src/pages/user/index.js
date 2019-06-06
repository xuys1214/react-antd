import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/actions/user';

class User extends PureComponent {
    render() {
        const { userInfo = {} } = this.props.user;
        return (
            <div>
                <p>
                    用户名：{userInfo.name}
                </p>
                <p>
                    介绍：{userInfo.intro}
                </p>
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((userInfo) => userInfo, {getUserInfo})(User);