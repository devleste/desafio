import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { contactService } from "../../services/contactService";

interface DeleteContactModalProps {
  show: boolean;
  id?: string;
  onClose: () => void;
}

function DeleteContactModal(props: DeleteContactModalProps) {
  function confirmDelete() {
    !!props.id && contactService.deleteContact(props.id);
    props.onClose();
  }

  return (
    <Transition appear show={props.show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white text-left shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 px-4 pt-6"
                >
                  Deletar contato?
                </Dialog.Title>
                <div className="mt-2 px-4 pb-4">
                  <p className="text-sm text-gray-500">
                    Tem certeza que quer enviar esse contato para a Lixeira?
                  </p>
                </div>

                <div className="bg-gray-200 py-4 sm:flex sm:flex-row-reverse sm:px-6 sm:gap-1 px-3">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-800 hover:text-white sm:mt-0 sm:w-auto"
                    onClick={props.onClose}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="ring-1 ring-inset ring-gray-300 bg-white inline-flex w-full justify-center rounded-md  text-red-600 px-3 py-2 text-sm font-semibold hover:text-white shadow-sm hover:bg-red-500 sm:w-auto"
                    onClick={confirmDelete}
                  >
                    Confirmar
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

export default DeleteContactModal;
