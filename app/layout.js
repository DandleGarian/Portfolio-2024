import "./globals.css";

import { Hero } from "../components/hero";
import { Nav } from "../components/nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Hero />
      </body>
    </html>
  );
}
