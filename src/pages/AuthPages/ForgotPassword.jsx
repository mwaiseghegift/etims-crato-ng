import PageMeta from "@/components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <>
      <PageMeta
        title="Welcome back! Sign in to your account"
        description="Sign in to your account to continue"
      />
      <AuthLayout>
        <ForgotPasswordForm />
      </AuthLayout>
    </>
  );
}
