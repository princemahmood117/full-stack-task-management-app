import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {

    const [reviews,setReviews] = useState([])

    useEffect(()=> {
        fetch(`${import.meta.env.VITE_URL}/review`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    // console.log(reviews);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4" >
            {
                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
            
        </div>
    );
};

export default Reviews;