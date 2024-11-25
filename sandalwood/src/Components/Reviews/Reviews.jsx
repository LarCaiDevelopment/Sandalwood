import "./Reviews.scss";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";


function Reviews() {
  const featurableWidgetId = "842ncdd8-0f40-438d-9c...";
  return (
    
    <div className="reviews">
        <p className="reviews__title">What our Customers have to say about us</p>
        <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
    </div>
  );
}

export default Reviews;
