import bcrypt from "bcryptjs";
import prisma from "~/lib/prisma";
import validator from "validator";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate input
    if (!body.email || !body.password) {
      return {
        success: false,
        message: "Email and password are required.",
      };
    }

    // Validate email
    if (!validator.isEmail(body.email)) {
      return {
        success: false,
        message: "Invalid email format.",
      };
    }

    // get the user
    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      return {
        success: false,
        message: "Email or password is invalid",
      };
    }

    const isValidPassword = await bcrypt.compare(body.password, user.password);

    if (!isValidPassword) {
      return {
        success: false,
        message: "Email or password is invalid",
      };
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!);
    setCookie(event, "VueNotesJWT", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      secure: process.env.NODE_ENV === "production",
    });

    return {
      success: true,
      message: "Log in successful!",
    };
  } catch (error: any) {
    if (error.code === "P2002") {
      // Duplicate email error
      throw createError({
        statusCode: 409,
        message: "Email already exists.",
      });
    }

    // Log the actual error for debugging purposes
    console.error(error);

    throw createError({
      statusCode: 500,
      message: "An error occurred during registration. Please try again later.",
    });
  }
});
