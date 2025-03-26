import React from "react";
import Resizer from "react-image-file-resizer";
import { MdOpenInNew } from "react-icons/md";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import "./eventCard.css";
import { bookmark } from "../../actions/events";
import { useDispatch } from "react-redux";

const EventCard = ({ item }) => {
  const dispatch = useDispatch();
  const { title, message, date, time, price, image, bookmarked } = item;

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        200,
        "WEBP",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleBookmark = () => {
    dispatch(bookmark(item._id));
  };

  return (
    <div className="event-card">
      <div className="event-img">
        <img src={image} alt="event" />
      </div> 
      <div className="event-info">
        <span className="event-date">{date}</span>
        <span className="event-title">{title}</span>
        <span className="event-message"> {message} </span>
      </div>
      <div className="event-extras">
        <div className="icons">
          <MdOpenInNew className="icon" />
          <div className="bookmark-container" onClick={handleBookmark}>
            {bookmarked ? (
              <BsFillBookmarkFill className="bookmark" color="#df861d" />
            ) : (
              <BsBookmark className="bookmark" />
            )}
          </div>
        </div>
        <p className="event-time"> {time}</p>
        <p className="event-price">{price === "" ? `Free` : `₦ ${price}`}</p>
      </div>
    </div>
  );
};

export default EventCard;
