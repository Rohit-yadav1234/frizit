import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { CheckIcon } from "./Icon";
import { usePathname } from "next/navigation";

const people = [
  { id: 1, name: "200-500 kg" },
  { id: 2, name: "200 kg" },
  { id: 3, name: "1 MT" },
  { id: 4, name: "2 MT" },
  { id: 5, name: "3 MT" },
  { id: 6, name: "4 MT" },
  { id: 7, name: "5 MT" },
  { id: 8, name: "6 MT" },
  { id: 9, name: "7 MT" },
  { id: 10, name: "8 MT" },
  { id: 11, name: "9 MT" },
  { id: 12, name: "10 MT" },
];

export default function QuantityDrop() {
  const [selected, setSelected] = useState(null); // Initially, no item is selected
  const [isOpen, setIsOpen] = useState(false); // Track whether the dropdown is open

  const pathname = usePathname();

  // Conditional Rendering based on Pathnamedss
  const RenderComponent = () => {
    if (pathname === "/part-load") {
      return "Quantity of load*";
    } else {
      return "Vechile capacity*";
    }
  };

  return (
    <div className="relative">
      {/* Floating label */}
      <label
        className={clsx(
          "absolute  left-[50px] md:left-[29px] lg:left-[40px] xl:left-[80px] top-[15px] lg:top-[13px] xl:top-[17px] whitespace-nowrap transition-all duration-300 pointer-events-none z-10 px-1",
          {
            " text-xs lg:text-sm text-gray-500 !top-[0px] scale-75 !left-6  ":
              selected || isOpen, // Move and shrink label when selected or open
            " text-[13px] lg:text-base text-gray-400": !selected && !isOpen, // Default label state
          }
        )}
      >
        {RenderComponent()}
      </label>

      <Listbox
        value={selected}
        onChange={setSelected}
        as="div"
        className="relative"
      >
        {({ open }) => {
          // Update isOpen state whenever the dropdown is open or closed
          if (isOpen !== open) setIsOpen(open);

          return (
            <>
              <ListboxButton
                className={clsx(
                  "relative block w-full rounded-lg text-left border bg-white text-gray-800 focus:outline-none "
                )}
              >
                <div className="flex gap-1 lg:gap-4 py-[14px] w-full pl-2 xl:pl-5  items-center quotationsdivstyle">
                  <Image
                    width={24}
                    height={24}
                    src="/img/case.png"
                    alt="icon"
                  />
                  <div className="flex justify-between gap-1 items-center w-full pr-3 xl:pr-[15px] pl-1 xl:pl-[20px]">
                    <p
                      className={clsx(
                        "text-sm font-medium text-[#7B8A93] whitespace-nowrap",
                        {
                          "text-gray-800": selected, // Change text color if selected
                        }
                      )}
                    >
                      {selected ? selected.name : ""}
                    </p>
                    <Image
                      className="h-[6px] w-[10px]"
                      width={10}
                      height={10}
                      src="/img/droparrow.png"
                      alt="arrow"
                    />
                  </div>
                </div>
              </ListboxButton>

              <ListboxOptions
                anchor="bottom-right"
                transition
                className={clsx(
                  "w-[253px] h-[275px] overflow-y-auto absolute z-20 bg-white p-1 border focus:outline-none",
                  "transition duration-100 ease-in"
                )}
              >
                {people.map((person) => (
                  <ListboxOption
                    key={person.id}
                    value={person}
                    className={({ active }) =>
                      clsx(
                        "group flex cursor-pointer items-center gap-2 py-2 px-4 rounded-md text-gray-800",
                        {
                          "bg-blue-100 text-blue-800": active,
                        }
                      )
                    }
                  >
                    <div className="text-sm flex items-center justify-between w-full">
                      {person.name}
                      {selected && selected.id === person.id && <CheckIcon />}
                    </div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </>
          );
        }}
      </Listbox>
    </div>
  );
}
