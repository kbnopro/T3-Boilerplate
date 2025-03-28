import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { signOut } from "@/server/auth";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <main>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
      This is home page
    </main>
  );
}
