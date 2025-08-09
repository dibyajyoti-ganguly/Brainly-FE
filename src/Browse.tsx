/* eslint-disable react-refresh/only-export-components */
import Sidebar from "./components/Sidebar";
import BrainDump from "./components/BrainDump";
import { createContext, useState, useRef } from "react";
import { useContentContext } from "./utils/ContentContext"; // ✅ Use context instead

type OverlayContextType = {
  showCard: boolean;
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OverlayContext = createContext<OverlayContextType>({
  showCard: false,
  setShowCard: () => {},
});

export const Browse = () => {
  const { fetchData } = useContentContext(); // ✅ Same instance as BrainDump
  const [showCard, setShowCard] = useState(false);

  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);

  return (
    <OverlayContext.Provider value={{ showCard, setShowCard }}>
      <div className="flex bg-gray-200 w-full min-h-screen">
        <Sidebar />
        <BrainDump />

        {showCard && (
          <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-black/30">
            <div className="flex flex-col gap-4 items-center bg-white font-onest rounded-xl shadow-lg px-8 pt-6 w-[360px] h-[390px]">
              <p className="text-2xl font-extrabold mb-4">Overlay Card</p>
              <input
                ref={ref1}
                placeholder="Link"
                className="bg-gray-200 h-10 w-full text-sm rounded-lg px-4"
              />
              <input
                ref={ref2}
                placeholder="Content Type"
                className="bg-gray-200 h-10 w-full text-sm rounded-lg px-4"
              />
              <input
                ref={ref3}
                placeholder="Title"
                className="bg-gray-200 h-10 w-full text-sm rounded-lg px-4"
              />
              <input
                ref={ref4}
                placeholder="Tags"
                className="bg-gray-200 h-10 w-full text-sm rounded-lg px-4"
              />
              <div className="flex w-full justify-evenly">
                <button
                  onClick={async () => {
                    const token = localStorage.getItem("token");
                    const headers: HeadersInit = {
                      "Content-Type": "application/json",
                    };
                    if (token) {
                      headers["Authorization"] = token;
                    }

                    const link = ref1.current?.value;
                    const type = ref2.current?.value;
                    const title = ref3.current?.value;
                    const rawTags = ref4.current?.value || "";
                    const tags = rawTags
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter((tag) => tag !== "");

                    const response = await fetch(
                      "http://localhost:3000/api/v1/content",
                      {
                        method: "POST",
                        headers,
                        body: JSON.stringify({
                          link,
                          type,
                          title,
                          tags,
                        }),
                      }
                    );

                    if (response.ok) {
                      // ✅ Clear form inputs
                      if (ref1.current) ref1.current.value = "";
                      if (ref2.current) ref2.current.value = "";
                      if (ref3.current) ref3.current.value = "";
                      if (ref4.current) ref4.current.value = "";

                      setShowCard(false);
                      await fetchData(); // ✅ Now this will update BrainDump's list
                    }
                  }}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-2xl cursor-pointer"
                >
                  Add Info
                </button>
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-2xl cursor-pointer"
                  onClick={() => setShowCard(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </OverlayContext.Provider>
  );
};
