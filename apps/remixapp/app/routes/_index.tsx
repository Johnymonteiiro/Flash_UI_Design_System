import type { MetaFunction } from "@remix-run/node";
import { Button } from "@noria_components/ui";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>COMPONETS COME FROM NORIA UI KIT</h1>
      <Button name="login"/>
    </div>
  );
}
