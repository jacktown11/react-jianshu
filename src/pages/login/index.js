import React, { Component, Fragment } from 'react';
import { Logo, LoginWrapper, LoginBox, InputBox, InputWrapper } from './style';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.loginWrapper = React.createRef();
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    var h = window.innerHeight;
    if (typeof h !== 'number') {
      var ele =
        window.ducument.compatMode === 'CSS1Compat'
          ? document.documentElement
          : document.body;
      h = ele.clientHeight;
    }
    this.loginWrapper.current.style.minHeight = h + 'px';
  }

  render() {
    return (
      <Fragment>
        <Link to='/'>
          <Logo
            src='https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png'
            alt='简书logo'
          />
        </Link>
        <LoginWrapper ref={this.loginWrapper}>
          <LoginBox>
            <h2>登录</h2>
            <InputBox>
              <InputWrapper>
                <span className='iconfont'>&#xe638;</span>
                <input type='text' placeholder='手机号或邮箱' />
              </InputWrapper>
              <InputWrapper>
                <span className='iconfont'>&#xe626;</span>
                <input type='text' placeholder='密码' />
              </InputWrapper>
            </InputBox>
            <button className='login-btn' onClick={this.login}>
              登录
            </button>
          </LoginBox>
        </LoginWrapper>
      </Fragment>
    );
  }
  login() {
    this.props.updateIsLogedIn(true);
    this.props.history.push('/');
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateIsLogedIn(isLogedIn) {
    dispatch(actionCreators.getUpdateIsLogedInAction(isLogedIn));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Login));
