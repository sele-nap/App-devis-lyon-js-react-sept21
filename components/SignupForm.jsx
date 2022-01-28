import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "./Layout";

const SignupForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    handleSubmit,
    setError,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      organizationType: "INDIVIDUAL",
    },
  });

  const organizationType = watch("organizationType");
  const isIndividual = organizationType === "INDIVIDUAL";

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
        if (err?.response?.status === 409) {
          setError("email", {
            type: "manual",
            message: "❌ e-mail indisponible",
          });
        }
      });
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Prénom <span className="text-gray-400 text-md">*</span>
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
            {errors.firstname && (
              <span className="text-xs"> {errors.firstname.message}</span>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nom de famille <span className="text-gray-400 text-md">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email <span className="text-gray-400 text-md">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="email"
              name="email"
              {...register("email", {
                required: " ❌ Adresse mail requise ",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "❌ Entrez une adresse e-mail valide",
                },
              })}
            />
            {errors.email && (
              <span className="text-xs">{errors.email.message}</span>
            )}
          </div>
        </div>

        {/* ________ PASSWORD SECTION  ________*/}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Mot de passe <span className="text-gray-400 text-md">*</span>
            </label>
            <div className="flex items-center">
              <input
                className="appearance-none block w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="******************"
                id="password"
                name="password"
                // type="text"
                type={passwordShown ? "text" : "password"}
                {...register("password", {
                  required: " ❌ Mot de passe requis ",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                    message: "❌ Le mot de passe n'est pas au bon format",
                  },
                })}
              />
            </div>
            {errors.password && (
              <span className="text-xs"> {errors.password.message}</span>
            )}
            <div className="flex items-center">
              <p className="text-gray-600 text-xs italic">
                1 chiffre / 1 caractère spécial / 1 Majuscule / 8 caractères
              </p>
              <RemoveRedEyeIcon
                className="w-1/4 cursor-pointer"
                onClick={togglePasswordVisiblity}
              />
            </div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6">
              Confirmation du mot de passe{" "}
              <span className="text-gray-400 text-md">*</span>
            </label>
            <input
              className="appearance-none block w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="passwordConfirm"
              name="passwordConfirm"
              type={passwordShown ? "text" : "password"}
              {...register("passwordConfirm", {
                required: "❌ Les deux mots de passe ne correspondent pas",
                validate: (value) =>
                  value === watch("password") || (
                    <span className="text-xs">
                      ❌ Les deux mots de passe ne correspondent pas
                    </span>
                  ),
              })}
            />

            {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
          </div>
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
                  {...register("organizationType", {
                    required: "❌ Champs obligatoire",
                  })}
                >
                  <option value="INDIVIDUAL">Particulier</option>
                  <option value="TOWN_HALL">Collectivité</option>
                  <option value="NON_PROFIT_ORGANIZATION">Association</option>
                  <option value="BUISNESS"> Entreprise</option>
                </select>
              </div>
            </div>
          </div>

          {!isIndividual && (
            <>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Siret
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="siretNumber"
                  name="siretNumber"
                  type="number"
                  size="14"
                  {...register("siretNumber", {
                    required: "❌ Champs obligatoire",
                    pattern: {
                      value: /\d{14}/,
                      message: "❌ Siret invalide",
                    },
                  })}
                />
                {errors.siretNumber && (
                  <span className="text-xs">{errors.siretNumber.message}</span>
                )}
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
                  {...register("managerName", {
                    required: "❌ Champs obligatoire",
                  })}
                />
                {errors.managerName && (
                  <span className="text-xs">{errors.managerName.message}</span>
                )}
              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
                  Denomination
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="organizationName"
                  name="organizationName"
                  defaultValue={""}
                  type="text"
                  {...register("organizationName", {
                    required: "❌ Champs obligatoire",
                  })}
                />
                {errors.organizationName && (
                  <span className="text-xs">
                    {errors.organizationName.message}
                  </span>
                )}
              </div>
            </>
          )}
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
              {...register("address1", {
                required: " ❌ Champs obligatoire ",
              })}
            />
            {errors.address1 && (
              <span className="text-xs"> {errors.address1.message}</span>
            )}

            <input
              className="mt-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              type="number"
              size="5"
              {...register("zipCode", {
                required: "❌ Champs obligatoire",
                pattern: {
                  value: /\d{5}/,
                  message: "❌ Code postal invalide",
                },
              })}
            />
            {errors.zipCode && (
              <span className="text-xs"> {errors.zipCode.message}</span>
            )}
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
            {errors.city && (
              <span className="text-xs"> {errors.city.message}</span>
            )}
          </div>

          {/* ________  TELEPHONE  ________*/}

          <div className="w-full md:w-2/3 px-3  mt-4 md:mb-10">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
              Numero de téléphone{" "}
              <span className="text-gray-400 text-md">*</span>
            </label>
            <Controller
              control={control}
              rules={{
                required: "❌ Champs obligatoire",
                pattern: {
                  value: /\d{11,12}/,
                  message: "❌ Numéro invalide",
                },
              }}
              name="phone"
              id="phone"
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
            {errors.phone && (
              <span className="text-xs"> {errors.phone.message}</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={`${
            !isValid ? "opacity-70 cursor-not-allowed" : ""
          } py-2 px-4 hover:bg-yellow-300 bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10`}
        >
          Créer mon profil
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
