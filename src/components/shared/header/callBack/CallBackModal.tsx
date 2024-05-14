"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Button from "../../Button";
import CloseButton from "../../CloseButton";
import CallBackForm from "./CallBackForm";
import SectionTitle from "../../SectionTitle";

interface CallBackModalProps {
  closeHeaderMenu?: () => void;
}

export default function CallBackModal({ closeHeaderMenu }: CallBackModalProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const t = useTranslations();

  const handleOpen = () => {
    closeHeaderMenu?.();
    onOpen();
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleOpen}>
        {t("Buttons.callBack")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        radius="none"
        hideCloseButton={true}
        className="max-w-[360px] min-h-[564px] py-10 px-5 text-white-text"
        classNames={{ backdrop: "bg-primary bg-opacity-60" }}
      >
        <ModalContent className="relative bg-primary">
          <CloseButton onClick={onClose} />
          <ModalBody>
            <SectionTitle className="text-white-text">
              {t("Buttons.callBack")}
            </SectionTitle>
            <p className="mb-5 text-base text-white-text text-center">
              {t("WriteUs.leaveRequest")}
            </p>
            <CallBackForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
