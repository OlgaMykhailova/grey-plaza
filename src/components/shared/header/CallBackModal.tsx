"use client";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Button from "../Button";

export default function CallBackModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const t = useTranslations("Buttons");

  return (
    <div>
      <Button variant="secondary" onClick={onOpen}>
        {t("callBack")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        radius="none"
        hideCloseButton={true}
        className="max-w-[360px] min-h-[411px] py-10 px-5"
        classNames={{ backdrop: "bg-primary bg-opacity-80" }}
      >
        <ModalContent className="">
          <ModalHeader className="relative min-h-[64px] border-b-[1px] border-purple-stroke">
            <button
              type="button"
              onClick={onClose}
              aria-label="close button"
              className="cursor-pointer flex justify-center items-center absolute top-[2px] right-4 h-12 w-12 p-3 bg-transparent icon-hover-rounded-purple"
            >
              <IconCloseX />
            </button>
          </ModalHeader>
          <ModalBody>
            <div>Test</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
