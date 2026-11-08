import Image from "next/image";
import { useTranslations } from "next-intl";

import { AboutLamp } from "@/components/about/AboutLamp";
import { TiltFrame } from "@/components/about/TiltFrame";
import {
  ABOUT_SCENES,
  holeStyle,
  itemSizes,
  itemStyle,
  sceneStyle,
  type SceneKey,
} from "@/components/about/about-scene-layout";
import { cn } from "@/lib/utils";

const IMAGE_CLASS = "pointer-events-none select-none";

const Z_CLASS: Record<number, string> = {
  10: "z-10",
  20: "z-20",
  30: "z-30",
};

type AboutSceneProps = {
  scene: SceneKey;
  className?: string;
};

export function AboutScene({ scene: key, className }: AboutSceneProps) {
  const t = useTranslations("AboutPage");
  const scene = ABOUT_SCENES[key];

  return (
    <div className={cn("about-scene isolate", className)} style={sceneStyle(scene)}>
      {scene.items.map((item, index) => {
        const style = itemStyle(scene, item);
        const zClass = Z_CLASS[item.z];

        if (item.kind === "lamp") {
          return (
            <AboutLamp
              key={index}
              item={item}
              sizes={itemSizes(item)}
              overlaySizes={itemSizes(item, item.overlay.width)}
              className={zClass}
              style={style}
            />
          );
        }

        if (item.kind === "frame") {
          return (
            <TiltFrame key={index} tilt={item.tilt} className={cn("contact-object", zClass)} style={style}>
              <Image
                src={item.photo.src}
                width={item.photo.width}
                height={item.photo.height}
                sizes={itemSizes(item, item.hole.width)}
                alt={t(`photos.${item.photoKey}`)}
                draggable={false}
                className={cn(
                  "contact-overlay object-cover",
                  IMAGE_CLASS,
                  item.oval && "rounded-pill",
                )}
                style={holeStyle(item.hole)}
              />
              <Image
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                sizes={itemSizes(item)}
                alt=""
                draggable={false}
                className={cn("relative size-full", IMAGE_CLASS)}
              />
            </TiltFrame>
          );
        }

        return (
          <Image
            key={index}
            src={item.image.src}
            width={item.image.width}
            height={item.image.height}
            sizes={itemSizes(item)}
            alt=""
            draggable={false}
            className={cn("contact-object", zClass, IMAGE_CLASS)}
            style={style}
          />
        );
      })}
    </div>
  );
}
