import "./Reviews.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,EffectFade } from 'swiper/modules';
import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import GoogleSvg from '../../Assets/Images/icons8-google-48.png';

// Add autoplay to the Swiper options
function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl =
    "https://featurable.com/api/v1/widgets/ce0eb508-3701-421c-97d2-ce017a7543fd";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error fetching reviews: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.success) {
          setReviews(data.reviews);
        } else {
          throw new Error("Failed to fetch reviews.");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [apiUrl]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;

  // Helper function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="star full" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty" />);
      }
    }

    return stars;
  };
  const formatTimeDifference = (date) => {
    const now = new Date();
    const reviewDate = new Date(date);
    const diffInMilliseconds = now - reviewDate;
  
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30); // Approximate
    const diffInYears = Math.floor(diffInDays / 365); // Approximate
  
    if (diffInYears > 0) return `${diffInYears} ${diffInYears > 1 ? "years" : "year"} ago`;
    if (diffInMonths > 0) return `${diffInMonths} ${diffInMonths > 1 ? "months" : "month"} ago`;
    if (diffInDays > 0) return `${diffInDays} ${diffInDays > 1 ? "days" : "day"} ago`;
    if (diffInHours > 0) return `${diffInHours} ${diffInHours > 1 ? "hours" : "hour"} ago`;
    if (diffInMinutes > 0) return `${diffInMinutes} ${diffInMinutes > 1 ? "minutes" : "minute"} ago`;
    return `${diffInSeconds} ${diffInSeconds > 1 ? "seconds" : "second"} ago`;
  };

  return (
    <div className="reviews">
      <p className="reviews__title">What our Customers have to say about us</p>
      <Swiper
        modules={[Autoplay,EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false, 
        }}
        loop="true"
        effect="fade"
      >
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <SwiperSlide key={review.reviewId || index}>
              <div className="reviews__container_Wrapper">
                <div className="reviews__topContent">
                <div className="review__stars">
                    {renderStars(review.starRating)}
                  </div>
                </div>
                <div className="reviews__midContent">
                  <p>{review.comment || ""}</p>
                </div>
                <div className="reviews__botContent">
                  <div>
                    <img
                      src={review.reviewer.profilePhotoUrl}
                      alt={`${review.reviewer.displayName}'s profile`}
                      className="reviews__profile-photo"
                    />
                                      <div className="reviews__reviewsAndName">
                  <p className="reviews__name">{review.reviewer.displayName}</p>
                  <p className="reviews__date">{formatTimeDifference(review.createTime)}</p>
                  </div>
                  </div>
                  <img src={GoogleSvg} alt="Google Icon" />
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </Swiper>
      <a className="moreReviews" href="https://www.facebook.com/SandalwoodCustomCarpentry/reviews" aria-label="Facebook" target="_blank" rel="noopener noreferrer">More reviews</a>
    </div>
  );
}

export default Reviews;
