"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import IconClose from "../icons/IconClose";

interface NotififcationModalProps {
  isNotificationShawn: boolean;
  isError: boolean;
  setIsError: (value: boolean | ((prev: boolean) => boolean)) => void;
  setIsNotificationShawn: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
}

export const NotificationModal = ({
  isNotificationShawn,
  isError,
  setIsError,
  setIsNotificationShawn,
}: NotififcationModalProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const t = useTranslations("Notifications");

  useEffect(() => {
    if (isNotificationShawn) {
      onOpen();
    }
  }, [isNotificationShawn, onOpen]);

  const closeNotification = () => {
    onClose();
    setIsError(false);
    setIsNotificationShawn(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      radius="none"
      hideCloseButton={true}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      className="justify-between max-w-[360px] max-h-[318px]
            px-5 py-10 m-0 overflow-y-auto tab:overflow-y-visible bg-primary"
      classNames={{
        backdrop: `bg-primary ${isError ? "bg-opacity-0" : "bg-opacity-60"}`,
      }}
    >
      <ModalContent className="relative w-full h-full m-0 text-white-bg">
        <button
          type="button"
          onClick={closeNotification}
          aria-label="close button"
          className="cursor-pointer flex justify-center items-center absolute top-2 right-2 h-10 w-10 p-2"
        >
          <IconClose />
        </button>

        <ModalBody className="flex flex-col items-center gap-0 p-0">
          <h3 className={`text-xlsb mb-5`}>
            {isError ? t("error") : t("success")}
          </h3>
          <p className="mb-10 text-base text-center">
            {isError ? t("errorDescription") : t("successDescription")}
          </p>
          <Image
            src="/images/icons/error.svg"
            alt="error icon"
            width="0"
            height="0"
            sizes="100%"
            className={`${isError ? "block" : "hidden"} w-[100px] h-[100px]`}
          />
          <Image
            src="/images/icons/success.svg"
            alt="success icon"
            width="0"
            height="0"
            sizes="100%"
            className={`${isError ? "hidden" : "block"} w-[100px] h-[100px]`}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
