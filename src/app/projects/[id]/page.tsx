import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CompoundCard from "@/components/CompoundElements/CompoundCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Соединение",
  description:
    "Список веществ использующихся в лаборатории",
};

const ProjectPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Страница соединения" />

      <div className="flex flex-col gap-10">
      </div>
    </DefaultLayout>
  );
};

export default ProjectPage;
