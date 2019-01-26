import styled from 'styled-components';

export const PrevButtonWrapper = styled.div`
  position: absolute;
  z-index: 50;
  left: 0;
  top: 50%;
  margin-top: -25px;
  width: 40px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.4);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  line-height: 50px;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

export const NextButtonWrapper = styled.div`
  position: absolute;
  z-index: 50;
  right: 0;
  top: 50%;
  margin-top: -25px;
  width: 40px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.4);
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  line-height: 50px;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

export const SliderStyle = styled.div`
  position: relative;
  width: 100%;
  height: 270px;
  margin-bottom: 30px;
  border-radius: 6px;
  background-color: #eee;
  .slick-list {
    font-size: 0;
  }
  img {
    width: 100%;
    height: 270px;
  }
  .slick-dots {
    position: absolute;
    width: 250px;
    bottom: 8px;
    left: 50%;
    margin-left: -125px;
    text-align: center;
    font-size: 0;
    li {
      display: inline-block;
      background-color: hsla(0, 0%, 47%, 0.4);
      margin: 4px;
      .dot {
        display: inline-block;
        width: 25px;
        height: 2px;
        cursor: pointer;
      }
      &.slick-active {
        background-color: #fff;
      }
    }
  }
  /* css from official website*/
  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: 0;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    top: 0;
    left: 0;
  }
  .slick-track:after,
  .slick-track:before {
    display: table;
    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
`;
