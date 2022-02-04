import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import getEstimates from "../models/estimate";

export default function Pagination(props) {
  const router = useRouter();
  const { perPage = 5, currentPage = 1 } = router.query;
  const [estimates, setEstimates] = useState([]);
  const [estimatesLoading, setEstimatesLoading] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const setCurrentPage = (page) => {
    router.push(`/estimates?currentPage=${page}&perPage=${perPage}`, null, {
      scroll: false,
    });
  };

  useEffect(() => {
    setEstimatesLoading(true);
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get(
        `/api/estimate?offset=${(currentPage - 1) * perPage}&limit=${perPage}`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setEstimate(res.data);
        setNumberOfPages(Math.ceil(res.headers["x-total-count"] / perPage));
      })
      .catch(console.error)
      .finally(() => {
        setEstimatesLoading(false);
      });
    return () => {
      source.cancel();
    };
  }, [currentPage, perPage]);

  return (
    <div>
      <ul className={{ opacity: estimatesLoading ? 0.5 : 1 }}>
        {estimate.map(({ id }) => (
          <li key={id}></li>
        ))}
      </ul>
      <nav>
        {new Array(numberOfPages)
          .fill()
          .map((_, i) => i + 1)
          .map((page) => {
            return (
              <a
                key={page}
                className="mr-5"
                href={`/estimates?currentPage=${page}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(page);
                }}
              >
                {page}
              </a>
            );
          })}
      </nav>
    </div>
  );
}

export async function getStaticProps() {
  const [estimate] = await getEstimates(5, 0);
  return {
    props: {
      estimate,
    },
  };
}
