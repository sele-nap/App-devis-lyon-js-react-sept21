import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../../../components/Layout";
import Swal from "sweetalert2";

export default function UserDetails() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  const [siretNumber, setSiretNumber] = useState("");
  const [managerName, setManagerName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();
  const {
    query: { id },
  } = router;
  const isUpdate = id !== "new";

  const saveUser = async () => {
    const formValues = {
      firstname,
      lastname,
      email,
      password,
      organizationType,
      siretNumber,
      managerName,
      organizationName,
      address1,
      address2,
      zipCode,
      city,
      phone,
    };
    try {
      if (isUpdate) {
        await axios.patch(`/api/users/${id}`, formValues).then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Profil mis à jour",
            showConfirmButton: false,
            timer: 2500,
          });
        });
      } else {
        await axios.post(`/api/users/${id}`, formValues);
      }
      router.push("/users");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id && isUpdate) {
      axios
        .get(`/api/users/${id}`)
        .then(
          ({
            data: {
              firstname,
              lastname,
              email,
              password,
              organizationType,
              siretNumber,
              managerName,
              organizationName,
              address1,
              address2,
              zipCode,
              city,
              phone,
            },
          }) => {
            setFirstName(firstname);
            setLastName(lastname);
            setEmail(email);
            setZipCode(zipCode);
            setCity(city);
            setPhone(phone);
            setPassword(password);
            setOrganizationType(organizationType);
            setSiretNumber(siretNumber);
            setManagerName(managerName);
            setOrganizationName(organizationName);
            setAddress1(address1), setAddress2(address2);
          }
        );
    }
  }, [isUpdate, id]);

  return (
    <Layout>
      <div>
        <div className="flex flex-col mb-10">
          <h1 className="text-center text-2xl mb-2"> Editer mon profil</h1>
          <span className="text-gray-400 text-md text-center">
            Les champs avec * ne sont pas modifiables
          </span>
        </div>
        <div className="flex items-center justify-center">
          <form
            className="w-full max-w-lg "
            onSubmit={async (e) => {
              e.preventDefault();
              await saveUser();
            }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Prénom
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full mt-4 ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nom de famille
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email <span className="text-gray-400 text-md">*</span>
                </label>
                <p className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 mb-5 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  {email}
                </p>
              </div>

              {/* ________  ORGANISATION  ________*/}
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <div>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Type de structure
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="organizationType"
                        name="organizationType"
                        value={organizationType}
                        onChange={(e) => setOrganizationType(e.target.value)}
                      >
                        <option value="INDIVIDUAL">Particulier</option>
                        <option value="TOWN_HALL">Collectivité</option>
                        <option value="NON_PROFIT_ORGANIZATION">
                          Association
                        </option>
                        <option value="BUISNESS"> Entreprise</option>
                      </select>
                    </div>
                  </div>
                </div>
                <>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Siret
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="siretNumber"
                      name="siretNumber"
                      type="text"
                      max="14"
                      value={siretNumber}
                      onChange={(e) => setSiretNumber(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Nom du responsable
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="managerName"
                      name="managerName"
                      type="text"
                      value={managerName}
                      onChange={(e) => setManagerName(e.target.value)}
                    />
                  </div>
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
                      Denomination
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="organizationName"
                      name="organizationName"
                      type="text"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  </div>
                </>
              </div>

              {/* ________   ADRESSE  ________*/}

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
                    Adresse<span className="text-gray-400 text-md"> *</span>
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="address1"
                    name="address1"
                    type="text"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />

                  <input
                    className="mt-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="address2"
                    name="address2"
                    type="text"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Code Postal
                    <span className="text-gray-400 text-md"> *</span>
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    max="5"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>

                <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ville
                    <span className="text-gray-400 text-md"> *</span>
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="city"
                    name="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full  mt-4 md:mb-10">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
                  Numero de téléphone{" "}
                  <span className="text-gray-400 text-md">*</span>
                </label>

                <input
                  name="phone"
                  id="phone"
                  className=" appearance-none block w-full
              bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4
              leading-tight focus:outline-none focus:bg-white
              focus:border-gray-500"
                  value={phone}
                  max="10"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="py-2 px-4 hover:bg-green-300 bg-green-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10"
              >
                Sauvegardez
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
