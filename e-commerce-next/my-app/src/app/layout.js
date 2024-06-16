import { ToastContainer } from "react-toastify";
import Header from "../../components/layout/header";
import BootstrapClient from "../../components/libraries/bootstrap";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <BootstrapClient />
        <ToastContainer />
      </body>
    </html>
  );
}
