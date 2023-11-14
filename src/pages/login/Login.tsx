import "./Login.css";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Button, SocialLink } from "../../components";
import useCustomNavigation from "../../routing/Navigation";

const Login = () => {
  const { goToRooms } = useCustomNavigation();

  return (
    <>
      <div className="relative min-h-screen">
        <img
          className="object-cover w-full h-full absolute z-[-1]"
          src="/BackGround.png"
          alt="background"
        />
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
      </div>
      <div className="flex flex-col gap-4 pt-10 items-center absolute bottom-20 right-20 w-5/12 h-1/2 bg-white-beige-50 rounded-lg shadow-lg p-5 z-20">
        <h2 className="text-8xl">Loot Royale</h2>
        <Button
          onClick={goToRooms}
          className="w-4/12 h-4/12 shadow-lg rounded-lg bg-beige-100 text-white"
        >
          Play
        </Button>
        {/* Replace () => { } below with relevant function */}
        <Button
          onClick={() => {}}
          className="w-4/12 h-4/12 shadow-lg rounded-lg bg-beige-100 text-white"
        >
          How to Play
        </Button>
        <div className="flex justify-between items-center w-full mt-auto text-3xl">
          <p className="font-bold pl-4 underline">Feedback</p>
          <div className="flex gap-6">
            <SocialLink
              icon={<FaTwitter />}
              label="Twitter"
              className="text-twitter-100"
            />
            <SocialLink
              icon={<BsDiscord />}
              label="Discord"
              className="text-discord-100 pr-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
