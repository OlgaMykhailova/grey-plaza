"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import TextButton from "../../shared/buttons/TextButton";
import CloseButtonSecondary from "../../shared/buttons/CloseButtonSecondary";
import ZoomButton from "../../shared/buttons/ZoomButton";

export default function MapSchemeModal() {
  const t = useTranslations("Buttons");
  const [isZoomed, setIsZoomed] = useState(false);
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
        className="max-w-[560px] max-h-[311px] tablet:max-w-[728px] tablet:max-h-[404px] tablet:min-w-[728px] tablet:min-h-[404px] aspect-[360/200] tablet:aspect-[728/404]"
        classNames={{ backdrop: "bg-backdrop bg-opacity-90" }}
      >
        <ModalContent className="relative bg-primary">
          <CloseButtonSecondary onClick={onClose} />
          <ZoomButton
            isZoomed={isZoomed}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          <ModalBody className="overflow-auto touch-auto p-0">
            <Image
              src={`/images/infrastructureImages/mapScheme.webp`}
              width="0"
              height="0"
              alt="Map scheme"
              sizes="100%"
              className={`max-w-none h-auto transition-[width] duration-[600ms] ease-out-quart ${
                isZoomed ? "w-[150%]" : "w-full"
              }`}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
