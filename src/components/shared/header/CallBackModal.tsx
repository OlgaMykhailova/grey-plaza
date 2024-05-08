"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Button from "../Button";
import CloseButton from "../CloseButton";

interface CallBackModalProps {
  closeHeaderMenu?: () => void;
}

export default function CallBackModal({ closeHeaderMenu }: CallBackModalProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const t = useTranslations("Buttons");

  const handleOpen = () => {
    closeHeaderMenu?.();
    onOpen();
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleOpen}>
        {t("callBack")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        radius="none"
        hideCloseButton={true}
        className="max-w-[360px] min-h-[411px] py-10 px-5 text-white-text"
        classNames={{ backdrop: "bg-primary bg-opacity-60" }}
      >
        <ModalContent className="relative bg-primary">
          <CloseButton onClick={onClose} />
          <ModalBody>
            <div>Test</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
