import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectDB } from "@utils/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }: any) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ account, profile, user, credentials }) {
      if (!profile) return false; //undefined profile

      try {
        await connectDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in db
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name?.replace(" ", "").toLowerCase(),
            image: profile.image,
          });
        }
        return true;

      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };

    /*
    async signIn({ profile }: any) {
      try {
        await connectDB();
        // check if user exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        // if not, create a new user and save it
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };

//antigo

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    async session({ session }:any){
        const sessionUser = await User.findOne({
            email: session.user.email
        })
        session.user.id = sessionUser._id.toString();
        return session;
    },
    async signIn({ profile }:any) {
        try {
            await connectDB();
            //check if user exists
            const userExists = await User.findOne({
                email: profile.email
            });

            //if not, create a new user and save it
            if(!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })
            }
        } catch (error) {
            console.error(error);
            return false;
            
        }
    }
})

export { handler as GET, handler as POST};
*/