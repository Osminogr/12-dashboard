import ECommerce from "@/components/Dashboard/E-commerce";
import ChemDash from "@/components/Dashboard/ChemDash";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Carbon | Система управления лабораторной информацией",
  description: "Общие данные",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ChemDash />
      </DefaultLayout>
    </>
  );
}
