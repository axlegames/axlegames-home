import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import Ban from "./banner.png";

interface Props {
  isOpen: boolean;
  close: Function;
  size?: string;
}

const Banner = (props: Props) => {
  return (
    <Modal
      size={props.size ?? "sm"}
      isOpen={props.isOpen}
      onClose={() => {
        window.open(
          "https://www.pinksale.finance/launchpad/0x8261A864541081B45c6e12e7b11e46D1Ab977fC2?chain=BSC",
          "_blank"
        );
        props.close();
      }}
      isCentered={true}
    >
      <ModalOverlay backdropFilter="blur(5px) hue-rotate(0deg)" />
      <ModalContent background={"none"} boxShadow="none">
        <ModalBody>
          <a
            style={{ outline: "none", border: "none" }}
            href="https://www.pinksale.finance/launchpad/0x8261A864541081B45c6e12e7b11e46D1Ab977fC2?chain=BSC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Ban} borderRadius="xl" />
          </a>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Banner;
