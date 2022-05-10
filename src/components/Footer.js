const Footer = () => {
  console.log("footer");

  const year = new Date().getFullYear();

  return (
    <>
      <footer>© {year} Harshal Singh. All rights reserved</footer>
    </>
  );
};
export default Footer;
