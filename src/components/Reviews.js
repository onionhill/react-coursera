import Review from "./Review";

function Reviews() {
  return (
    <>
      <h2>This weeks Specials!</h2>
      <button>Online Menu</button>
      <h3>Chicago</h3>
      <div className="reviews">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </>
  );
}

export default Reviews;
