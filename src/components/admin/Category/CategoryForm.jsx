/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const CategoryForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit(data => onSubmit(data, reset))}
        className='w-1/2 mx-auto space-y-3'
      >
        <input
          type='text'
          placeholder='Category Name'
          className='w-full text-lg py-1 border-b-2 border-emerald-400 outline-none'
          autoFocus
          {...register("category", { required: true })}
        />
        {errors.category && (
          <span className='text-red-500 block'>Category is required!</span>
        )}

        <button className='group relative h-8 w-28 overflow-hidden bg-white text-base shadow-md'>
          <div className='absolute inset-0 w-5 bg-emerald-500/95 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
          <span className='relative group-hover:text-white text-black uppercase font-semibold tracking-wider'>
            save
          </span>
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
