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


async function CompoundsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Страница соединения" />

      <div className="flex flex-col gap-10">
        <CompoundCard data-id={id}/>
      </div>
    </DefaultLayout>
  );
};

export default CompoundsPage;
