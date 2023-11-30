import { Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";

interface ContactModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactElement | ReactElement[] | string;
}

function ContactModal(props: ContactModalProps) {
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
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
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
                <div className="bg-gray-100 flex justify-end p-1.5">
                  <button
                    className="h-8 w-8 flex items-center justify-center hover:text-red-500 rounded-lg"
                    onClick={props.onClose}
                  >
                    <IconX className="h-6 w-6" />
                  </button>
                </div>
                {props.children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ContactModal;
