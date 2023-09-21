import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { changeLocale } from "./actions";
import { cookies } from "next/headers";
import { Locale, translations } from "@/lib/i18n";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const cookieStore = cookies();
  const locale = (cookieStore.get("locale")?.value || "en") as Locale;

  return {
    title: translations[locale].home.title,
  };
}

export default function Home() {
  const cookieStore = cookies();
  const locale = (cookieStore.get("locale")?.value || "en") as Locale;
  return (
    <main className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter  sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                {translations[locale].home.title}
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                {translations[locale].home.paragraph}
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex flex-col sm:flex-row items-center gap-2">
                <Input
                  className="max-w-lg flex-1 bg-gray-800 text-white border-gray-900"
                  placeholder={translations[locale].home.placeholder}
                  type="email"
                />
                <Button className="bg-white text-black" type="submit">
                  {translations[locale].home.button}
                </Button>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100 space-x-2">
                <span>{translations[locale].home.subtitle}</span>
                <Link
                  className="underline underline-offset-2 text-white"
                  href="/terms">
                  {translations[locale].home.terms}
                </Link>
              </p>
              <form action={changeLocale} method="post">
                <input type="hidden" name="locale" value="en" />
                <button type="submit">{translations[locale].buttons.en}</button>
              </form>
              <form action={changeLocale} method="post">
                <input type="hidden" name="locale" value="es" />
                <button type="submit">{translations[locale].buttons.es}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
