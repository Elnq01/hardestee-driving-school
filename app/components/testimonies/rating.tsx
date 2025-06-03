
import Rating from '@mui/material/Rating';

export default function TestimonyRating({value}:{value:number}) {

  return (
      <Rating name="read-only" value={value} readOnly />
  );
}
