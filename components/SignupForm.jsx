import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "./Layout";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  // const notify = () =>
  //   toast.error("Merci de remplir l'ensemble des champs", {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);

  const togglePasswordConfirmVisiblity = () => {
    setPasswordConfirmShown(passwordConfirmShown ? false : true);
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    axios
      .post("/api/users", data)

      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Vous allez recevoir un mail de confirmation",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        // <ToastContainer />;
        console.error(err);
      });
  };

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg ">
          <h1 className="text-2xl uppercase text-center m-10"> Inscription</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Prénom <span className="text-gray-400 text-md">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                id="lastname"
                name="lastname"
                {...register("lastname", {
                  required: " ❌ Champs obligatoire ",
                })}
              />
              {errors.lastname && (
                <span className="text-xs"> {errors.lastname.message}</span>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Nom de famille <span className="text-gray-400 text-md">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                id="firstname"
                name="firstname"
                {...register("firstname", {
                  required: " ❌ Champs obligatoire ",
                })}
              />
              {errors.firstname && <span> {errors.firstname.message}</span>}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email <span className="text-gray-400 text-md">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                id="email"
                name="email"
                {...register("email", {
                  required: " ❌ Adresse mail requise ",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "❌ entrez une adresse mail valide",
                  },
                })}
              />
              {errors.email && <span> {errors.email.message}</span>}
            </div>
          </div>

          {/* ________ PASSWORD SECTION  ________*/}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Password <span className="text-gray-400 text-md">*</span>
              </label>
              <div className="flex items-center">
                <input
                  className="appearance-none block w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="******************"
                  id="password"
                  type={passwordShown ? "text" : "password"}
                  {...register("password", {
                    required: " ❌ Password requis ",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                      message: "❌ Le mot de passe n'est pas au bon format",
                    },
                  })}
                />
                <RemoveRedEyeIcon
                  className="w-1/4"
                  onClick={togglePasswordVisiblity}
                />
              </div>
              {errors.password && <span> {errors.password.message}</span>}

              <p className="text-gray-600 text-xs italic">
                1 chiffre / 1 caractère spécial / 1 Majuscule / 8 caractères
              </p>
            </div>
          </div>

          {/* ________ PASSWORD ORGANISATION  ________*/}
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
                    {...register("organizationType", {
                      required: " ❌ Champs obligatoire ",
                    })}
                  >
                    <option value="Particulier">Particulier</option>
                    <option value="Collectivité">Collectivité</option>
                    <option value="Association">Association</option>``
                    <option value="Entreprise"> Entreprise</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Siret
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="siretNumber"
                name="siretNumber"
                type="text"
                defaultValue="1"
                {...register("siretNumber")}
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
                defaultValue=""
                {...register("managerName")}
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
                Denomination
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="organizationName"
                name="organizationName"
                defaultValue={""}
                type="text"
                {...register("organizationName")}
              />
            </div>
          </div>

          {/* ________ PASSWORD ADRESSE  ________*/}

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
                Adresse<span className="text-gray-400 text-md"> *</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address1"
                name="address1"
                type="text"
                {...register("address1", {
                  required: " ❌ Champs obligatoire ",
                })}
              />

              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address2"
                name="address2"
                defaultValue=""
                type="text"
                {...register("address2")}
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
                {...register("zipCode", {
                  required: " ❌ Champs obligatoire ",
                })}
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
                {...register("city", {
                  required: " ❌ Champs obligatoire ",
                })}
              />
            </div>

            {/* ________ PASSWORD TELEPHONE  ________*/}

            <div className="w-full md:w-2/3 px-3  mt-4 md:mb-10">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
                Numero de téléphone
              </label>
              <Controller
                control={control}
                name="phone"
                id="phone"
                defaultValue=""
                className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                render={({
                  field: { onChange, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <PhoneInput
                    country={"fr"}
                    selected={value}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>

          <button
            type="submit"
            className="py-2 px-4   bg-third hover:bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg mb-10 "
          >
            Créer mon profil
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SignupForm;
