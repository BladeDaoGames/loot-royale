import React from "react";

interface NavbarProps {
  onBackClick: () => void;
  ethBalance: string;
  walletAddress: string;
}

class Navbar extends React.Component<NavbarProps> {
  render() {
    const { onBackClick, ethBalance, walletAddress } = this.props;

    return (
      <div className="flex justify-between items-center pl-6 gap-10 bg-beige-100">
        <div className="flex items-center gap-4" onClick={onBackClick}>
          <img
            src="/left_arrow.png"
            alt="Back Button"
            className="bg-white-100 button-hover-scale button-click-shrink cursor-pointer"
          />
          <div className="text-6xl mt-2 text-white"> Loot Royale </div>
        </div>

        <div className="text-white pr-10 flex gap-5">
          <div>
            <div className="text-4xl">{ethBalance}</div>
            <div className="text-2xl -my-4 text-right">{walletAddress}</div>
          </div>
          <div>
            <img src="/setting.png" alt="Settings" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
