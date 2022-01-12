import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function EstimateList({ status }) {
  const router = useRouter();
  const { perPage = 5, currentPage = 1 } = router.query;
  const [estimates, setEstimates] = useState([]);
  const [limit] = useState(5);
  const [offset] = useState(1);
  // offset & limit

  useEffect(() => {
    axios
      .get(`/api/estimates?status=${status}&offset=${offset}&limit=${limit}`)
      .then(setEstimates);
  }, [status, offset, limit]);

  const setCurrentPage = (page) => {
    router.push(`/estimates?currentPage=${page}&perPage=${perPage}`, null, {
      scroll: false,
    });
  };

  return (
    
      {estimates.map((e) => (
       key={e.id}
      ))}
    
  );
}
