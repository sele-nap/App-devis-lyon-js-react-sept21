import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const SignupForm = () => {
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

  const onSubmit = async (data) => {
    console.log(data);
    axios
      .post("/api/users", data)
      .then((res) => {
        console.log(res.data);
        alert("all ok");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg ">
        <h1> Inscription</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Prénom
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Jane"
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
              Nom de famille
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Doe"
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
              Email
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

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
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
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Type de structure
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="2">Particulier</option>
                  <option value="3">Collectivité</option>
                  <option value="3">Association</option>``
                  <option value="4"> Entreprise</option>
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
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nom du responsable
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
              Denomination
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3">
              Adresse
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid"
              type="text"
            />

            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid"
              type="text"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Code Postal
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>

          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Ville
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>

          <div className="w-full md:w-2/3 px-3 mb-6 mt-4 md:mb-0">
            <Controller
              control={control}
              name="phone"
              id="phone"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          type="button"
          disabled=""
          className="py-2 px-4  bg-third hover:bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg "
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
