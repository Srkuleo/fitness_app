import { SignContentHeading } from "../headings";
import OAuth from "./oAuth";
import Separator from "./separator";
import Form from "./form";
import LinkQuestions from "./link-questions";

const SignContent = ({ page }: { page: "sign in" | "sign up" }) => {
  return (
    <div className="mx-auto w-[305px]">
      <SignContentHeading page={page} />
      <OAuth />
      <Separator />
      <Form page={page} />
      <LinkQuestions page={page} />
    </div>
  );
};

export default SignContent;
