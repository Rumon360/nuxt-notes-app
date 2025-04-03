import bcrypt from "bcryptjs";
import prisma from "~/lib/prisma";
import validator from "validator";

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

    // Validate password
    if (
      !validator.isStrongPassword(body.password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      return {
        success: false,
        message:
          "Your password must be at least 8 characters long and contain both lowercase and uppercase letters.",
      };
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(body.password, salt);

    // Create the new user
    await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        salt: salt,
      },
    });

    return {
      success: true,
      message: "Registration successful!",
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
