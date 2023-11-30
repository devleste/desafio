import { IconFilter, IconLoader2, IconSearch } from "@tabler/icons-react";
import { useQuery } from "react-query";
import {
  Outlet,
  useMatch,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import ContactList from "../components/contacts/ContactList";
import ContactModal from "../components/modals/ContactModal";
import { contactService } from "../services/contactService";
import { useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import { Contact } from "../types/Contact";
import Input from "../components/UI/Input";
import FilterModal from "../components/modals/FilterModal";

function ContactsListView() {
  const [filter, setFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const matches = useMatch("/contacts/:contactid/*");
  const navigate = useNavigate();
  const { register } = useForm();
  const [searchParams] = useSearchParams();

  const {
    data: contacts,
    isFetching,
    isError,
    isFetched,
    refetch,
  } = useQuery("getContacts", {
    queryFn: () => {
      return contactService.getFiltered(searchParams);
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [searchParams, refetch]);

  const filteredContacts = useMemo(() => {
    if (filter.length === 0) return contacts;
    return contacts!.filter((item: Contact) => {
      const term = `${item.first_name} ${item.last_name} ${item.email}`;
      return term.toLowerCase().includes(filter.toLowerCase());
    });
  }, [filter, contacts]);

  if (isError)
    return (
      <div className="p-wrap h-96 flex items-center justify-center">
        <div className="text-xl font-semibold flex items-center gap-2 text-red-500">
          Houve um erro na requisição dos contatos{" "}
        </div>
      </div>
    );

  if (isFetching)
    return (
      <div className="p-wrap h-96 flex items-center justify-center">
        <div className="text-xl font-semibold flex items-center gap-3">
          <IconLoader2 className="animate-spin h-5 w-5" />
          Carregando Contatos
        </div>
      </div>
    );

  return (
    isFetched && (
      <>
        <div className="p-wrap flex mt-8 gap-4 my-4 justify-between md:justify-start">
          <div className="relative w-full md:max-w-lg">
            <Input
              placeholder="Buscar contatos"
              icon={IconSearch}
              register={register("term", {
                onChange: (e: any) => {
                  setFilter(e.target.value);
                },
              })}
            />
          </div>
          <button
            onClick={() => setShowFilters(true)}
            className="px-1 md:px-3 text-xs md:text-sm bg-white ring-2 ring-charcoal-green w-24 rounded-sm text-charcoal-green
              font-semibold focus-visible:ring-primary flex items-center justify-center gap-2 hover:text-primary-dark
              hover:ring-primary-dark"
          >
            <IconFilter className="h-4 w-4 min-w-max" />
            Filtros
          </button>
        </div>
        <div className="p-wrap text-sm leading text-gray-700 mb-2 mt-8">
          Contatos {contacts!.length > 0 && <>({filteredContacts!.length})</>}
        </div>
        <div className="p-wrap">
          <ContactList contacts={filteredContacts} />
        </div>
        {!!matches && (
          <ContactModal
            show={!!matches}
            onClose={() => navigate("/contacts/", { replace: true })}
          >
            <Outlet />
          </ContactModal>
        )}
        {showFilters && (
          <FilterModal
            show={showFilters}
            onClose={() => setShowFilters(false)}
          />
        )}
      </>
    )
  );
}
export default ContactsListView;
