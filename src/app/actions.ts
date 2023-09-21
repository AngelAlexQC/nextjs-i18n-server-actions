"use server";

import { DEFAULT_LOCALE, Locale } from "@/lib/i18n";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function changeLocale(formData: FormData) {
  const localeValue = formData.get("locale");
  if (!localeValue || typeof localeValue !== "string") {
    return redirect("/");
  }

  const locale = localeValue as Locale;
  if (!(locale in Locale)) {
    cookies().set("locale", DEFAULT_LOCALE);
    return redirect("/");
  }

  cookies().set("locale", localeValue);
  return redirect("/");
}
