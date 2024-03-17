"use client";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

import { useEffect } from "react";

import { useStore } from "./store/app-store";

export const App = (props) => {
  const store = useStore();

  useEffect(() => {
    store.checkAuth();
  }, []);

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
