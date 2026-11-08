import { Children, type ReactNode } from "react";

import { Reveal, RevealItem } from "@/components/layout/Reveal";

const GROUP_SIZE = 6;
const GRID_CLASS = "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3";

type CardGridProps = {
  children: ReactNode;
};

function chunk(items: ReactNode[], size: number) {
  const groups: ReactNode[][] = [];
  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }
  return groups;
}

export function CardGrid({ children }: CardGridProps) {
  const groups = chunk(Children.toArray(children), GROUP_SIZE);

  return (
    <div className="mt-8 flex flex-col gap-6 md:mt-12">
      {groups.map((group, index) => {
        const list = (
          <ul className={GRID_CLASS}>
            {group.map((item, position) => (
              <li key={position}>{item}</li>
            ))}
          </ul>
        );

        if (index === 0) return <div key={index}>{list}</div>;

        return (
          <Reveal key={index}>
            <RevealItem>{list}</RevealItem>
          </Reveal>
        );
      })}
    </div>
  );
}
