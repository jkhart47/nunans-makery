// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import DashboardLayout from "../components/DashboardLayout";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import '../styles/Grid.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<div>
      <Navbar />
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
      <Footer />
		</div>
  );
}

export default MyApp;
