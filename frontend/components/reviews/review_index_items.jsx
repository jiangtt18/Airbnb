import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    const {reviewer_id,created_at,comment,reviewerName} = this.props.review;
    const date = new Date(created_at);
    const dates = date.toDateString().split(' ');


    return (
      <div>
        <p>{reviewerName}</p>
        <p> {dates[1]} {dates[3]} </p>
        <p>{comment}</p>
      </div>
    );
  }
}

export default ReviewIndexItem;