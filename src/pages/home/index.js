import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toK } from '../../utils';
import { actionCreators } from './store';
import Footer from '../../common/footer';
import {
  HomeWrapper,
  HomeSection,
  Banner,
  SplitLine,
  ArticleList,
  ArticleItem,
  SubjectList,
  Download,
  PopUp,
  Advertisement,
  WriterList,
  ToTopButton
} from './style';

const SCROLL_TIME = 300,
  TIME_STEP = 25; // ms

export class Home extends Component {
  constructor(props) {
    super(props);

    this.homeWrapper = React.createRef();
    this.handleToTop = this.handleToTop.bind(this);
    window.addEventListener('scroll', () => {
      this.props.updateIsShowToTop(window.scrollY > 400);
    });
  }

  componentWillMount() {
    let { articleList } = this.props;
    if (!articleList || articleList.length === 0) {
      this.props.loadBannerList();
      this.props.loadArticleList(1);
      this.props.loadSubjectList();
      this.props.loadWriterList();
    }
  }
  render() {
    let {
      bannerList,
      articleList,
      subjectList,
      writerList,
      isTwoDImgHover,
      currentPage,
      isShowToTop,
      handleTwoDImgHover,
      loadArticleList
    } = this.props;

    return (
      <HomeWrapper ref={this.homeWrapper} onScroll={this.handleScroll}>
        {/* 主内容区 */}
        <div className='main'>
          {/* 左栏 */}
          <HomeSection className='left'>
            {/* 轮播图 */}
            <Banner>
              <ul>
                <li>
                  <a href='/'>
                    <img
                      src={bannerList[0] && bannerList[0].src}
                      alt='banner'
                    />
                  </a>
                </li>
              </ul>
            </Banner>

            {/* 分割线 */}
            <SplitLine />

            {/* 文章列表 */}
            <ArticleList>
              <ul>
                {articleList.map((item, index) => (
                  <ArticleItem key={index}>
                    {item.imgSrc ? (
                      <img
                        className='cover'
                        src={item.imgSrc}
                        alt='文章封面图片'
                      />
                    ) : null}
                    <div
                      className={'content ' + (item.imgSrc ? 'with-img' : '')}
                    >
                      <h2 className='title'>{item.title}</h2>
                      <p className='abstract'>{item.abstract}</p>
                      <div className='meta'>
                        <span className='meta-item author'>
                          {item.authorNickname}
                        </span>
                        <span className='meta-item comment'>
                          <span className='iconfont'>&#xe684;</span>
                          {' ' + item.commentCount + ' '}
                        </span>
                        <span className='meta-item like'>
                          <span className='iconfont'>&#xe602;</span>
                          {' ' + item.likeCount + ' '}
                        </span>
                      </div>
                    </div>
                  </ArticleItem>
                ))}
              </ul>
              <p
                className='more'
                onClick={() => loadArticleList(currentPage + 1)}
              >
                阅读更多
              </p>
            </ArticleList>
          </HomeSection>

          {/* 右侧栏 */}
          <HomeSection className='right'>
            {/* 主题链接 */}
            <SubjectList>
              <ul>
                {subjectList.map((subject, index) => (
                  <li key={index} className='subject-item'>
                    <img className='subject-img' src={subject} alt='专题' />
                  </li>
                ))}
              </ul>
            </SubjectList>

            {/* App下载 */}
            <Download
              onMouseEnter={() => handleTwoDImgHover(true)}
              onMouseLeave={() => handleTwoDImgHover(false)}
            >
              <img
                className='two-d-img'
                src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
                alt='app二维码'
              />
              <div className='desc'>
                <p className='download'>
                  下载简书手机App<span className='iconfont'>&#xe623;</span>
                </p>
                <p className='slogan'>随时随地发现和创作内容</p>
              </div>
              {isTwoDImgHover ? (
                <PopUp>
                  <img
                    className='two-d-img'
                    src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
                    alt='app二维码'
                  />
                </PopUp>
              ) : null}
            </Download>

            {/* 广告 */}
            <Advertisement>
              <img
                className='ad-img'
                src='https://oimagea1.ydstatic.com/image?id=-9174842782602729078&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60'
                alt='广告'
              />
              <span className='ad-tag'>广告</span>
            </Advertisement>

            {/* 作家列表 */}
            <WriterList>
              <h2 className='title'>热门搜索</h2>
              <button className='switch'>
                <span className='iconfont' ref={this.refreshIcon}>
                  &#xe68c;
                </span>
                换一批
              </button>
              <ul className='writer-list'>
                {writerList.map((writer) => (
                  <li className='writer-item' key={writer.id}>
                    <img
                      className='avatar'
                      src={writer.avatar_source}
                      alt='用户头像'
                    />
                    <div className='info'>
                      <p className='info-item name'>{writer.nickname}</p>
                      <p className='info-item meta'>
                        <span className='write-count'>
                          写了{toK(writer.total_wordage)}字
                        </span>
                        {' · '}
                        <span className='like-count'>
                          {toK(writer.total_likes_count)}喜欢
                        </span>
                      </p>
                    </div>
                    <button className='follow'>+关注</button>
                  </li>
                ))}
              </ul>
              <a className='see-all' href='/'>
                查看全部<span className='iconfont'>&#xe623;</span>
              </a>
            </WriterList>

            {/* 广告 */}
            <Advertisement>
              <img
                className='ad-img'
                src='https://oimagea7.ydstatic.com/image?id=-6040249110110948391&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60'
                alt='广告'
              />
              <span className='ad-tag'>广告</span>
            </Advertisement>
          </HomeSection>
        </div>

        {/* 返回顶部按钮 */}
        {isShowToTop ? (
          <ToTopButton onClick={this.handleToTop}>
            <span className='iconfont'>&#xe6b1;</span>
          </ToTopButton>
        ) : null}

        {/* 页脚 */}
        <Footer />
      </HomeWrapper>
    );
  }
  handleToTop() {
    let { scrollX: x, scrollY: y } = window;
    const steps = SCROLL_TIME / TIME_STEP,
      xStep = x / steps,
      yStep = y / steps;
    (function f() {
      x = x - xStep > 0 ? x - xStep : 0;
      y = y - yStep > 0 ? y - yStep : 0;
      if (x > 0 || y > 0) {
        window.scrollTo(x, y);
        setTimeout(f, TIME_STEP);
      } else {
        window.scrollTo(0, 0);
      }
    })();
  }
}

const mapStateToProps = (state) => ({
  bannerList: state.getIn(['home', 'bannerList']).toJS(),
  articleList: state.getIn(['home', 'articleList']).toJS(),
  subjectList: state.getIn(['home', 'subjectList']).toJS(),
  writerList: state.getIn(['home', 'writerList']).toJS(),
  isTwoDImgHover: state.getIn(['home', 'isTwoDImgHover']),
  currentPage: state.getIn(['home', 'currentPage']),
  isShowToTop: state.getIn(['home', 'isShowToTop'])
});

const mapDisptchToProps = (dispatch) => ({
  loadBannerList() {
    dispatch(actionCreators.getLoadBannerListAction());
  },
  loadArticleList(page) {
    dispatch(actionCreators.getLoadArticleListAction(page));
  },
  loadSubjectList() {
    dispatch(actionCreators.getLoadSubjectListAction());
  },
  loadWriterList() {
    dispatch(actionCreators.getLoadWriterListAction());
  },
  handleTwoDImgHover(isTwoDImgHover) {
    dispatch(actionCreators.getTwoDImgHoverAction(isTwoDImgHover));
  },
  updateIsShowToTop(isShowToTop) {
    dispatch(actionCreators.getUpdateIsShowToTopAction(isShowToTop));
  }
});

export default connect(
  mapStateToProps,
  mapDisptchToProps
)(Home);
