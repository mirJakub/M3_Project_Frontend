import PropTypes from "prop-types";

import { Link } from "react-router-dom";

//import CommentsModule from "./EventComments";

const EventCard = ({ event }) => {
  const { _id, title, organiser, date, location, price, description, image } =
    event;

  return (
    <div className="event-card">
      <Link to={`/events${_id}`}>
        <h2>{title}</h2>
        <p>
          <strong>Organiser:</strong> {organiser}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <img src={image} alt="Event" />
      </Link>
      <div className="event-comments"></div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    organiser: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, // Change to PropTypes.string
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
