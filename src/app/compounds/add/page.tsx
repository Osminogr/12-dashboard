'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useForm } from "react-hook-form";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {api} from "@/app/auth/utils"
import { AuthActions } from "@/app/auth/utils";
import { access } from "fs";
import { useRouter } from "next/navigation";

const { handleJWTRefresh, storeToken, getToken } = AuthActions();

type FormData = {
  name: string;
  smiles: string;
};

const CompoundsListPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();
  const router = useRouter()
  const onSubmit = (data: FormData) => {
      
      console.log(data);
      let token: string = getToken("access")  ?? ""
      const res = api.auth(token).post(
        {
          "name":data.name,
          "smiles": data.smiles
        },
        "/api/chemdata/compounds/"
      )
      console.log(res.json())
      router.push("/compounds")
  }
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Добавление соединения в базу" />

      <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Новое соединение
              </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Название соединения
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Hexane"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      SMILES
                    </label>
                    <input
                      {...register("smiles", { required: true })}
                      type="text"
                      placeholder="CCCCCC"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Страница на pubchem <span className="text-meta-3">Для автоматической загрузки данных</span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://pubchem.ncbi.nlm.nih.gov/compound/8058"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Добавить соединение
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CompoundsListPage;
