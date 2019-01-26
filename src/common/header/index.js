import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link, withRouter } from 'react-router-dom';

import { actionCreators } from './store';
import { actionCreators as siteActionCreators } from '../../store';
import {
  HeaderStyle,
  NavContainer,
  NavItem,
  SearchBox,
  HotSearch,
  NavAction
} from './style';

import logoUrl from '../../static/img/logo.png';

const COUNT_PER_PAGE = 10;

export class Header extends Component {
  constructor(props) {
    super(props);

    this.refreshIcon = React.createRef();
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  render() {
    let {
      isLogedIn,
      isFocused,
      isMouseIn,
      hotKeywordList,
      currentPage,
      totalPage,
      handleFocus,
      updateIsMouseIn,
      goNextPage
    } = this.props;
    hotKeywordList = hotKeywordList.toJS();
    return (
      <HeaderStyle>
        <img className='nav-logo' src={logoUrl} alt='简书logo' />
        <NavContainer>
          <Link to='/'>
            <NavItem className='left active'>首页</NavItem>
          </Link>
          <Link to='/'>
            <NavItem className='left'>下载App</NavItem>
          </Link>
          <SearchBox>
            <CSSTransition in={isFocused} timeout={500} classNames='slide'>
              <input
                className='input'
                type='text'
                placeholder='搜索'
                onFocus={() => handleFocus(true, hotKeywordList)}
                onBlur={() => handleFocus(false)}
              />
            </CSSTransition>
            <span
              className={'search-btn-wrapper ' + (isFocused ? 'focused' : '')}
            >
              <span className='iconfont'>&#xe61b;</span>
            </span>
            <HotSearch
              onMouseEnter={() => updateIsMouseIn(true)}
              onMouseLeave={() => updateIsMouseIn(false)}
              className={isFocused || isMouseIn ? '' : 'hidden'}
            >
              <h2 className='title'>热门搜索</h2>
              <button
                className='switch'
                onClick={() =>
                  goNextPage(currentPage, totalPage, this.refreshIcon.current)
                }
              >
                <span className='iconfont' ref={this.refreshIcon}>
                  &#xe68c;
                </span>
                换一批
              </button>
              {hotKeywordList && hotKeywordList.length ? (
                <ul className='keyword-list'>
                  {hotKeywordList
                    .slice(
                      (currentPage - 1) * COUNT_PER_PAGE,
                      currentPage * COUNT_PER_PAGE
                    )
                    .map((item) => (
                      <li className='keyword' key={item}>
                        {item}
                      </li>
                    ))}
                </ul>
              ) : (
                <p className='loading'>Loading...</p>
              )}
            </HotSearch>
          </SearchBox>

          <NavItem
            className='right'
            onClick={() => this.toggleLogin(isLogedIn)}
          >
            {isLogedIn ? '退出' : '登录'}
          </NavItem>
          <Link to='/'>
            <NavItem className='right'>
              <span className='iconfont'>&#xe636;</span>
            </NavItem>
          </Link>
        </NavContainer>
        <NavAction>
          <span className='iconfont'>&#xe615;</span>写文章
        </NavAction>
        {!isLogedIn && <NavAction className='register'>注册</NavAction>}
      </HeaderStyle>
    );
  }
  toggleLogin(isLogedIn) {
    if (isLogedIn) {
      this.props.logout();
    } else {
      this.props.history.push('/login');
    }
  }
}

const mapStateToProps = (state) => ({
  isFocused: state.getIn(['header', 'isFocused']),
  isMouseIn: state.getIn(['header', 'isMouseIn']),
  hotKeywordList: state.getIn(['header', 'hotKeywordList']),
  currentPage: state.getIn(['header', 'currentPage']),
  totalPage: state.getIn(['header', 'totalPage']),
  isLogedIn: state.getIn(['site', 'isLogedIn'])
});

const mapDispatchToProps = (dispatch) => ({
  handleFocus(isFocused, hotKeywordList) {
    if (!hotKeywordList || !hotKeywordList.size) {
      dispatch(actionCreators.getLoadHotKeywordAction());
    }
    dispatch(actionCreators.getUpdateIsFocusedAction(isFocused));
  },
  updateIsMouseIn(isMouseIn) {
    dispatch(actionCreators.getUpdateIsMouseInAction(isMouseIn));
  },
  goNextPage(currentPage, totalPage, icon) {
    // rotate the refresh icon
    let deg = icon.style.transform
      ? parseInt(icon.style.transform.replace(/[^\d]/gi, ''))
      : 0;
    deg += 360;
    icon.style.transform = `rotate(${deg}deg)`;

    let nextPage = (currentPage % totalPage) + 1;
    dispatch(actionCreators.getGoNextPageAction(nextPage));
  },
  logout() {
    dispatch(siteActionCreators.getUpdateIsLogedInAction(false));
  }
});

export { COUNT_PER_PAGE };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
