import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const response = await fetch("http://localhost:3000/api/public/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await response.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          ...token,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
