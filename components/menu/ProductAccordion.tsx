"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import styles from "./ProductAccordion.module.css";

type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function ProductAccordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={styles.root}>
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span>{item.title}</span>
              <ChevronDown size={20} className={open ? styles.iconOpen : styles.icon} aria-hidden="true" />
            </button>
            {open && <div className={styles.panel}>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
