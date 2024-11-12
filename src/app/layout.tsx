

import "./globals.css";
import Header from "./components/header/page";
import Search from "./components/search/page";
import Catageries from "./components/catageries/page";


import Footer from "./components/footer/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
       
>    <Header/>
      <Search/>
      <Catageries/>
     
     
        {children}
        <Footer/>
      </body>
    </html>
  );
}
