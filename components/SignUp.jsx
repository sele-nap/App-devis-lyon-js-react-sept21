import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Layout from "./Layout";

export default function SignUp() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> Inscription</h1>

      {/* <div className="m-10 w-2/4 p-4 flex flex-row items-center">
        <label htmlFor="name" className="m-2">
          Nom * :
        </label>
        <input
          className="border-2 rounded-md m-2 p-1 border-gray-100 w-full"
          type="text"
          id="lastname"
          name="lastname"
          {...register("lastname", {
            required: " ❌ Champs obligatoire ",
          })}
        />
        {errors.lastname && <span> {errors.lastname.message}</span>}
      </div> */}

      {/* <div className="m-10 w-2/4 p-4 flex flex-row items-center">
        <label htmlFor="name" className="m-2">
          Prénom * :
        </label>
        <input
          className="border-2 rounded-md m-2 p-1 border-gray-100 w-full"
          type="text"
          id="firstname"
          name="firstname"
          {...register("firstname", {
            required: " ❌ Champs obligatoire ",
          })}
        />
        {errors.firstname && <span> {errors.firstname.message}</span>}
      </div> */}

      {/* <div className="m-10 w-2/4 p-4 flex flex-row items-center">
        <label htmlFor="email" className="m-2">
          Email :
        </label>
        <input
          className="border-2 rounded-md m-2 p-1 border-gray-100 w-full"
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
      </div> */}

      {/* <div className="m-10 w-2/4 p-4 flex flex-col items-center">
        <div className="flex items-center justify-around">
          <label htmlFor="password" className="">
            Votre mot de passe
          </label>
          <input
            className="border-2 rounded-md m-2 p-1 border-gray-100 w-full"
            id="password"
            type={passwordShown ? "text" : "password"}
            {...register("password", {
              required: " ❌ Password requis ",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                message: "❌ Le mot de passe n'est pas au bon format",
              },
            })}
          />
          <RemoveRedEyeIcon onClick={togglePasswordVisiblity} />
          {errors.password && <span> {errors.password.message}</span>}
        </div> */}
      {/* <div className="flex items-center justify-around mb-4">
          <label>Confirmez</label>
          <input
            className="border-2 rounded-md m-2 p-1 border-gray-100 w-full"
            name="confirmPassword"
            type={passwordConfirmShown ? "text" : "password"}
            {...register("password", {
              required: " ❌ Password requis ",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                message: "❌ Le mot de passe n'est pas au bon format",
              },
            })}
          />
          <RemoveRedEyeIcon onClick={togglePasswordConfirmVisiblity} />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>{" "} */}
      {/* <div className="text-sm italic text-center p-4">
          <p> Le mot de passe doit contenir</p>
          <p> 1 chiffre / 1 caractère spécial / 1 Majuscule / 8 caractères </p>
        </div>
      </div> */}

      {/* <div className="m-10 border-2 w-1/4 p-4 rounded-xl shadow-md ">
        <div className="flex flex-col"> */}
      {/* <div className="flex items-center justify-around mb-4">
            <label htmlFor="organizationType"> Type :</label>
            <select>
              <option value="2">Particulier</option>
              <option value="3">Collectivité</option>
              <option value="3">Association</option>``
              <option value="4"> Entreprise</option>
            </select>
          </div> */}
      {/* <div className="flex items-center justify-around mb-4">
            <label htmlFor="managerName"> Nom du responsable</label>
            <input
              className="border-2 rounded-md m-2 p-1 border-gray-100"
              type="text"
              id="managerName"
              name="managerName"
            />
          </div> */}
      {/* <div className="flex items-center justify-around mb-4">
            <label htmlFor="organizationName"> Dénomination</label>
            <input
              className="border-2 rounded-md m-2 p-1 w-3/5 border-gray-100"
              type="text"
              id="organizationName"
              name="organizationName"
            />
          </div> */}
      {/* <label htmlFor="siret"> Siret : </label>
          <input
            className="border-2 rounded-md m-2 w-3/5 p-1 border-gray-100"
            type="number"
            name="siretNumber"
            id="siretNumber"
          />
        </div>
      </div> */}

      <div className="m-10 border-2 w-3/5 p-4">
        {" "}
        <div>
          <label htmlFor="adrresse"> adresse :</label>
          <input
            className="w-2/5 m-2"
            type="text"
            id="address1"
            name="address1"
          />
          <label> Complément :</label>
          <input
            className="w-2/5 m-2"
            type="text"
            id="address2"
            name="address2"
          />
          {errors.address1 && <span> {errors.address1.message}</span>}
        </div>{" "}
        <div>
          <label htmlFor="zipCode"> code postal</label>
          <input
            type="number"
            id="zipCode"
            name="zipCode"
            {...register("zipCode", {
              required: " ❌   Entrez une code postal valide ",
              maxLength: 5,
            })}
          />
        </div>
        <div>
          <label htmlFor="city"> Ville : </label>
          <input type="text" id="city" name="city" />
        </div>{" "}
        <div>
          <label htmlFor="phone"> Téléphone : </label>

          <Controller
            control={control}
            name="phone"
            id="phone"
            render={({
              field: { onChange, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <PhoneInput country={"fr"} selected={value} onChange={onChange} />
            )}
          />
        </div>{" "}
      </div>

      <button type="submit" className=".ctaBtn">
        {" "}
        Créer un compte
      </button>
    </form>
  );
}
