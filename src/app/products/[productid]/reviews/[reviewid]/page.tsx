import { notFound } from "next/navigation";
import React from "react";
interface reviewIdProps {
  params: {
    reviewid: string;
    productid: string;
  };
}
const ReviewDetail: React.FC<reviewIdProps> = ({ params }) => {
  if (parseInt(params.reviewid) > 1000) {
    notFound();
  }
  return (
    <h1>
      review {params.reviewid} for product {params.productid}
    </h1>
  );
};

export default ReviewDetail;
