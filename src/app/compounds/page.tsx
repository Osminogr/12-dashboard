import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableCompoundsList from "@/components/Tables/TableCompounds";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Вещества",
  description:
    "Список веществ использующихся в лаборатории",
};

const CompoundsListPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Вещества" />

      <div className="flex flex-col gap-10">
        <TableCompoundsList />
      </div>
    </DefaultLayout>
  );
};

export default CompoundsListPage;
