import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_container';
import BookingForm from '../booking/booking_form';



class CastleShow extends React.Component{
  constructor(props){
    super(props);

    this.state = { loading: true };
  }

  componentDidMount(){
    this.props
    .fetchCastle(this.props.match.params.castleId)
    .then(() => {this.setState({ loading: false });});
  }

  componentWillReceiveProps(nextProps) {
    if(
      this.props.match.params.castleId !== nextProps.match.params.castleId
    ){
      this.props.fetchCastle(nextProps.match.params.castleId);
    }
  }

  renderAmenities() {
    const{
      is_AV_Equipment,
      is_ampleParking,
      is_carriage,
      is_wifi,
      is_oceanView,
      is_gardenView,price
    } = this.props.castle;

    const enviroment =
    ['is_AV_Equipment',
    'is_ampleParking',
    'is_carriage',
    'is_wifi',
    'is_oceanView',
    'is_gardenView'];

    return enviroment.map((criteria) => {
      switch (criteria) {
        case 'is_AV_Equipment':
          if (is_AV_Equipment) return <li key='AV'>Ample Parking</li> ;
          break;
        case 'is_ampleParking':
          if (is_ampleParking)
           return <li key='parking'>Ample Parking</li> ;
          break;
        case 'is_carriage':
          if (is_carriage)return <li key='carriage'>Carriage</li>;
          break;
        case 'is_wifi':
          if (is_wifi)return <li key='wifi'>Wifi</li>;
          break;
        case 'is_oceanView':
          if (is_oceanView) return <li key='ocean'>Ocean View</li>;
          break;
        case ('is_gardenView'):
          if (is_gardenView) return <li key='garden'>Garden View</li>;
          break;
      }
    });
  }


  render(){
    let a = this.props.castle;
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      );
    }

    const {
      city,
      title,
      price,
      host_id,
      imageUrl,
      host,
      bed_room,
      bath_room,
      max_guests,
      bath,
      discription,
      num_guests
    } = this.props.castle;

    const style = { backgroundImage: 'url(' + imageUrl + ')'};

    return(
      <div className='castle-show'>
        <div style={style} className='castle-image'></div>
        <div className='content'>
          <div className='CastleAndReview'>
            <div className='castleInfo'>
                <div className='summary'>
                  <h3>{title}</h3>
                  <p>{city}</p>
                  <p>
                    <span>{max_guests} guests</span>
                    <span>{bed_room} bedrooms</span>
                    <span>{bath_room} bathrooms</span>
                    <span>{bath} baths</span>
                  </p>
                </div>

                <div className='hostInfo'>
                  <p id='host'>Hosted by {host}</p>
                  <p> {num_guests} reviews</p>
                  <p id='description'>{discription}</p>
                </div>

                <div className='amenity'>
                    <h4>Amenities</h4>
                    <ul>
                    {this.renderAmenities()}
                    </ul>
                </div>
            </div>
            <ReviewIndexContainer />
          </div>
          <div className='bookingBar'>
            <BookingForm
                  openModal={this.props.openModal}
                  castle={this.props.castle}
                  clearBookingErrors={this.props.clearBookingErrors}
                  currentUser={this.props.currentUser}
                  createBooking={this.props.createBooking}
                  errors = {this.props.bookingErrors}
                />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CastleShow);
