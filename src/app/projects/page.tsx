import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableCompoundsList from "@/components/Tables/TableCompounds";
import Card from "@/components/common/Card/ProjectsCardElement";
import { ProjectPrewiew } from "@/types/project_preview";


import { Metadata } from "next";
import Link from "next/link";

import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Проекты",
  description:
    "Список проектов",
};


export type ProjectPrewiew_data = ProjectPrewiew[];

const data: ProjectPrewiew_data = [
  {
    image: 'https://yastatic.net/naydex/yandex-search/Kdaa6e233/451e1aPvxs1Q/UkZhJqSDVJebSkQTpeU3rhX4DrbbA7Sxh28qL2blB07GJTuRkUm-jWM-k3UXkQosAs8ihXeSD8VfpUvHaMUuIlElgvSy8fZETjvE4wX04svUS6wA',
    name: 'Исследование свойств гексана',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit accusantium molestias voluptatum accusamus itaque cumque pariatur esse at voluptatem odio voluptates quibusdam quas magni veniam quod, blanditiis perferendis maiores.",
    tags:[
      "Hexane",
      "Solvents",
      'Fundamental'
    ],
    authors: [
        {
            id:1,
            name: 'Менделеев Д.А',
        },
        {
          id:2,
          name: 'Кижняк Д.А',
        },
        {
          id:3,
          name: 'Елесеев Д.А',
        }
    ]
  },
  {
    image: 'https://yastatic.net/naydex/yandex-search/Kdaa6e233/451e1aPvxs1Q/UkZhJqSDVJebSkQTpeU3rhX4DrbbA7Sxh28qL2blB07GJTuRkUm-jWM-k3UXkQosAs8ihXeSD8VfpUvHaMUuIlElgvSy8fZETjvE4wX04svUS6wA',
    name: 'Исследование свойств гексана',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit accusantium molestias voluptatum accusamus itaque cumque pariatur esse at voluptatem odio voluptates quibusdam quas magni veniam quod, blanditiis perferendis maiores.",
    tags:[
      "Hexane",
      "Solvents",
      'Fundamental'
    ],
    authors: [
        {
            id:1,
            name: 'Менделеев Д.А',
        },
        {
          id:2,
          name: 'Кижняк Д.А',
        },
        {
          id:3,
          name: 'Елесеев Д.А',
        }
    ]
  },
  {
    image: 'https://yastatic.net/naydex/yandex-search/Kdaa6e233/451e1aPvxs1Q/UkZhJqSDVJebSkQTpeU3rhX4DrbbA7Sxh28qL2blB07GJTuRkUm-jWM-k3UXkQosAs8ihXeSD8VfpUvHaMUuIlElgvSy8fZETjvE4wX04svUS6wA',
    name: 'Исследование свойств гексана',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit accusantium molestias voluptatum accusamus itaque cumque pariatur esse at voluptatem odio voluptates quibusdam quas magni veniam quod, blanditiis perferendis maiores.",
    tags:[
      "Hexane",
      "Solvents",
      'Fundamental'
    ],
    authors: [
        {
            id:1,
            name: 'Менделеев Д.А',
        },
        {
          id:2,
          name: 'Кижняк Д.А',
        },
        {
          id:3,
          name: 'Елесеев Д.А',
        }
    ]
  },
]


const ProjectListPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Проекты" />
      <Link
              href="compounds/add"
              className="inline-flex items-center justify-center bg-green-500 rounded-full px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 my-6"
            >
              Добавить проект
            </Link>
      <div className="grid grid-cols-6 gap-10 sm:grid-cols-4">
        {data.map((item, index) => (
          <Card key={index} project_data={item}/>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default ProjectListPage;
