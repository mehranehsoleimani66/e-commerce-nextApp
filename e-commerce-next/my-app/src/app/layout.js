import { ToastContainer } from "react-toastify";
import Header from "../../components/layout/header";
import ProgressBarNext from "../../components/libraries/ProgressBarNext";
import BootstrapClient from "../../components/libraries/bootstrap";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ProgressBarNext>
          <Header />
          {children}
          <BootstrapClient />
          <ToastContainer />
        </ProgressBarNext>
      </body>
    </html>
  );
}
