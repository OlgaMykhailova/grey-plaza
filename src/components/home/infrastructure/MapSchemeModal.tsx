"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import TextButton from "../../shared/buttons/TextButton";

export default function MapSchemeModal() {
  const t = useTranslations("Buttons");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div>
      <TextButton className="mt-16" onClick={onOpen}>
        {t("schema")}
      </TextButton>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        radius="none"
        hideCloseButton={true}
        className="max-w-[360px] min-h-[270px]"
        classNames={{ backdrop: "bg-primary bg-opacity-60" }}
      >
        <ModalContent className="relative bg-primary">
          {/* <CloseButton onClick={onClose} /> */}
          <ModalBody>
            <Image
              src={`/images/heroImages/heroRent.jpg`}
              width="0"
              height="0"
              alt="Map scheme"
              sizes="100%"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
