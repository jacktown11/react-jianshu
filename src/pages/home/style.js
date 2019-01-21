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

export const Banner = styled.div`
  width: 100%;
  height: 270px;
  margin-bottom: 30px;
  border-radius: 6px;
  img {
    width: 100%;
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
  background-color: #d5d7d9;
`;
