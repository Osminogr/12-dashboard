import { COMPOUND_PREWIEW } from "@/types/compound_prewiew";
import Image from "next/image";
import Link from "next/link";



type CompoundRow = {
  id: number;
  preview?: string;
  name: string;
  experiments: number;
  calculations: number;
  articles: number;
}

const compoundData: CompoundRow[] = [
  {
    id:1,
    preview: "/images/preview/hexane.png",
    name: "Hexane",
    experiments: 5,
    calculations: 590,
    articles: 6,
  },
];



interface QueryData {
  data: CompoundRow[];
}



const TableCompoundsList = async () => {


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

        {compoundData.map((compound, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === compoundData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
              <div className="flex-shrink-0">
                {/* <Image alt="compound" width={48} height={48} /> */}
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {compound.name}
              </p>
            </div>


            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{compound.experiments}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{compound.calculations}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{compound.articles}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <Link href={"compounds/" + compound.id} className="text-meta-5">Страница вещества</Link>
            </div>
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCompoundsList;
