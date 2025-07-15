import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-purple-700">
      <SignUp 
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