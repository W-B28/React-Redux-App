import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';


export const AppForm = props => {
  console.log(props)
  const handleGetData = event => {
    props.getData()
  };

  return (
    <button onClick={handleGetData}>Get Statistics</button>
  )
  const mapStateToProps = state => {
    return{
      isFetchingData: state.isFetchingData
    };
  }
}
