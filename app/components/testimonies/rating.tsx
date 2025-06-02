
import Rating from '@mui/material/Rating';

export default function TestimonyRating({value}) {

  return (
      <Rating name="read-only" value={value} readOnly />
  );
}
