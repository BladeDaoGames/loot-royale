import { Button } from "../../components";
import RewardTable from "../../components/reward/rewardTable";
import useCustomNavigation from "../../routing/Navigation";

const Reward = () => {
  const { goToRooms } = useCustomNavigation();

  return (
    <>
      <div className="relative min-h-screen">
        <img
          className="object-cover w-full h-full absolute z-[-1]"
          src="/in-game.png"
          alt="background"
        />
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center justify-center">
          {/* You win header tag */}
          <div className="text-9xl-plus bg-text-gradient text-transparent bg-clip-text z-40 tracking-widest">
            YOU WIN
          </div>

          <div className="border border-beige-100 flex flex-col justify-center items-center w-full h-full p-4 rounded-lg bg-beige-75 -mt-32">
            <div className="relative w-11/12">
              {/* Table content */}
              <RewardTable/>

              {/* Arrow and YOU WIN text */}
            </div>

            {/* Back to lobby button */}
            <Button
              onClick={goToRooms}
              className="w-48 bg-beige-100 border-1 pt-2 rounded-lg text-5xl text-white shadow-right-bottom-medium mt-4 flex justify-center"
            >
              Back to lobby
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reward;
