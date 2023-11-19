import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./Provider";
import createServerClient from "@/lib/createServerClient";
import prismadb from "@/lib/prismadb";
import { User } from "@prisma/client";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "demoFarm",
  description: "demoFarm",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let prismaUser: User | null = null;
  if (user) {
    prismaUser = await prismadb.user.findFirst({
      where: {
        sub: user.id,
      },
    });
  }

  return (
    <html lang="uk">
      <body
        className={inter.className}
        style={{
          minHeight: "100vh",
        }}
      >
        <Provider user={user} prismaUser={prismaUser}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
