import Button from "./Button";
import CheckboxWithLabel from "./CheckBox";
import Heading from "./Heading";
import Input from "./Input";
import Para from "./Para";
import SignUp from "./SignUp";

const Form = () => {
  return (
    <>
      <div className="  max-w-sm sm:max-w-md m-auto my-5 py-10 px-8 sm:py-16 sm:px-16 bg-black bg-opacity-70 text-white rounded-md">
        <form action="">
          <Heading text="Sign In " />

          <Input type="email" placeholder="Email or phone number" />

          <Input type="password" placeholder="Password" />

          <Button value="Sign In" bgColor="#e50914" />

          <p className="text-center text-gray-400 text-base mt-3 font-medium">
            OR
          </p>

          <Button value="Use a Sign In code" bgColor="#404040" />
            <p className="text-white font-medium text-center flex justify-center items-center mt-4 text-sm">
              Forgot password?
            </p>
          <div className="flex justify-between pt-2 text-sm text-gray-400">

            <CheckboxWithLabel id="remember-me" label="Remember me" />
          </div>

          <SignUp />

          <Para />
        </form>
      </div>
    </>
  );
};

export default Form;
