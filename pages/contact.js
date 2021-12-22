import Layout from "../components/Layout";
import next from "next";
import { useForm } from "react-hook-form";
import CtaBtn from "../components/CtaBtn"

export default function Contact() {
  const onSubmit = data => console.log(data);
  
  const {
    register,
    handleSubmit,
    setError,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
 
  });
  return (
  
<Layout>
<div className='flex items-center justify-center mt-16'>
  <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>

    <div className='mb-10'>
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Nom et Prénom
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text"  name='lastname'
                {...register('name', {
                  required: ' ❌ Champs obligatoire ',
                })}
              />
              {errors.name && (
                <span className='text-xs'> {errors.name.message}</span>
              )}
    </div>
    
    <div className="flex flex-wrap -mx-3 mb-10">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Adresse e-mail
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"    name='email'
                {...register('email', {
                  required: ' ❌ Adresse mail requise ',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '❌ Entrez une adresse e-mail valide',
                  },
                })}
              />
              {errors.email && (
                <span className='text-xs'>{errors.email.message}</span>
              )}
      </div>
    </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Votre meessage
        </label>
        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
      </div>
    </div>
    <div className="md:flex md:items-center">
      <div className="md:w-1/3">
        <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Send
        </button>
      </div>
      <div className="md:w-2/3"></div>
    </div>
  </form>
</div>
 </Layout>
)}
