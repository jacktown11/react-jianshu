import styled from 'styled-components';

export const Logo = styled.img`
  position: absolute;
  z-index: 50;
  left: 50px;
  top: 56px;
`;

export const LoginWrapper = styled.div`
  position: relative;
  min-height: 750px;
  background-color: #f1f1f1;
  text-align: center;
`;

export const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  padding: 50px;
  transform: translateY(-50%);
  margin-left: -200px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  h2 {
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    color: #ea6f5a;
    margin-bottom: 50px;
  }
  .login-btn {
    width: 100%;
    height: 43px;
    margin-top: 20px;
    padding: 9px 18px;
    border-radius: 21.5px;
    background-color: #3194d0;
    color: #fff;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
    &:hover {
      background-color: #187cb7;
    }
  }
`;

export const InputBox = styled.div`
  border: 1px solid rgb(200, 200, 200);
  border-radius: 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 50px;
  &:first-child {
    border: none;
    border-bottom: 1px solid rgb(200, 200, 200);
  }
  .iconfont {
    position: absolute;
    left: 10px;
    top: 14px;
    width: 18px;
    height: 25px;
    line-height: 25px;
    color: rgb(150, 150, 150);
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    line-height: 42px;
    padding: 4px 12px 4px 35px;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 14px;
  }
`;
