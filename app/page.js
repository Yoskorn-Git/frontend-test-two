'use client'

import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  const interests = ['React', 'Next.js', 'Laravel', 'GraphQL', 'Nest.js'];

  return (
      <div className='bg-white max-w-md mx-auto mt-10 px-7 py-5 rounded-lg shadow-2xl' >
        <p className='text-xl font-semibold text-center '> Registration Form </p>
        <p className='text-sm text-gray-400	 font-light pb-4 text-center text'> DevCrew Test</p>
        <form onSubmit={handleSubmit(onSubmit)} className='text-sm font-semibold'>
          <div className="sm:flex sm:space-x-3">
            <div className="mb-4">
              <label className="block mb-1">Firstname</label>
              <input {...register('firstname', { required: true })} className="input_field" />
              {errors.firstname && <span className="error_text">This field is required</span>}
            </div>

            <div className="mb-4">
              <label className="block mb-1">Lastname</label>
              <input {...register('lastname', { required: true })} className="input_field" />
              {errors.lastname && <span className="error_text">This field is required</span>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input type="email" {...register('email', { required: true })} className="input_field" />
            {errors.email && <span className="error_text">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <input {...register('username', { required: true })} className="input_field" />
            {errors.username && <span className="error_text">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input type="password" {...register('password', { required: true })} className="input_field" />
            {errors.password && <span className="error_text">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-3">Interested Topic</label>
            <div className="space-y-2">
              {interests.map((interest, index) => (
                <div key={index} className='space-x-2 font-normal'>
                  <input type="checkbox" {...register('interests')} value={interest} id={interest} />
                  <label htmlFor={interest}>{interest}</label>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-900 w-full">Submit</button>
        </form>
      </div>

  );
}

export default SignUpForm;
