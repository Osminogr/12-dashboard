import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableCompoundsList from "@/components/Tables/TableCompounds";
import Card from "@/components/common/Card/ProjectsCardElement";



import { Metadata } from "next";
import Link from "next/link";

import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Соединения",
  description:
    "Список веществ использующихся в лаборатории",
};

const CompoundsListPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Соединения" />
      <Link
              href="compounds/add"
              className="inline-flex items-center justify-center bg-green-500 rounded-full px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 my-6"
            >
              Добавить соединение
            </Link>
      <div className="grid grid-cols-6 gap-10">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        
      </div>
    </DefaultLayout>
  );
};

export default CompoundsListPage;
