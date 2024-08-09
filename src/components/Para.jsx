
const Para = () => {
  return (
    <div className="pt-5 text-gray-400 text-xs">
      This page is protected by Google reCAPTCHA to ensure you re not a bot.{' '}
      <a
        href="https://www.google.com/recaptcha/about/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Learn more
      </a>.
    </div>
  );
};

export default Para;
