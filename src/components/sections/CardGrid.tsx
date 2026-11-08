import { Children, type ReactNode } from "react";

import { Reveal, RevealItem } from "@/components/layout/Reveal";
import { cn } from "@/lib/utils";

const GROUP_SIZE = 6;
const GRID_CLASS = "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3";
const SPARSE_CLASS: Record<number, string> = {
  1: "flex flex-wrap gap-6 justify-center",
  2: "flex flex-wrap gap-6 lg:justify-center",
};

type CardGridProps = {
  centerSparse?: boolean;
  children: ReactNode;
};

function chunk(items: ReactNode[], size: number) {
  const groups: ReactNode[][] = [];
  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }
  return groups;
}

export function CardGrid({ centerSparse = false, children }: CardGridProps) {
  const items = Children.toArray(children);
  const sparseClass = centerSparse ? SPARSE_CLASS[items.length] : undefined;
  const groups = chunk(items, GROUP_SIZE);

  return (
    <div className="mt-8 flex flex-col gap-6 md:mt-12">
      {groups.map((group, index) => {
        const list = (
          <ul className={sparseClass ?? GRID_CLASS}>
            {group.map((item, position) => (
              <li key={position} className={cn(sparseClass && "card-cell")}>
                {item}
              </li>
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
