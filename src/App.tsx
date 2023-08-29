import { useForm } from "react-hook-form"
import { Input } from "./atoms";

interface ContactInfo {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  message?: string;
}

const requestbinUrl = import.meta.env.VITE_REQUESTBIN_URL;

function App() {
  const { register, handleSubmit, control } = useForm<ContactInfo>();

  const sendContactInfo = handleSubmit(async (data) => {
    await fetch(
      requestbinUrl,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    )
  });

  return (
    <div className="container bg-white rounded-lg my-16 p-8 mx-auto">
      <form className="grid grid-cols-2 gap-x-4 gap-y-4" onSubmit={sendContactInfo}>
        <h1 className="text-primary font-medium text-3xl col-span-full">Contact Us</h1>

        <Input type="text" placeholder="First Name" control={control} name='firstName' />
        <Input type="text" placeholder="Last Name" control={control} name='lastName' />

        <div className="mt-8 col-span-full">
          <Input type="text" placeholder="Phone Number" control={control} name="phoneNumber" />
        </div>

        <div className="col-span-full">
          <Input type="text" placeholder="Email Address" control={control} name="emailAddress" />
        </div>

        <h3 className="text-primary font-medium text-xl mt-8 col-span-full">Message:</h3>
        <textarea className="outline-none col-span-full h-80 border border-primary p-2" {...register("message")} />

        <div className="flex col-span-full justify-end mt-8">
          <button type="submit" className="bg-primary border border-primary px-8 py-2 rounded text-white text-lg">Send</button>
        </div>
      </form>
    </div>
  )
}

export default App
