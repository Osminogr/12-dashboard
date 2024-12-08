import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableReactionsList from "@/components/Tables/TableReactions";

import { Metadata } from "next";
import Link from "next/link";

import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Реакции",
  description:
    "Реакции в базе",
};

const reactionsListPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Реакции" />
      <Link
              href="reactions/add"
              className="inline-flex items-center justify-center bg-green-500 rounded-full px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 my-6"
            >
              Добавить реакцию
            </Link>
      <div className="flex flex-col gap-10">
        <TableReactionsList />
      </div>
    </DefaultLayout>
  );
};

export default reactionsListPage;
