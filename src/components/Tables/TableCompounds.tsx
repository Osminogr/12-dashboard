import { COMPOUND_PREWIEW } from "@/types/compound_prewiew";
import Image from "next/image";

const brandData: COMPOUND_PREWIEW[] = [
  {
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },
  {
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },
  {
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },
  {
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },
  {
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },{
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },
  {
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },
  {
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },{
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },
  {
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    linked: 3,
    experiments: 5,
    calculations: 590,
    articles: 6,
  },
  
];

const TableCompoundsList = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 height:100%">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Найдено в базе
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Вещество
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Записи
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Эксперементы
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Вычисления
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Статьи
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Ссылки
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
              <div className="flex-shrink-0">
                <Image src={brand.preview} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.linked}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.experiments}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.calculations}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.articles}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">Страница вещества</p>
            </div>
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCompoundsList;
