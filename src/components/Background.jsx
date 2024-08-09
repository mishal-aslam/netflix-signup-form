import bgImage from '../assets/bg.jpg';

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
