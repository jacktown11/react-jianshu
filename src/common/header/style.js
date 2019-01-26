import styled from 'styled-components';

export const HeaderStyle = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;

  .nav-logo {
    float: left;
    width: 100px;
    height: 56px;
  }
`;
export const NavContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 960px;
  padding-right: 40px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 56px;
`;
export const NavItem = styled.span`
  display: block;
  padding: 15px;
  margin-right: 10px;
  height: 26px;
  line-height: 26px;
  font-size: 17px;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchBox = styled.div`
  float: left;
  position: relative;
  height: 38px;
  line-height: 38px;
  margin: 9px 15px;
  color: rgb(150, 150, 150);
  .input {
    width: 160px;
    height: 38px;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 1px solid #eee;
    font-size: 14px;
    color: rgb(51, 51, 51);
    background-color: #eee;
    outline: none;
    transition: all 0.5s ease-in-out;

    &::-webkit-input-placeholder {
      color: #969696;
    }
    &::-moz-placeholder {
      color: #969696;
    }
    &:-moz-placeholder {
      color: #969696;
    }
    &:-ms-input-placeholder {
      color: #969696;
    }
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-enter-done {
    width: 240px;
  }
  .slide-exit-active {
    width: 160px;
  }
  .slide-exit-done {
    width: 160px;
  }
  .search-btn-wrapper {
    position: absolute;
    top: 4px;
    right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    .iconfont {
      font-size: 20px;
      position: relative;
      top: -2px;
    }
    &.focused {
      background-color: #969696;
      .iconfont {
        color: #eee;
      }
    }
  }
`;
export const HotSearch = styled.div`
  position: absolute;
  z-index: 50;
  top: 47px;
  width: 210px;
  padding: 20px 20px 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  &.hidden {
    display: none;
  }
  &::before {
    position: absolute;
    z-index: 50;
    top: -6px;
    left: 27px;
    width: 10px;
    height: 10px;
    content: '';
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    transform: rotate(45deg);
    background-color: #fff;
  }
  .title {
    height: 20px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .switch {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    color: rgb(150, 150, 150);
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    .iconfont {
      display: inline-block;
      font-size: 12px;
      margin-right: 3px;
      transition: all 0.5s ease-in;
    }
    &:hover {
      color: #2f2f2f;
    }
  }
  .keyword-list {
    margin-left: -10px;
    line-height: 28px;
    color: #787878;
    .keyword {
      display: inline-block;
      margin-left: 10px;
      padding: 2px 6px;
      border: 1px solid #ddd;
      border-radius: 3px;
      font-size: 12px;
      line-height: 1;
      cursor: pointer;
      &:hover {
        color: #333;
        border-color: #b4b4b4;
      }
    }
  }
  .loading {
    text-align: center;
  }
`;

export const NavAction = styled.button`
  float: right;
  margin: 8px 15px 0px 15px;
  padding: 6px 12px;
  height: 26px;
  box-sizing: content-box;
  border: 1px solid transparent;
  border-radius: 20px;
  line-height: 26px;
  text-align: center;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  background-color: #ea6f5a;
  color: #fff;
  &:hover {
    color: #fff;
    background-color: #ec6149;
  }
  &.register {
    width: 54px;
    margin-right: 5px;
    color: #ea6f5a;
    background-color: transparent;
    border-color: rgba(236, 97, 73, 0.7);
  }
  &.register:hover {
    color: #ec6149;
    border-color: #ec6149;
    background-color: rgba(236, 97, 73, 0.05);
  }
  .iconfont {
    margin-right: 3px;
  }
`;
