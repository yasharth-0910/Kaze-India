import NextAuth from "next-auth"
import { authOptions } from "../../../../lib/auth"

const handler = NextAuth({
  ...authOptions,
  callbacks: {
	...authOptions.callbacks,
	signIn: async ({ user, account }) => {
	  // Your sign-in logic here
	  return true;
	},
  },
});

export { handler as GET, handler as POST }