import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
    axios
      .post("http://localhost://3000/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> Inscription</h1>

      <div className="m-10 border-2 w-3/5">
        <label htmlFor="name" className="m-2">
          Nom * :
        </label>

        <input
          className="w-2/5 m-2"
          type="text"
          id="LastName"
          name="LastName"
          {...register("LastName", {
            required: " ❌ Champs obligatoire ",
          })}
        />
        {errors.LastName && <span> {errors.LastName.message}</span>}
      </div>

      <div className="m-10 border-2 w-3/5">
        <label htmlFor="name" className="m-2">
          Prénom * :
        </label>

        <input
          className="w-2/5 m-2"
          type="text"
          id="FirstName"
          name="FirstName"
          {...register("FirstName", {
            required: " ❌ Champs obligatoire ",
          })}
        />
        {errors.FirstName && <span> {errors.FirstName.message}</span>}
      </div>

      <div className="m-10 border-2 w-3/5">
        <label htmlFor="email" className="m-2">
          {" "}
          Email :
        </label>
        <input
          className="w-2/5 m-2"
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
      <div className="m-10 border-2 w-3/5">
        <label htmlFor="password" className="m-2">
          {" "}
          Votre mot de passe
        </label>
        <input
          className="w-2/5 m-2"
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

        <label>Repeat password</label>
        <input
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
        <p> Le mot de passe doit contenir</p>
        <p> 1 chiffre / 1 caractère spécial / 1 Majuscule / 8 caractères </p>
      </div>

      <div>
        <select>
          <option value="2">Particulier</option>
          <option value="3">Collectivité</option>
          <option value="3">Association</option>``
          <option value="4"> Entreprise</option>
        </select>

        <label htmlFor="boss"> Nom du responsable</label>
        <input type="text" id="boss" name="boss" />

        <label htmlFor="nameOfCie"> Dénomination</label>
        <input type="text" id="nameOfCie" name="nameOfCie" />

        <label htmlFor="siret"> Siret : </label>
        <input type="number" />
      </div>

      <div>
        <label htmlFor="phone"> Téléphone : </label>

        <Controller
          control={control}
          name="phone"
          render={({
            field: { onChange, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <PhoneInput country={"fr"} selected={value} onChange={onChange} />
          )}
        />
      </div>

      <div>
        <label htmlFor="adrresse"> adresse :</label>
        <input
          className="w-2/5 m-2"
          type="text"
          id="adrresse"
          name="adrresse"
        />
        <label> Complément :</label>
        <input
          className="w-2/5 m-2"
          type="text"
          id="adrresse2"
          name="adrresse2"
        />
        {errors.adrresse && <span> {errors.adrresse.message}</span>}
      </div>

      <div>
        <label htmlFor="Cp"> code postal</label>
        <input
          type="number"
          id="codePostal"
          name="codePostal"
          {...register("codePostal", {
            required: " ❌   Entrez une code postal valide ",
            maxLength: 5,
          })}
        />
      </div>

      <div>
        <label htmlFor="city"> Ville : </label>
        <input
          type="text"
          id="city"
          name="city"
          // {...register("city", {
          //   required: " ❌   Entrez une ville  valide ",
          //   maxLength: 5,
          // })}
        />
      </div>

      <button type="submit"> Créer un compte</button>
    </form>
  );
}
