import HeadingText from "./heading-text";
import ExternalAuth from "./external-auth";
import Separator from "./separator";
import Form from "./form";
import LinkQuestions from "./link-questions";

//pitati gabrića za width na sign-in divu

const SignContent = ({ page }: { page: string }) => {
  return (
    <div className="mx-auto max-w-[295px]">
      <HeadingText page={page} />
      <ExternalAuth />
      <Separator />
      <Form page={page} />
      <LinkQuestions page={page} />
    </div>
  );
};

export default SignContent;
