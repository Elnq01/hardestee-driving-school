
import Rating from '@mui/material/Rating';

export default function TestimonyRating({value}:any) {

  return (
      <Rating name="read-only" value={value} readOnly />
  );
}
