import UMNLogo from '../assets/UMN-Logo.svg';
import './Card.css'; // Import a CSS file for your card styles

function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <img src={UMNLogo} alt="University of Minnesota Logo" className="card-img" />
        <h3 className="card-title">University of Minnesota Full Stack Coding Bootcamp</h3>
        <p className="card-description">
          The University of Minnesota Full Stack Coding Bootcamp is a comprehensive 12-week program that provides students with a deep understanding of full-stack web development. Covering both front-end and back-end technologies, it offers a hands-on learning experience with real-world projects. Its diverse student body and experienced instructors committed to staying up-to-date with the latest industry trends make it a valuable source of tech talent.
        </p>
      </div>
    </div>
  );
}

export default Card;
