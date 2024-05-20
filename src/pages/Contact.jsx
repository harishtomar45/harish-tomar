import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-900  min-h-screen grid w-full  grid-cols-1 gap-8 mx-auto pt-8 md:grid-cols-3 lg:gap-16 px-8 pb-10 md:pb-0">
        <div className="block md:h-96 h-36 md:max-w-xs max-w-2xl bg-zinc-900 border border-zinc-400 rounded-lg shadow hover:bg-zinc-800/20  dark:hover:bg-zinc-500">
          <a
            target=""
            className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 "
            href="">
            <span
              className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"></span>
            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              {/* <svg
                aria-hidden="true"
                focusable="false"
                className="octicon octicon-mark-github"
                viewBox="0 0 16 16"
                width="20"
                height="20"
                fill="currentColor"
                // style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"
                >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg> */}

              <svg
                class="h-8 w-8 text-slate-100"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </span>
            <div className="z-10 flex flex-col items-center">
              <span className="whitespace-nowrap text-sm font-medium duration-150 lg:text-2xl md:text-xl text-zinc-200 group-hover:text-white font-display ">
                tomarh729@gmail.com
              </span>
              <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                Email
              </span>
            </div>
          </a>
        </div>

        <div className="block md:h-96 h-36 md:max-w-xs max-w-2xl bg-zinc-900 border border-zinc-400 rounded-lg shadow hover:bg-zinc-800/20  dark:hover:bg-zinc-500">
          <a
            target=""
            className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 "
            href="https://github.com/harishtomar45">
            <span
              className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"></span>
            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              <svg
                aria-hidden="true"
                focusable="false"
                className="octicon octicon-mark-github"
                viewBox="0 0 16 16"
                width="20"
                height="20"
                fill="currentColor"
                // style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </span>
            <div className="z-10 flex flex-col items-center">
              <span className="whitespace-nowrap text-sm font-medium duration-150 lg:text-2xl md:text-xl text-zinc-200 group-hover:text-white font-display ">
                harishtomar
              </span>
              <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                GitHub
              </span>
            </div>
          </a>
        </div>

        <div className="block md:h-96 h-36 md:max-w-xs max-w-2xl bg-zinc-900 border border-zinc-400 rounded-lg shadow hover:bg-zinc-800/20  dark:hover:bg-zinc-500">
          <a
            target=""
            className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 "
            href="https://linkedin.com/in/harish-tomar45">
            <span
              className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"></span>
            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              <svg
                class="h-8 w-8 text-slate-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </span>
            <div className="z-10 flex flex-col items-center">
              <span className="whitespace-nowrap text-sm font-medium duration-150 lg:text-2xl md:text-xl text-zinc-200 group-hover:text-white font-display ">
                harish tomar
              </span>
              <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                Link
              </span>
            </div>
          </a>
        </div>

        {/* <div>GitHub</div>
            <div>link</div> */}
      </div>
    </>
  );
};

export default Contact;
