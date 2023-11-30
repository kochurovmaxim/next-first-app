import { Inter } from "next/font/google";
import Header from "@/components/layout/header/Header";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Дантист Мастер - Стоматология Ижевск",
  description:
    "Стоматологические услуги в Ижевске. Имплантация, хирургия, протезирование, терапия, парадонтология. Позвоните нам сейчас! +7 (3412) 37-11-31",
  keywords:
    "стоматология Ижевск, имплантация, хирургия, протезирование, терапия, парадонтология",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
