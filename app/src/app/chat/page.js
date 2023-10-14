"use client";

import Head from "next/head";
import { useState } from "react";

export default function Chat() {
  return (
    <>
      <main className="bg-gray-900">
        <h1 class="text-center w-full bg-violet-600 py-4 text-white font-bold">
          Learn from your favorite cartoon character!
        </h1>
        <div
          id="chatSection"
          class="mt-8 flex flex-col px-4 gap-2 scroll-smooth overflow-x-hidden overflow-y-auto pb-6 h-[80vh]"
        ></div>
        <div class="flex w-full justify-center items-center fixed bottom-0 p-2 bg-slate-700">
          <input
            id="userInput"
            placeholder="Enter message..."
            class="p-2 border-purple-500 border-2 w-2/3 bg-gray-800 text-white text-sm"
          />
          <button
            id="sendButton"
            class="py-2 px-4 mx-4 bg-black text-purple-400 rounded-lg text-sm"
            disabled
          >
            Press <b>Enter</b> to send
          </button>
        </div>
      </main>
    </>
  );
}
