import React, { Component } from 'react';
import Slider from 'react-slick';

import { SliderStyle, PrevButtonWrapper, NextButtonWrapper } from './style';

function PrevButton(props) {
  let { className, onClick, isHidden } = props;
  return (
    <PrevButtonWrapper
      className={className + (isHidden ? ' slick-hidden' : '')}
      onClick={onClick}
    >
      <span className='iconfont'>&#xe600;</span>
    </PrevButtonWrapper>
  );
}
function NextButton(props) {
  let { className, onClick, isHidden } = props;
  return (
    <NextButtonWrapper
      className={className + (isHidden ? ' slick-hidden' : '')}
      onClick={onClick}
    >
      <span className='iconfont'>&#xe601;</span>
    </NextButtonWrapper>
  );
}

export class MySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseIn: false
    };
    this.slider = React.createRef();
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  render() {
    const bannerList = this.props.bannerList;
    const settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplayspeend: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      customPaging: function(i) {
        return (
          <span className='dot' onClick={() => this.slider.slickGoTo(i)} />
        );
      },
      prevArrow: <PrevButton isHidden={!this.state.isMouseIn} />,
      nextArrow: <NextButton isHidden={!this.state.isMouseIn} />
    };
    return (
      <SliderStyle
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Slider {...settings} ref={this.slider}>
          {bannerList &&
            bannerList.map((banner) => (
              <a href={banner.href} key={banner.src}>
                <img src={banner.src} alt='专题' />
              </a>
            ))}
        </Slider>
      </SliderStyle>
    );
  }
  handleMouseEnter() {
    this.setState({
      isMouseIn: true
    });
  }
  handleMouseLeave() {
    this.setState({
      isMouseIn: false
    });
  }
}

export default MySlider;
