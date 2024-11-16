import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Card from "@/components/common/Card/GroupCardElement";

import { Metadata } from "next";
import Link from "next/link";

import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Научные группы",
  description:
    "Список научных групп",
};

const CompoundsListPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Научные группы" />
      <Link
              href="groups/add"
              className="inline-flex items-center justify-center bg-green-500 rounded-full px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 my-6"
            >
              Добавить группу
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
