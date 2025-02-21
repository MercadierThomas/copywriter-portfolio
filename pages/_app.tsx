import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thomas Mercadier - Email Marketer Technophile</title>
        <meta name="description" content="Spécialiste des emails convertisseurs avec une expertise technique (React Email, Resend). Boostez vos taux d'ouverture dès aujourd'hui." />
        <meta name="keywords" content="email marketing, copywriter technique, SaaS onboarding, react email" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
