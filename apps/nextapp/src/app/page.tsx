import { Button } from "@noria_components/ui";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl mb-7 font-bold">Components come from Noria UI Kit</h1>
        <Button name="Login" />
      </div>
    </main>
  );
}
