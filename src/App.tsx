import { useForm } from "react-hook-form"

interface ContactInfo {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  message?: string;
}

function App() {
  const { register, handleSubmit } = useForm<ContactInfo>();

  const sendContactInfo = handleSubmit((data) => {
    console.log("I will eventually send these data", data);
  });

  return (
    <div className="container bg-white rounded-lg my-16 p-8 mx-auto">
      <form className="grid grid-cols-2 gap-x-4 gap-y-4" onSubmit={sendContactInfo}>
        <h1 className="text-primary font-medium text-3xl col-span-full">Contact Us</h1>
        
        <input type="text" placeholder="First Name" className="border-b border-primary text-xl py-2" {...register("firstName")} />
        <input type="text" placeholder="Last Name" className="border-b border-primary text-xl py-2" {...register("lastName")} />

        <div className="mt-8 col-span-full">
          <input type="text" placeholder="Phone Number" className="w-full border-b border-primary text-xl py-2" {...register("phoneNumber")} />
        </div>
        <div className="col-span-full">
          <input type="text" placeholder="Email Address" className="w-full border-b border-primary text-xl py-2" {...register("emailAddress")} />
        </div>
        
        <h3 className="text-primary font-medium text-xl mt-8 col-span-full">Message:</h3>
        <textarea className="col-span-full h-80 border border-primary p-2" {...register("message")} />

        <div className="flex col-span-full justify-end mt-8">
          <button type="submit" className="bg-primary border border-primary px-8 py-2 rounded text-white text-lg">Send</button>
        </div>
      </form>
    </div>
  )
}

export default App
