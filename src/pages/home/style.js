import styled from 'styled-components';

export const HomeWrapper = styled.div`
  margin: 56px auto 0 auto;
  width: 960px;
  .main {
    width: 100%;
    overflow: hidden;
  }
`;

export const HomeSection = styled.div`
  &.left {
    float: left;
    width: 625px;
    padding: 30px 0 0 15px;
  }
  &.right {
    float: right;
    margin-left: 40px;
    padding-top: 30px;
    width: 280px;
  }
`;

export const SplitLine = styled.div`
  width: 100%;
  height: 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 15px;
`;

export const ArticleList = styled.div`
  width: 100%;
  min-height: 100px;
  .more {
    margin: 30px 0 60px;
    padding: 10px 15px;
    height: 20px;
    line-height: 20px;
    border-radius: 20px;
    background-color: #a5a5a5;
    font-size: 15px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #9b9b9b;
    }
  }
`;

export const ArticleItem = styled.div`
  position: relative;
  width: 100%;
  padding: 15px 0 20px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  .cover {
    position: absolute;
    height: 98px;
    max-width: 148px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
  }
  .content {
    &.with-img {
      padding-right: 165px;
    }
    .detail-link {
      text-decoration: none;
    }
    .title {
      margin-bottom: 4px;
      font-size: 18px;
      line-height: 1.5;
      font-weight: 700;
      color: #2f2f2f;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .abstract {
      margin-bottom: 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .meta {
      font-size: 12px;
      line-height: 20px;
      color: #b4b4b4;
      .meta-item {
        margin-right: 10px;
        .iconfont {
          position: relative;
          top: 2px;
        }
      }
    }
  }
`;

export const SubjectList = styled.div`
  .subject-item {
    width: 100%;
    margin-top: -4px;
    padding-bottom: 8px;
    cursor: pointer;
    .subject-img {
      width: 100%;
      height: 50px;
    }
  }
`;
export const Download = styled.div`
  position: relative;
  height: 60px;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  .two-d-img {
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    height: 60px;
    opacity: 0.85;
  }
  .desc {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    text-align: left;
    .download {
      font-size: 15px;
      color: #333;
      .iconfont {
        font-size: 12px;
      }
    }
    .slogan {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
  }
`;

export const PopUp = styled.div`
  position: absolute;
  bottom: 90px;
  left: 50px;
  width: 180px;
  height: 180px;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  .two-d-img {
    width: 100%;
    height: 100%;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 0;
    right: 0;
    margin: auto;
    width: 12px;
    height: 12px;
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
    transform: rotate(45deg);
    background-color: #fff;
  }
`;
export const Advertisement = styled.div`
  position: relative;
  width: 100%;
  margin: 25px 0 15px;
  border-radius: 4px;
  overflow: hidden;
  .ad-img {
    display: block;
    width: 100%;
  }
  .ad-tag {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 5px;
    background-color: #000;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    opacity: 0.7;
  }
`;

export const WriterList = styled.div`
  position: relative;
  font-size: 14px;
  color: #969696;
  .title {
    height: 20px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .switch {
    position: absolute;
    top: 0px;
    right: 0px;
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
  .writer-list {
    margin-bottom: 20px;
    .writer-item {
      position: relative;
      margin-top: 15px;
      height: 48px;
      overflow: hidden;
      .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border-radius: 24px;
      }
      .info {
        float: left;
        .info-item {
          height: 20px;
          line-height: 20px;
        }
        .name {
          padding-top: 6px;
          color: #333;
        }
        .meta {
          font-size: 13px;
          margin-top: 2px;
        }
      }
      .follow {
        position: absolute;
        top: 6px;
        right: 0;
        color: rgb(66, 192, 46);
        cursor: pointer;
      }
    }
  }
  .see-all {
    display: block;
    height: 19px;
    padding: 7px 7px 7px 12px;
    border: 1px solid rgb(220, 220, 200);
    border-radius: 4px;
    line-height: 19px;
    font-size: 13px;
    text-align: center;
    color: #787878;
    text-decoration: none;
    .iconfont {
      font-size: 12px;
      position: relative;
      top: -1px;
    }
  }
`;
export const ToTopButton = styled.button`
  position: fixed;
  display: block;
  bottom: 50px;
  right: 40px;
  width: 50px;
  height: 50px;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: hsla(0, 0%, 71%, 0.1);
  }
  .iconfont {
    position: relative;
    top: -2px;
  }
`;
