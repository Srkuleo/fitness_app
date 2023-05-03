import { SignContentHeading } from "../headings";
import OAuth from "./oAuth";
import Separator from "./separator";
import Form from "./form";
import LinkQuestions from "./link-questions";

export const SignContent = ({ page }: { page: "sign in" | "sign up" }) => {
  return (
    <div className="mt-24 max-w-[260px] xs:max-w-[295px]">
      <SignContentHeading page={page} />
      <OAuth />
      <Separator />
      <Form page={page} />
      <LinkQuestions page={page} />
    </div>
  );
};
