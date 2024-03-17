import LoginBox from "./ui/mainpage/LoginBox";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="grid gap-4 max-size">
      <LoginBox/>
    </main>
  );
}
