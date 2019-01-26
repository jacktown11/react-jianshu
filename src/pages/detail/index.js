import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../common/header';
import { DetailWrapper } from './style';
export class Detail extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <DetailWrapper>
          {this.props.isLogedIn ? (
            <p>这是文章页面</p>
          ) : (
            <Redirect to='/login' />
          )}
        </DetailWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogedIn: state.getIn(['site', 'isLogedIn'])
});

export default connect(
  mapStateToProps,
  null
)(Detail);
