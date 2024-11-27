import "./Reviews.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

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

  return (
    <div className="reviews">
      <p className="reviews__title">What our Customers have to say about us</p>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000, // Adjust autoplay speed
          disableOnInteraction: true, 
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <SwiperSlide key={review.reviewId || index}>
              <div className="reviews__container_Wrapper">
                <div className="reviews__topContent">
                  <div>
                    {/* Display reviewer profile photo or fallback */}
                    <img
                      src={review.reviewer.profilePhotoUrl || "/default-avatar.png"}
                      alt={`${review.reviewer.displayName}'s profile`}
                      className="reviews__profile-photo"
                    />
                  </div>
                  <div className="reviews__reviewsAndName">
                  <p>{review.reviewer.displayName}</p>
                  <p>{new Date(review.createTime).toLocaleDateString()}</p>
                  </div>

                </div>
                <div className="reviews__midContent">
                  <p>{review.comment || ""}</p>
                </div>
                <div className="reviews__botContent">
                  <div className="review__stars">
                    {renderStars(review.starRating)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </Swiper>
    </div>
  );
}

export default Reviews;
