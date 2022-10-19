//constants/menu-items.ts

import {
  Dashboard,
  ShoppingCart,
  People,
  AttachMoney,
  AddShoppingCart,
  Done,
  Business,
  Cases,
  Home,
  HomeWork,
  Person,
  Category,
  ShoppingBag,
  Checkroom,
  DryCleaning,
  Yard,
  CardGiftcard,
} from "@styled-icons/material";

type MenuOption = {
  name: string,
  icon: React.ComponentType,
  url: string,
  subItems?: MenuOption[],
};

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Products:",
    icon: Dashboard,
    url: "/",
  },
  {
    name: "Totes",
    icon: Category,
    url: "/totes",
    subItems: [
      {
        name: "Paper-route Tote",
        icon: ShoppingBag,
        url: "/paperroutetote",
      },
      {
        name: "Glasses Cases",
        icon: Cases,
        url: "/glassescases",
      },
      {
        name: "Zippered Pouches",
        icon: Cases,
        url: "/zippouches",
      },
    ],
  },
  {
    name: "Home Decor",
    icon: Home,
    url: "/homedecor",
    subItems: [
      {
        name: "Delicates Hangers ",
        icon: Checkroom,
        url: "/delicateshangers",
      },
      {
        name: "Towel Hooks",
        icon: Category,
        url: "/towelhookscat",
        subItems: [
          {
            name: "Towel Hooks",
            icon: DryCleaning,
            url: "/towelhooks",
          },
        ],
      },
    ],
  },
  {
    name: "Seasonal",
    icon: Yard,
    url: "/seasonal",
		subItems: [ 
			{
				name: "Pinecone Wreaths",
				icon: CardGiftcard,
				url: "/pineconewreaths",
			},
		],
  },
];

export type MenuItem = {
  name: string,
  icon: React.ComponentType,
  url: string,
  id: string,
  depth: number,
  subItems?: MenuItem[],
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);