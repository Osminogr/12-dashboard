'use client'
import Image from "next/image";
import Link from "next/link";
import {fetcher} from "@/fetcher"
import useSWR from "swr";
import type { CompoundRow } from "./TableCompounds";


const endpoint = "/api/chemdata/reactions"


export type ReactionRow = {
  id: number;
  conditions: {id:number, literlal:string, value:number, unit:string}[];
  reactants: CompoundRow[];
  products: CompoundRow[];

}

let reactionData: ReactionRow[] = [
  {
    "id": 1,
    "conditions": [
        {
            "id": 1,
            "literlal": "н.у.",
            "value": 273.15,
            "unit": "К"
        }
    ],
    "reactants": [
        {
            "id": 4,
            "name": "Water",
            "smiles": "O"
        },
        {
            "id": 10,
            "name": "SO2",
            "smiles": "OSO"
        }
    ],
    "products": [
        {
            "id": 11,
            "name": "H2SO3",
            "smiles": "OS(=O)O"
        }
    ]
}
];

const joinCompoundNames =(arr: {id:number, name:string, smiles:string}[]) => arr.map(item => item.name).join(' + ')




const TableReactionsList = () => {
  const { data, error, isLoading } = useSWR(endpoint, fetcher, { refreshInterval: 5000 })

  let res: ReactionRow[] = data
  if (!isLoading) {
    reactionData = res
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 height:100%">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Найдено в базе
      </h4>
      
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Реакция
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

        {reactionData.map((reaction, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === reactionData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
              <div className="flex-shrink-0">
                {/* <Image alt="reaction" width={48} height={48} /> */}
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {joinCompoundNames(reaction.reactants)} → ({reaction.conditions.map(item => `${item.literlal}`).join(', ')}
) → {joinCompoundNames(reaction.products)}
              </p>
            </div>


            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">0</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">0</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">0</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <Link href={"reactions/" + reaction.id} className="text-meta-5">Страница вещества</Link>
            </div>
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default TableReactionsList;
