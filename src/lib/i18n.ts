export enum Locale {
  en = "en",
  es = "es",
}

export const DEFAULT_LOCALE = Locale.en;

export const translations = {
  [Locale.en]: {
    home: {
      title: "Simple i18n example with Next.js Server Actions",
      paragraph:
        "This example provides a simple i18n implementation with Next.js Server Actions using cookies.",
      button: "Join the waitlist",
      subtitle: "Join the waitlist to get early access to the app.",
      terms: "Terms & Conditions",
      placeholder: "Enter your email",
    },
    buttons: {
      en: "English",
      es: "Spanish",
    },
  },
  [Locale.es]: {
    home: {
      title: "Ejemplo simple de i18n con Next.js Server Actions",
      paragraph:
        "Este ejemplo proporciona una implementación simple de i18n con Next.js Server Actions usando cookies.",
      button: "Únete a la lista de espera",
      subtitle:
        "Únete a la lista de espera para obtener acceso anticipado a la aplicación.",
      terms: "Términos y Condiciones",
      placeholder: "Ingresa tu email",
    },
    buttons: {
      en: "Inglés",
      es: "Español",
    },
  },
};

export type TranslationKey = keyof (typeof translations)[Locale];
