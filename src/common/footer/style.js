import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 25px 15px 20px 15px;
  margin: auto;
  box-sizing: border-box;
  color: #969696;
  .link-list {
    list-style: none;
    font-size: 13px;
    line-height: 1.42857;
    .link-item {
      display: inline-block;
      cursor: pointer;
      &:after {
        content: '·';
        margin: 0 0.5em;
      }
      &:last-child:after {
        content: '';
        margin: 0;
      }
      a {
        text-decoration: none;
        color: #969696;
        &:hover {
          color: #2f2f2f;
        }
      }
    }
  }
  .info {
    margin-top: 10px;
    font-size: 12px;
    vertical-align: middle;
    color: #b8b8b8;
    height: 1.42857;
    .icon-link {
      vertical-align: middle;
      display: inline-block;
      text-decoration: none;
      font-size: 0;
    }
    .icon {
      position: relative;
      height: 30px;
    }
  }
`;
