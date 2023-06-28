import "./App.css";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <div className="form-control w-screen p-8">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter username.."
              className="input input-bordered w-screen"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <ul className="menu bg-base-300 rounded-box mt-4">
            <li>
              <details>
                <summary>username</summary>
                <ul>
                  <li className="bg-base-200">
                    <a>repository</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
