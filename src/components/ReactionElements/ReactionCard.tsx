'use client'
import React from "react";
import ReactionCardPart from "@/components/ReactionElements/ReactionCardPart"
import ReactionExternalLink from "@/components/ReactionElements/ReactionExternalLink"
import ReactionImage from "@/components/ReactionElements/ReactionImage"
import { ReactionRow } from "@/components/Tables/TableReactions"
import {fetcher} from "@/fetcher"
import { useRouter } from 'next/navigation';
import useSWR from "swr";

interface reactionData {
  base_name: string;
  images: { name: string; url: string }[];
  links: { name: string; url: string }[];
  basedata: {
    name: string;
    description: string | null;
    compound: number | null;
  };
  products: { id: number; name: string; smiles: string }[];
  reactants: { id: number; name: string; smiles: string }[];
}


let card_data: reactionData = {
  "base_name": "Water + SO2 => H2SO3",
  "images": [],
  "links": [],
  "basedata": {
      "name": "",
      "description": "",
      "compound": null
  },
  "products": [
      {
          "id": 11,
          "name": "H2SO3",
          "smiles": "OS(=O)O"
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
  ]
}


interface Props {

  "data-id": number;

}

const ReactionCard: React.FC<Props> =  (props) => {
    let endpoint = ""
    let id = -1
    try {
        id = props['data-id']
        endpoint = "/api/chemdata/reactions_def/reaction_records/" + id
    } catch(err) {
        console.log(err)
    }
    const { data, error, isLoading } = useSWR(endpoint, fetcher, { refreshInterval: 5000 })
    const res: reactionData = data
    if (!isLoading) {
        card_data = res
    }
  return (
    <div className="border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 min-h-fit max-w-full">
        <h2 className="py-2 dark:font-white text-title-xl text-black-2">{card_data.base_name}</h2>
        <ReactionCardPart title='Изображения'>
        {card_data.images?.map((ext_link,key) => (
                <ReactionImage key={key} title={ext_link.name} link={ext_link.url}></ReactionImage>
            ))}
        </ReactionCardPart>
        
        
        <ReactionCardPart title='Общие данные'>
            <div className="col-span-full">
                {card_data.basedata?.description}
            </div>
        </ReactionCardPart>
        
        {/*Условия реакции*/}
        <ReactionCardPart title='Условия реакции'>
            Заглушка
        </ReactionCardPart>


        <ReactionCardPart title='Внешние источники'>
            {card_data.links?.map((ext_link,key) => (
                <ReactionExternalLink key={key} title={ext_link.name} link={ext_link.url}></ReactionExternalLink>
            ))}
        </ReactionCardPart>

        
        
        <ReactionCardPart title='Структуры'>
            Заглушка
        </ReactionCardPart>
        
        <ReactionCardPart title='Связанные эксперименты'>
            Заглушка
        </ReactionCardPart>

        <ReactionCardPart title='Связанные реакции'>
            Заглушка
        </ReactionCardPart>

        <ReactionCardPart title='Связанные статьи'>
            Заглушка
        </ReactionCardPart>

        <ReactionCardPart title='Связанные вычисления'>
            Заглушка
        </ReactionCardPart>

    </div>
  );
};

export default ReactionCard;
