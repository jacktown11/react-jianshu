import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import Footer from '../../common/footer';

import {
  HomeWrapper,
  HomeSection,
  Banner,
  SplitLine,
  ArticleList
} from './style';

export class Home extends Component {
  componentWillMount() {
    this.props.loadBannerList();
  }
  render() {
    let { bannerList } = this.props;
    return (
      <HomeWrapper>
        <div className='main'>
          <HomeSection className='left'>
            <Banner>
              <ul>
                <li>
                  <a>
                    <img src={bannerList[0] && bannerList[0].src} />
                  </a>
                </li>
              </ul>
            </Banner>
            <SplitLine />
            <ArticleList />
          </HomeSection>
          <HomeSection className='right'>right</HomeSection>
        </div>
        <Footer />
      </HomeWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  bannerList: state.getIn(['home', 'bannerList'])
});

const mapDisptchToProps = (dispatch) => ({
  loadBannerList() {
    dispatch(actionCreators.getLoadBannerListAction());
  }
});

export default connect(
  mapStateToProps,
  mapDisptchToProps,
  null
)(Home);
