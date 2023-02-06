import { useForm } from "react-hook-form";

export default function TestForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col w-48 ml-8">
                <label for="first">First name:</label>
                <input title="first" type="text" id="first" {...register("firstname", { required: true })} />
                {errors.firstname && <span className="bg-red-400 text-sm">PLEASE ENTER A FIRST NAME</span>}
                <label for="last">Last name:</label>
                <input type="text" id="last" {...register("lastname", { required: true })} />
                {errors.lastname && <span className="bg-red-400 text-sm">PLEASE ENTER A LAST NAME</span>}
                <button type="submit" className="bg-gray-400 mt-2 w-4/6 active:bg-green-300 hover:bg-green-200">Submit</button>
            </form>

            <h1></h1>
        </>
    )

}