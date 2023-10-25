import { useState } from "react";
import "./WaitingRoom.css";

const WaitingRoom = () => {
  //   const navigate = useNavigate();

  //   const handlePlayClick = () => {
  //     navigate("/rooms");
  //   };
  const TabInterface = () => {
    const [activeTab, setActiveTab] = useState("Players");

    const tabs = [{ label: "Players", disabled: false }];

    return (
      <ul className="mt-2 flex flex-wrap text-sm font-medium text-center text-beige-100 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab) => (
          <li key={tab.label}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (!tab.disabled) setActiveTab(tab.label);
              }}
              className={`inline-block px-6 rounded-t-lg text-2xl font-bold ${
                tab.disabled
                  ? "text-white cursor-not-allowed dark:text-beige-100"
                  : activeTab === tab.label
                  ? "text-white bg-beige-100"
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-black dark:hover:text-gray-300 bg-white border border-beige-100"
              }`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {" "}
      {/**Navbar section */}
      <div className="flex justify-between items-center pl-6 gap-10 bg-beige-100">
        <div className="flex items-center gap-4">
          <img
            src="../../public/left_arrow.png"
            alt="Back Button"
            className="bg-white-100"
          />
          <div className="text-6xl mt-2 text-white"> Loot Royale </div>
        </div>

        <div className="text-white pr-10 flex gap-5">
          <div>
            <div className="text-4xl"> 999,999,999,999 ETH</div>
            <div className="text-2xl -my-4 text-right"> 0x0f6a...1a60</div>
          </div>
          <div>
            <img src="../../public/setting.png" alt="" />
          </div>
        </div>
      </div>
      {/**bottom page layout section */}
      <div className="flex h-screen">
        {/**Left Page section */}
        <div className="flex flex-col items-center bg-white-beige-200/50 w-4/12">
          <div className="text-beige-100 text-5xl pl-6 pt-4 w-full text-left">
            Select Map
          </div>
          {/**Map container below */}
          <div className="flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-lg w-11/12 h-11/12 bg-beige-200/2">
            <img
              className="w-9/12 py-4"
              src="../../public/default_map.png"
              alt=""
            />
            <div className="flex justify-center items-center gap-10">
              <img src="../../public/polygon_arrow_left.png" alt="" />
              <div className="text-4xl -mb-1 tracking-wider text-beige-100">
                {" "}
                Ninja Village (10x10){" "}
              </div>
              <img src="../../public/polygon_arrow_right.png" alt="" />
            </div>
            <div className="text-center text-beige-100 font-thin border border-beige-100 bg-white-beige-50 w-10/12 h-8/12 text-3xl rounded-md shadow-md mt-2 mb-6">
              Drenched in Secrecy, a ninja village emerges from misty mountains,
              veiled in shadows and whispered legends.
            </div>
          </div>
          {/**Max player box */}
          <div className="w-11/12 py-2 border border-beige-100 text-beige-100 text-4xl flex justify-center gap-10 mt-4 rounded-md .shadow-right-bottom">
            <div>Max Player</div>
            <input
              type="number"
              id="numberInput"
              min="0"
              max="999"
              step="0.1"
              value="6"
              className="border border-beige-100 text-3xl text-right w-28 bg-white-beige-50"
            />
          </div>
          <button className="w-48 bg-beige-100 border-1 pt-2 rounded-lg text-5xl text-white shadow-lg mt-4">
              Apply
            </button>
        </div>
        {/**Right Page section */}
        <div className="bg-white-beige-200 w-8/12 h-full pl-4">
          {/**Section 1 with search, tabs and rooms Page section */}
          <div className="flex flex-col m-4">
            <div className="flex justify-end">
              <TabInterface />
            </div>
            <div className="bg-white-beige-50 w-full h-full border border-beige-100 rounded-md -mt-0.5">
              {/* Main scrollable card */}
              <div className="p-3 overflow-y-auto max-h-[500px]">
                {/* Multiple rows of smaller cards */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                  (row) => (
                    <div key={row} className="flex justify-between mb-4">
                      {/* Left small card */}
                      <div className="flex-1 bg-white border border-beige-100 mr-2 rounded-md p-4"></div>
                      {/* Right small card */}
                      <div className="flex-1 bg-white border border-beige-100 mr-2 rounded-md p-4"></div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/**Section 2 with Current reward and create room and quick join */}
          <div className="flex justify-between mt-4">
            <div className="flex text-5xl gap-10 mr-10">
              <button className="flex justify-center items-center w-48 h-18 bg-beige-100 text-white shadow-lg rounded-lg">
                create room
              </button>
              <button className="flex justify-center items-center w-48 h-18 bg-beige-100 text-white shadow-lg rounded-lg">
                quick join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingRoom;
