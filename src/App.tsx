function App() {
  return (
    <div className="container bg-white rounded-lg my-16 p-8 mx-auto">
      <form className="grid grid-cols-2 gap-x-4 gap-y-4">
        <h1 className="text-teal-600 font-medium text-3xl col-span-full">Contact Us</h1>
        
        <input type="text" placeholder="First Name" className="text-teal-600 border-b border-teal-600 text-xl py-2" />
        <input type="text" placeholder="Last Name" className="text-teal-600 border-b border-teal-600 text-xl py-2" />

        <div className="mt-8 col-span-full">
          <input type="text" placeholder="Phone Number" className="w-full text-teal-600 border-b border-teal-600 text-xl py-2" />
        </div>
        <div className="col-span-full">
          <input type="text" placeholder="Email Address" className="w-full text-teal-600 border-b border-teal-600 text-xl py-2" />
        </div>
        
        <h3 className="text-teal-600 font-medium text-xl mt-8 col-span-full">Message:</h3>
        <textarea className="col-span-full h-80 border border-teal-600" />

        <div className="flex col-span-full justify-end mt-8">
          <button type="submit" className="bg-teal-600 border border-teal-600 px-8 py-2 rounded text-white text-lg">Send</button>
        </div>
      </form>
    </div>
  )
}

export default App
