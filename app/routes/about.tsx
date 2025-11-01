import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About page" },
    { name: "description", content: "Content of the about page" },
  ];
}

export default function Home() {
  return <h1>About page</h1>;
}
