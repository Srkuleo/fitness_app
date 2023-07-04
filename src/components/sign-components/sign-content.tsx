import { SignContentHeading } from "../headings";
import OAuth from "./oAuth";
import Separator from "./separator";
import Form from "./form";
import LinkQuestions from "./link-questions";

export const SignContent = ({ page }: { page: "sign in" | "sign up" }) => {
  return (
    <div className="mx-auto pt-24 flex max-w-[280px] flex-col px-2 xs:max-w-[295px] xs:px-0">
      <SignContentHeading page={page} />
      <OAuth />
      <Separator />
      <Form page={page} />
      <LinkQuestions page={page} />
    </div>
  );
};
