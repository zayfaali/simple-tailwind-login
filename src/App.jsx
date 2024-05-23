import "./App.css";

const App = () => {
  return (
    <>
      <div className="bold bg-indigo-300 h-screen w-screen">
        <div className="flex justify-center h-max items-center">
          <div className="bg-white border border-black h-auto w-auto rounded-lg mt-5 flex items-center flex-col px-8 py-8 shadow-2xl">
            <h1 className=" text-2xl font-mono">Login</h1>
            <div>
              <label htmlFor="username" className="font-mono">
                Username:
              </label>
              <input
                type="text"
                name="username"
                className="border-solid border-2 mt-1 rounded border-indigo-500 font-mono"
              />
            </div>
            <div>
              <label htmlFor="username" className="font-mono">
                Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                className="border-solid border-2 mt-1 rounded border-indigo-500"
              />
            </div>
            <button className="bg-indigo-300 mt-2 rounded-lg py-2 px-2 border-2 border-indigo-200 font-mono focus:bg-indigo-700 transition ease-in-out duration-500 transform hover:bg-indigo-700 active:text-white">
              Enter
            </button>
            <div>
              <input type="checkbox" name="check" className="mx-1" />
              <label htmlFor="check" className="font-mono">
                Remember Me?
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
