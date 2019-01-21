import React, { Component } from 'react';

import Footer from '../../common/footer';

import {
  HomeWrapper,
  HomeSection,
  Banner,
  SplitLine,
  ArticleList
} from './style';

export class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div className='main'>
          <HomeSection className='left'>
            <Banner>Banner</Banner>
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

export default Home;
