import type { Contact } from "~/services/contact";
import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress, IconButton, Stack } from "@mui/material";
import { Form, useFetcher } from "react-router";

export default function ContactList({ contacts }: { contacts: Contact[] }) {
  const fetcher = useFetcher();
  const busy = fetcher.state !== "idle";
  const currentId = Number(fetcher.formData?.get("id"));
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Stack direction="row" alignItems="center" gap={1}>
            {contact.firstName} {contact.lastName}
            {busy && currentId === contact.id ? (
              <CircularProgress />
            ) : (
              <fetcher.Form method="post" name="delete">
                <input type="hidden" name="id" value={contact.id} />
                <IconButton
                  type="submit"
                  name="intent"
                  value="delete"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </fetcher.Form>
            )}
          </Stack>
        </li>
      ))}
    </ul>
  );
}
