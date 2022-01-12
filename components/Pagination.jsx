import next from "next";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
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

{
  /* _____________ JUST TESTING SOMETHING _____________ */
}

{
  /* <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
       <div className="-mt-px w-0 flex-1 flex">
        <a 
           href="#"
           className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
         >
          <BsArrowLeft
            className="mr-3 h-5 w-5 text-gray-400"
             aria-hidden="true"
          />
           Précédent
         </a>
       </div>
       <div className="hidden md:-mt-px md:flex">
         {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */
}
{
  /* <a
          href="#"
           className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
           aria-current="page"
         >
           1
         </a>
         <a
          href="#"
        className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
       >
          5
       </a>
       <a
          href="#"
           className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
          10
        </a>
         <a
         href="#"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
           15
        </a>
       <a
          href="#"
           className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
        20
         </a>
       <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
           ...
         </span>
       </div>
       <div className="-mt-px w-0 flex-1 flex justify-end">
         <a
           href="#"
           className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
         >
       Suivant
           <BsArrowRight
             className="ml-3 h-5 w-5 text-gray-400"
             aria-hidden="true"
           />
         </a>
       </div>
    </nav> */
}
