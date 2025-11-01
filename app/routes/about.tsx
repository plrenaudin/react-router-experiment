import type { Route } from "../+types/root";
import { Button, TextField } from "@mui/material";
import { useFetcher } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About page" },
    { name: "description", content: "Content of the about page" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  let searchTerm = formData.get("searchTerm");
  console.log("server action", searchTerm);
  // simulate async operation
  // TODO: call real API here
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return { results: [] };
}

export default function About() {
  let fetcher = useFetcher();
  let busy = fetcher.state !== "idle";
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1>About page</h1>
        <fetcher.Form method="post" className="flex flex-col">
          <TextField name="searchTerm" placeholder="Search Term" />
          <Button type="submit" disabled={busy}>
            Search
          </Button>
        </fetcher.Form>
      </div>
    </main>
  );
}
