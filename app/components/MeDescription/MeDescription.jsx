"use client";

import Styles from "./MeDescription.module.css";
import { useStore } from "@/app/store/app-store";
import { useRouter } from "next/navigation";

// import { authorize } from "@/app/api/api-utils";
// import { endpoints } from "@/app/api/config";
// import { useEffect } from "react";

export const MeDescription = () => {
  const authContext = useStore();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
    authContext.logout();
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await authorize(endpoints.auth, authData);
  //       const data = await response.json();
  //       setResult(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className={Styles["about__page_user"]}>
      <h2 className={Styles["about__page_title"]}>Страница аккаунта</h2>
      <div className={Styles["about__page_field"]}>
        <h4 className={Styles["about__page_desc"]}>Имя пользователя:</h4>
        <p className={Styles["about__page_answer"]}>{useStore.name}</p>
      </div>
      <div className={Styles["about__page_field"]}>
        <h4 className={Styles["about__page_desc"]}>Email: </h4>
        <p className={Styles["about__page_answer"]}>Email</p>
      </div>
      <button
        onClick={handleLogout}
        className={`button ${Styles["about__exit-button"]}`}
      >
        Выход
      </button>
    </section>
  );
};
