import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableCompoundsList from "@/components/Tables/TableCompounds";
import CompoundCard from "@/components/CompoundElements/CompoundCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Соединение",
  description:
    "Список веществ использующихся в лаборатории",
};

const CompoundsListPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Соединение <Name>" />

      <div className="flex flex-col gap-10">
        <CompoundCard />
      </div>
    </DefaultLayout>
  );
};

export default CompoundsListPage;
