"use client";

import { useEffect, useState, type FocusEvent, type PointerEvent } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  CONTACT_SCENE,
  objectSizes,
  objectStyle,
  overlayStyle,
  sceneStyle,
} from "@/components/contact/contact-scene-layout";
import { INSTANT, SHORT_SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const IMAGE_CLASS = "pointer-events-none select-none";

type ContactSceneProps = {
  className?: string;
};

export function ContactScene({ className }: ContactSceneProps) {
  const t = useTranslations("ContactPage");
  const [lampOn, setLampOn] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [phoneLatched, setPhoneLatched] = useState(false);
  const [touchOnly, setTouchOnly] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { lamp, table, phone, plant, overlay } = CONTACT_SCENE;
  const phoneUp = phoneHovered || phoneFocused || phoneLatched;

  useEffect(() => {
    const query = window.matchMedia("(hover: none)");
    const update = () => setTouchOnly(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function handlePhonePointerEnter(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType === "mouse") setPhoneHovered(true);
  }

  function handlePhonePointerDown(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType !== "mouse") setTouchOnly(true);
  }

  function handlePhoneFocus(event: FocusEvent<HTMLButtonElement>) {
    if (event.currentTarget.matches(":focus-visible")) setPhoneFocused(true);
  }

  function handlePhoneClick() {
    if (touchOnly) setPhoneLatched((up) => !up);
  }

  return (
    <div className={cn("contact-scene isolate", className)} style={sceneStyle()}>
      {/* Lamp */}
      <button
        type="button"
        aria-pressed={lampOn}
        aria-label={t(lampOn ? "lampOff" : "lampOn")}
        onClick={() => setLampOn((on) => !on)}
        className="contact-object z-10 block cursor-pointer"
        style={objectStyle(lamp)}
      >
        <motion.span
          aria-hidden="true"
          className="lamp-glow floor-lamp-glow pointer-events-none absolute -z-10"
          initial={false}
          animate={lampOn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={prefersReducedMotion ? INSTANT : SHORT_SPRING}
        />
        <Image
          src={lamp.image.src}
          width={lamp.image.width}
          height={lamp.image.height}
          sizes={objectSizes(lamp)}
          alt=""
          draggable={false}
          className={cn("size-full", IMAGE_CLASS, lampOn && "invisible")}
        />
        <Image
          src={overlay.lampOn.image.src}
          width={overlay.lampOn.image.width}
          height={overlay.lampOn.image.height}
          sizes={objectSizes(lamp, overlay.lampOn.width)}
          alt=""
          draggable={false}
          className={cn("contact-overlay", IMAGE_CLASS, !lampOn && "invisible")}
          style={overlayStyle(overlay.lampOn)}
        />
      </button>

      {/* Decor */}
      <Image
        src={table.image.src}
        width={table.image.width}
        height={table.image.height}
        sizes={objectSizes(table)}
        alt=""
        draggable={false}
        className={cn("contact-object z-20", IMAGE_CLASS)}
        style={objectStyle(table)}
      />
      <Image
        src={plant.image.src}
        width={plant.image.width}
        height={plant.image.height}
        sizes={objectSizes(plant)}
        alt=""
        draggable={false}
        className={cn("contact-object z-40", IMAGE_CLASS)}
        style={objectStyle(plant)}
      />

      {/* Phone */}
      <button
        type="button"
        aria-pressed={touchOnly ? phoneLatched : undefined}
        aria-label={t("phone")}
        onPointerEnter={handlePhonePointerEnter}
        onPointerLeave={() => setPhoneHovered(false)}
        onPointerDown={handlePhonePointerDown}
        onFocus={handlePhoneFocus}
        onBlur={() => setPhoneFocused(false)}
        onClick={handlePhoneClick}
        className="contact-object z-30 block cursor-pointer"
        style={objectStyle(phone)}
      >
        <Image
          src={phone.image.src}
          width={phone.image.width}
          height={phone.image.height}
          sizes={objectSizes(phone)}
          alt=""
          draggable={false}
          preload
          className={cn("size-full", IMAGE_CLASS, phoneUp && "invisible")}
        />
        <Image
          src={overlay.phoneUp.image.src}
          width={overlay.phoneUp.image.width}
          height={overlay.phoneUp.image.height}
          sizes={objectSizes(phone, overlay.phoneUp.width)}
          alt=""
          draggable={false}
          className={cn("contact-overlay", IMAGE_CLASS, !phoneUp && "invisible")}
          style={overlayStyle(overlay.phoneUp)}
        />
      </button>
    </div>
  );
}
