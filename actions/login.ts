"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";
import { signIn } from "../src/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    // if (error instanceof AuthError) {
    //   switch (error.type) {
    //     case "CredentialsSignin":
    //       return { error: "Invalid Credentials!" };
    //     default:
    //       return { error: "Something went wrong!" };
    //   }
    // }
    // throw error;
  }
};
