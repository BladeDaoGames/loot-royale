import "./Rooms.css";

const Rooms = () => {
  const Box = () => {
    const numBoxes = 12; // Adjusted to 12 to match the provided code

    return (
      <>
        {Array.from({ length: numBoxes }).map((_, index) => (
          <div key={index} className="border-2 border-beige-100 bg-white-beige-50 rounded-xl h-12 w-12"></div>
        ))}
      </>
    );
  };

  return (
    <>
      {" "}
      <div className="flex justify-between items-center pl-6 gap-10 bg-beige-100">
        <div className="flex items-center gap-4">
          <img
            src="../../public/left_arrow.png"
            alt="Back Button"
            className="bg-white-100"
          />
          <div className="text-5xl mt-2 text-white"> Loot Royale </div>
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
      <div className="flex">
        <div className="flex flex-col justify-center items-center bg-white-beige-100 w-4/12">
          <div>
            <div className="text-beige-100 text-5xl pl-6 pt-2 tracking-wider">
              {" "}
              Inventory{" "}
            </div>
            <div className="flex items-center">
              <div className="border-2 border-beige-100 bg-white-beige-50 rounded-xl mx-8 grid grid-cols-4 gap-2 p-4">
                <Box/>
              </div>
            </div>
          </div>
          <div>
            <div className="text-beige-100 text-5xl pl-6 pt-4 tracking-wider">
              {" "}
              Crafting{" "}
            </div>
            <div className="flex items-center">
              <div className="border-2 border-beige-100 bg-white-beige-50 rounded-xl mx-8 grid grid-cols-4 gap-2 p-4">
                <Box/>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-40 h-12 bg-beige-100 border-1 pt-2 rounded-lg text-4xl text-white">CRAFT</button>
          </div>
        </div>
        <div className="bg-black w-8/12 mt-2 border">yo</div>
      </div>
    </>
  );
};

export default Rooms;
