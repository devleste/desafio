import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  IconCalendar,
  IconGenderBigender,
  IconWorld,
  IconX,
} from "@tabler/icons-react";
import { contactService } from "../../services/contactService";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Input from "../UI/Input";
import { isEmpty } from "lodash";

const months = [
  { name: "janeiro", value: 1 },
  { name: "fevereiro", value: 2 },
  { name: "março", value: 3 },
  { name: "abril", value: 4 },
  { name: "maio", value: 5 },
  { name: "junho", value: 6 },
  { name: "julho", value: 7 },
  { name: "agosto", value: 8 },
  { name: "setembro", value: 9 },
  { name: "outubro", value: 10 },
  { name: "novembro", value: 11 },
  { name: "dezembro", value: 12 },
];
interface FilterModalProps {
  show: boolean;
  onClose: () => void;
}

function FilterModal(props: FilterModalProps) {
  const { register } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Transition appear show={props.show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        onClose={() => {
          props.onClose();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-0"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-3/4 md:w-3/4 max-w-xl h-auto md:shrink-0 transform overflow-hidden rounded-md bg-white text-left shadow-xl transition-all">
                <div className="bg-gray-100 flex justify-between items-center p-1.5 px-3">
                  <span className="text-lg font-bold text-primary">
                    Aplicar filtros
                  </span>
                  <button
                    className="h-8 w-8 flex items-center justify-center hover:text-red-500 rounded-lg"
                    onClick={props.onClose}
                  >
                    <IconX className="h-6 w-6" />
                  </button>
                </div>
                <div className="w-full px-16 py-12 flex flex-col gap-3">
                  <div className="input-wrapper w-full">
                    <label
                      htmlFor="gender"
                      className="flex items-center gap-1 mb-0.5 text-sm"
                    >
                      Idioma
                      <IconWorld className="h-4 w-4" />
                    </label>
                    <select
                      defaultValue={searchParams.get("language") as string}
                      id="gender"
                      {...register("language", {
                        onChange: (e) => {
                          const { name, value } = e.target;
                          isEmpty(value)
                            ? searchParams.delete(name)
                            : searchParams.set(name, value);
                          setSearchParams(searchParams);
                        },
                      })}
                      className="w-full py-1 bg-none ring-2 ring-primary-darker focus-visible:ring-primary rounded-sm text-sm"
                    >
                      <option disabled hidden selected className="text-sm">
                        Escolha o idioma
                      </option>
                      {contactService.getLanguages().map((lang) => {
                        return (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="input-wrapper w-full">
                    <label
                      htmlFor="gender"
                      className="flex items-center gap-1 mb-0.5 text-sm"
                    >
                      Gênero
                      <IconGenderBigender className="h-4 w-4" />
                    </label>
                    <select
                      defaultValue={searchParams.get("gender") as string}
                      id="gender"
                      {...register("gender", {
                        onChange: (e) => {
                          const { name, value } = e.target;
                          isEmpty(value)
                            ? searchParams.delete(name)
                            : searchParams.set(name, value);
                          setSearchParams(searchParams);
                        },
                      })}
                      className="w-full py-1 bg-none ring-2 ring-primary-darker focus-visible:ring-primary rounded-sm text-sm"
                    >
                      <option disabled hidden selected className="text-sm">
                        Filtre por gênero
                      </option>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                    </select>
                  </div>
                  <div className="input-wrapper w-full">
                    <label
                      htmlFor="gender"
                      className="flex items-center gap-1 mb-0.5 text-sm"
                    >
                      Mês de aniversário
                      <IconCalendar className="h-4 w-4" />
                    </label>
                    <select
                      defaultValue={searchParams.get("birthmonth") as string}
                      id="birthmonth"
                      {...register("birthmonth", {
                        onChange: (e) => {
                          const { name, value } = e.target;
                          isEmpty(value)
                            ? searchParams.delete(name)
                            : searchParams.set(name, value);
                          setSearchParams(searchParams);
                        },
                      })}
                      className="w-full py-1 bg-none ring-2 ring-primary-darker focus-visible:ring-primary rounded-sm text-sm"
                    >
                      <option disabled hidden selected className="text-sm">
                        Selecione o mês
                      </option>
                      {months.map((m) => {
                        return (
                          <option key={m.value} value={m.value}>
                            {m.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="input-wrapper w-full">
                    <label className="flex items-center gap-1 mb-0.5 text-sm">
                      Idade
                      <IconCalendar className="h-4 w-4" />
                    </label>
                    <div className="flex gap-6">
                      <Input
                        placeholder=""
                        label="De"
                        register={register("ageFrom", {
                          value: searchParams.get("ageFrom") as string,
                          onChange: (e) => {
                            const { name, value } = e.target;
                            isEmpty(value)
                              ? searchParams.delete(name)
                              : searchParams.set(name, value);
                            setSearchParams(searchParams);
                          },
                        })}
                      />
                      <Input
                        placeholder=""
                        label="Até"
                        register={register("ageTo", {
                          value: searchParams.get("ageTo") as string,
                          onChange: (e) => {
                            const { name, value } = e.target;
                            isEmpty(value)
                              ? searchParams.delete(name)
                              : searchParams.set(name, value);
                            setSearchParams(searchParams);
                          },
                        })}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchParams("");
                      props.onClose();
                    }}
                    className="bg-red-500 text-white font-bold text-sm py-2 mt-6 rounded-sm hover:bg-red-600"
                  >
                    Limpar filtros
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default FilterModal;
