
export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      {/* <div className="toast toast-center">
        <div className="alert alert-info">
          <span>Saved</span>
        </div>
      </div> */}

      <div className="flex flex-col">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl uppercase">
              Sales Dashboard
            </a>
          </div>
          <div className="flex-none text-nowrap">
          </div>
        </div>
        <div className="flex flex-grow h-[10vh] bg-violet-700">
          <div className="flex"></div>
        </div>
        <div className="flex flex-grow">
          <div className="flex flex-row flex-grow h-[70vh]">
            <div className="w-1/12 debug-border bg-violet-700"></div>
            <div className="w-10/12 debug-border bg-violet-700">
              <div
                style={{ width: "100%", height: "100%" }}
                className="flex justify-center items-center"
              >
                <canvas
                  width="320"
                  height="200"
                  className="shadow-2xl"
                />
              </div>
            </div>
            <div className="w-1/12 debug-border  bg-violet-700"></div>
          </div>
        </div>
        <div className="flex flex-grow h-[10vh] bg-violet-700"></div>

        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
          <aside className="items-center grid-flow-col">
            <p>Chris Guest © 2025</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            CommitId: 1234567890abcdef
          </nav>
        </footer>
      </div>
    </main>

  );
}
