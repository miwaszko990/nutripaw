"use client";

import { Search } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { filterBreeds, POPULAR_BREEDS } from "@/lib/wizard/breeds";
import styles from "./BreedCombobox.module.css";

type BreedComboboxProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function BreedCombobox({ value, onChange }: BreedComboboxProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const inputId = useId();

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const options = useMemo(() => filterBreeds(query), [query]);

  const select = (breed: string) => {
    onChange(breed);
    setQuery(breed);
    setOpen(false);
  };

  useEffect(() => {
    const onDocClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className={styles.root} ref={rootRef}>
      <label className={styles.srOnly} htmlFor={inputId}>
        Rasa psa
      </label>
      <div className={`${styles.field} ${open ? styles.fieldOpen : ""}`}>
        <Search size={18} className={styles.searchIcon} aria-hidden="true" />
        <input
          id={inputId}
          className={styles.input}
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          autoComplete="off"
          value={query}
          placeholder="Wpisz lub wybierz rasę..."
          onChange={(event) => {
            setQuery(event.target.value);
            onChange(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
      </div>

      {open && options.length > 0 && (
        <ul id={listId} className={styles.list} role="listbox">
          {options.map((breed) => (
            <li key={breed} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === breed}
                className={`${styles.option} ${value === breed ? styles.optionActive : ""}`}
                onClick={() => select(breed)}
              >
                {breed}
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && query.trim().length > 0 && options.length === 0 && (
        <p className={styles.empty}>Brak wyników — możesz wpisać rasę ręcznie.</p>
      )}

      <p className={styles.groupLabel}>Popularne</p>
      <div className={styles.tags}>
        {POPULAR_BREEDS.map((breed) => (
          <button
            key={breed}
            type="button"
            className={`${styles.tag} ${value === breed ? styles.tagActive : ""}`}
            onClick={() => select(breed)}
          >
            {breed}
          </button>
        ))}
      </div>
    </div>
  );
}
