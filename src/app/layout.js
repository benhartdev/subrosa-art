import Header from "@/components/Header";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
