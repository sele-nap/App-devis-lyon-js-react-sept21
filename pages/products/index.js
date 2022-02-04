// import { useState, useEffect } from "react";
// import Layout from "../../components/Layout";
// import axios from "axios";
// import { RiFileEditFill } from "react-icons/ri";
// import { RiDeleteBin5Fill } from "react-icons/ri";

// import Link from "next/link";
// import AdminLayout from "../../components/AdminLayout";

// const ListProduct = () => {
//   const deleteProduct = async (id) => {
//     if (confirm("Voulez vous vraiment supprimer ce produit définitivement ?")) {
//       await axios.delete(`/api/product/${id}`);
//       alert("produit bien supprimé");
//       setProduct((product) => product.filter((e) => e.id !== id));
//     }
//   };
//   // const deleteProduct = async (id) => {
//   //   if (
//   //     confirm(
//   //       "Voulez vous vraiment supprimer cette fiche client définitivement ?"
//   //     )
//   //   ) {
//   //     await axios.delete(`/api/product/${id}`);
//   //     alert("utilisateur bien supprimé");
//   //     setProduct((estimate) => product.filter((e) => e.id !== id));
//   //   }
//   // };
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios.get("/api/product").then((res) => setProduct(res.data));
//   }, []);
//   return (
//     <div>
//       <Layout title="Mes produits">
//         <AdminLayout>
//           <div className="table w-full p-2 mt-8">
//             <table className="w-full border">
//               <thead>
//                 <tr className="bg-gray-50">
//                   <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
//                     <div className="flex items-center justify-center">
//                       Numéro du produit
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                       />
//                     </div>
//                   </th>
//                   <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
//                     <div className="flex items-center justify-center">
//                       Désignation
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                       />
//                     </div>
//                   </th>

//                   <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
//                     <div className="flex items-center justify-center">
//                       Description
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                       />
//                     </div>
//                   </th>

//                   <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
//                     <div className="flex items-center justify-center">
//                       Prix unitaire
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                       />
//                     </div>
//                   </th>

//                   <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
//                     <div className="flex items-center justify-center">
//                       Editer
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                       />
//                     </div>
//                   </th>

//                   <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
//                     <div className="flex items-center justify-center">
//                       Suppression
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                       />
//                     </div>
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="border-t">
//                 {product.map(({ id, name, description, unitPrice }) => (
//                   <tr className="w-full text-center border-b my-2" key={id}>
//                     <td className="text-sm p-3"> {id}</td>
//                     <td className="text-sm p-3"> {name}</td>
//                     <td className="text-sm p-3"> {description}</td>
//                     <td className="text-sm p-3">{unitPrice} € </td>
//                     <td className="border">
//                       <Link href={`products/${id}`} passHref>
//                         <button className="cursor-pointer my-2">
//                           <RiFileEditFill size={25} />
//                         </button>
//                       </Link>
//                     </td>
//                     <td className="text-center border my-2">
//                       <button
//                         className="cursor-pointer"
//                         onClick={() => deleteProduct(id)}
//                       >
//                         <RiDeleteBin5Fill size={25} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="justify-center flex mt-4">
//               <Link href="/products/newProduct" passHref>
//                 <button className="ml-2 shadow w-64 h-12 bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded">
//                   {/* <ArrowBackIcon /> */}
//                   <span className="mx-2"> Créer une référence </span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </AdminLayout>
//       </Layout>
//     </div>
//   );
// };
// export default ListProduct;

export default function ProductsPage() {
  return null;
}
