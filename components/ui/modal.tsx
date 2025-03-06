"use client";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

type ModalProps = {
  image?: boolean;
  imgSrc?: string;
  onClose?: MouseEventHandler;
  data?: [];
};

const Modal = ({ image, data, imgSrc, onClose }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
    >
      {image ? (
        <Image
          loader={() => imgSrc || ""}
          className="rounded-full"
          width={300}
          height={300}
          src={imgSrc as string}
          alt="modal"
        />
      ) : (
        <div
          className="bg-background p-4 rounded-lg max-sm:w-full max
          -md:w-[500px]"
        >
          <div>{data}</div>
        </div>
      )}
    </div>
  );
};

export default Modal;
