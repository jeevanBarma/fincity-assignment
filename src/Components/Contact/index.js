import Header from "../Header";
import "./index.css";
const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-card">
        <h2 className="contact-heading">Contact me</h2>
        <p className="contact-p">
          <span className="contact-span">Name:</span>Jeevan Barma
        </p>
        <p className="contact-p">
          <span className="contact-span">Email</span>:barmajeevan02@gmail.com
        </p>
        <p className="contact-p">
          <span className="contact-span">Phone:</span>9492525200
        </p>
      </div>
    </>
  );
};

export default Contact;
