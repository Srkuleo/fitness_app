import { SignContentHeading } from "../headings";
import OAuth from "./oAuth";
import Separator from "./separator";
import Form from "./form";
import LinkQuestions from "./link-questions";

export const SignContent = ({ page }: { page: "sign in" | "sign up" }) => {
  return (
    <div className="mx-auto mt-24 max-w-[260px] xs:mt-44 xs:max-w-[295px] md:mt-28">
      <SignContentHeading page={page} />
      <OAuth />
      <Separator />
      <Form page={page} />
      <LinkQuestions page={page} />
    </div>
  );
};
