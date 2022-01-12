// import { useQuery, useQueryClient } from "react-query";
// import axios from "axios";

// function getEstimatesFromAPI(status) {
//     axios.get("/api/estimate").then((res) => setEstimatesFromAPI(res.data));
//   return Promise.resolve(etimatesOnServer.filter((e) => e.status === status));
// }

// function changeEstimatesStatusOnAPI(id, newStatus) {
//   // just to simulate changing a status server-side
//   etimatesOnServer.find((e) => e.id === id).status = newStatus;
//   console.log("the estimates list on server is now :", etimatesOnServer);
//   return Promise.resolve();
// }

// export default function ToggleButton({ status }) {
//   const client = useQueryClient();
//   const { data: estimates } = useQuery(["estimates", status], () =>
//     getEstimatesFromAPI(status)
//   );

//   if (!estimates) return "loading";

//   return (
//     <table>
//       <thead>
//         <tr>
//           <td>ID</td>
//           <td>validate</td>
//         </tr>
//       </thead>

//       <tbody>
//         {estimates.map((e) => (
//           <tr key={e.id}>
//             <td>{e.id}</td>
//             <td>
                        
//               <input
//                 type="checkbox"
//                 name="toggle"
//                 id="Green"
//                 className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
//                 checked={e.status === "VALIDATED"}
//                 onChange={async () => {
//                   await changeEstimatesStatusOnAPI(
//                     e.id,
//                     e.status === "VALIDATED" ? "TO_DO" : "VALIDATED"
//                   );
//                   client.refetchQueries(["estimates", "VALIDATED"]);
//                   client.refetchQueries(["estimates", "TO_DO"]);
//                 }}
//               />
//               <label
//                 htmlFor="Green"
//                 className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
//              ></label>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
