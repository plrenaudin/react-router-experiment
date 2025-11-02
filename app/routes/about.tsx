import { Button, TextField } from "@mui/material";
import { Form, useFetcher, useNavigation } from "react-router";
import { deleteContact, getContacts, searchContacts } from "~/services/contact";
import type { Route } from "./+types/about";
import ContactList from "~/components/ContactList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About page" },
    { name: "description", content: "Content of the about page" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("searchTerm");

  const contacts = searchTerm
    ? await searchContacts(searchTerm)
    : await getContacts();
  console.log("loader", contacts);
  return { contacts };
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  console.log("formData", formData);
  let intent = formData.get("intent");
  if (intent === "delete") {
    await deleteContact(Number(formData.get("id")));
  }
}

export default function About({ loaderData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const contacts = loaderData.contacts;
  let busy = navigation.state !== "idle";

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1>About page</h1>
        <Form method="get" className="flex flex-col">
          <TextField
            name="searchTerm"
            placeholder="Search Term"
            type="search"
          />
          <Button type="submit" disabled={busy}>
            Search
          </Button>
        </Form>
        <ContactList contacts={contacts} />
      </div>
    </main>
  );
}
