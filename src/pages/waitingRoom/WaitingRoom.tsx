import { useState } from "react";
import "./WaitingRoom.css";
import { BiUserPlus } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { FaEthereum } from "react-icons/fa";
import { Button, MapSelection, Navbar, TabInterface } from "../../components";
import useCustomNavigation from "../../routing/Navigation";

const WaitingRoom = () => {
  const { goToGame, goToRooms } = useCustomNavigation();
  const ethBalance = "999,999,999,999 ETH";
  const walletAddress = "0x0f6a...1a60";
  const tabs = [{ label: "Players", disabled: false }];

  return (
    <>
      {" "}
      {/**Navbar section */}
      <Navbar
        onBackClick={goToRooms}
        ethBalance={ethBalance}
        walletAddress={walletAddress}
      />
      {/**bottom page layout section */}
      <div className="flex h-screen">
        {/**Left Page section */}
        <MapSelection onApply={goToGame} />

        {/**Right Page section */}
        <div className="bg-white-beige-200 w-8/12 h-full pl-4">
          {/**Section 1 with search, tabs and rooms Page section */}
          <div className="flex flex-col m-4">
            <div className="flex justify-end">
              <TabInterface tabs={tabs} initialActiveTab="Players" />
            </div>
            <div className="bg-white-beige-50 w-full h-full border border-beige-100 rounded-md -mt-0.5">
              {/* Main right container card */}
              <div className="p-3 max-h-[600px]">
                {/**Row 1 for player cards */}
                <div className="flex gap-4">
                  {/**Klee */}
                  <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
                    <img className="py-4 z-1" src="/klee.png" alt="klee" />
                    <img
                      className="absolute top-0 left-0 -mt-1 -ml-1"
                      src="/owner_tag.png"
                      alt="owner_tag"
                    />
                    <div
                      className="absolute top-2 left-0 mt-2 ml-2 z-20 text-white text-4xl"
                      style={{ transform: "rotate(312deg)" }}
                    >
                      Owner
                    </div>
                    <div className="flex justify-between items-center w-9/12 -mt-2">
                      <div className="text-xl text-white bg-beige-100 rounded-md px-4 h-6">
                        Staked
                      </div>
                      <div className="text-4xl text-beige-100">Mob User 1</div>
                    </div>
                  </div>
                  {/**Venti */}
                  <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
                    <img className="py-4 z-1" src="/venti.png" alt="venti" />
                    <div className="flex justify-between items-center w-9/12  -mt-2">
                      <div className="text-xl text-white bg-beige-100 rounded-md px-4 h-6">
                        Staked
                      </div>
                      <div className="text-4xl text-beige-100">Mob User 1</div>
                    </div>
                  </div>
                  {/**Eula */}
                  <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
                    <img className="py-4 z-1" src="/eula.png" alt="eula" />
                    <div className="flex justify-between items-center w-9/12 -mt-2">
                      <div className="text-xl text-white bg-beige-100 rounded-md px-4 h-6">
                        Staked
                      </div>
                      <div className="text-4xl text-beige-100">Mob User 1</div>
                    </div>
                  </div>
                </div>
                {/**Row 2 for player cards */}
                <div className="flex gap-4 my-4">
                  {/**Invite player card 1 */}
                  <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
                    <div
                      className="my-4 flex justify-center items-center bg-white-beige-300 border-2 border-dotted border-beige-100 rounded-md"
                      style={{ width: "216px", height: "171px" }}
                    >
                      <BiUserPlus
                        className="text-beige-100"
                        style={{ width: "100", height: "100px" }}
                      />
                    </div>
                    <div className="flex justify-center items-center w-9/12 -mt-2 text-4xl text-beige-100">
                      Waiting Player
                    </div>
                  </div>
                  {/**Invite Player card 2 */}
                  <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
                    <div
                      className="my-4 flex justify-center items-center bg-white-beige-300 border-2 border-dotted border-beige-100 rounded-md"
                      style={{ width: "216px", height: "171px" }}
                    >
                      <BiUserPlus
                        className="text-beige-100"
                        style={{ width: "100", height: "100px" }}
                      />
                    </div>
                    <div className="flex justify-center items-center w-9/12 -mt-2 text-4xl text-beige-100">
                      Waiting Player
                    </div>
                  </div>
                  {/**Blocked */}
                  <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
                    <div
                      className="my-4 flex justify-center items-center bg-white-beige-100/10 border-2 border-dotted border-beige-100 rounded-md"
                      style={{ width: "216px", height: "171px" }}
                    >
                      <ImCross
                        className="text-beige-100"
                        style={{ width: "100", height: "100px" }}
                      />
                    </div>
                    <div className="flex justify-center items-center w-9/12 -mt-2 text-4xl text-beige-100">
                      Blocked
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**Section 2 with Current reward and create room and quick join */}
          <div className="flex justify-between mt-4 w-full text-5xl">
            <Button
              className="flex justify-center items-center w-48 bg-beige-100 text-white shadow-right-bottom-medium rounded-lg pt-2 ml-6"
              onClick={goToRooms}
            >
              Exit room
            </Button>
            <Button onClick={()=>{}} className="flex justify-center gap-4 items-center w-6/12 bg-beige-100 text-white shadow-right-bottom-medium rounded-lg pt-2 mr-6 pb-1">
              {" "}
              <div className="text-2xl text-beige-100 bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <FaEthereum />
              </div>
              <div className="-mb-1"> Stake 999 Eth to Start Game </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingRoom;
