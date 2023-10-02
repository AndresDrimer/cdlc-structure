import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "nombre-de-usuario",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "tu-password",
        },
      },
      async authorize(credentials) {
     
        const user = { id: "1", name: "admin", password: "admin" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
