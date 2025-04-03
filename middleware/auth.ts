export default defineNuxtRouteMiddleware(async (event) => {
  if (import.meta.client) return;

  const { $verifyJwtToken } = useNuxtApp();
  const token = useCookie("VueNotesJWT");

  const authRoutes = ["/login", "/register"];

  if (token.value) {
    try {
      $verifyJwtToken(token.value, process.env.JWT_SECRET!);

      if (authRoutes.includes(event.path)) {
        return navigateTo("/");
      }
    } catch (error) {
      token.value = null;
      return navigateTo("/login");
    }
  } else {
    if (!authRoutes.includes(event.path)) {
      return navigateTo("/login");
    }
  }
});
