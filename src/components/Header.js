import LogoSVG from "../icons/logo.svg";

function Header() {
  console.log("header");

  return (
    <header className="header">
      <div className="header__logo">
        <img width={24} height={24} src={LogoSVG} alt="close book" />
        <h2>WordBook</h2>
      </div>
    </header>
  );
}

export default Header;
