import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-purple-700">
      <SignIn 
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-white"
          }
        }}
      />
    </div>
  );
}