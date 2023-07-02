const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="socials">
          <div>LinkedIn</div>
          <div>Github</div>
        </div>
        <p>
          <a href="https://jon.pitans.co.uk">Jon Pitans Design</a>
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;
