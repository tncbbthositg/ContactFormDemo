function App() {
  return (
    <div className="container bg-white rounded-lg my-16 p-8 mx-auto">
      <h1 className="text-teal-600 font-medium text-3xl mb-4">Contact Us</h1>

      <form className="grid grid-cols-2 gap-x-4 gap-y-8">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />

        <input className="mt-8 col-span-full" type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Email Address" />
        
        <h3 className="text-teal-600 font-medium text-xl mt-8 col-span-full">Message:</h3>
        <input className="col-span-full" type="text" placeholder="Email Address" />

        <div className="flex col-span-full justify-end">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default App
