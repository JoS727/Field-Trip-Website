import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "ftc-camp-tee",
    name: "FTC Camp Tee",
    price: 3500,
    description:
      "The classic Field Trip Crew camp tee. Heavyweight 100% cotton, screen-printed with our signature badge logo on the chest and a large back graphic. Made to last, made to move.",
    image: "/images/merch/camp-tee.jpg",
    category: "tee",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: "ftc-bucket-hat",
    name: "FTC Bucket Hat",
    price: 3000,
    description:
      "Field Trip Crew bucket hat. Washed canvas with an embroidered FTC patch. One size fits most.",
    image: "/images/merch/bucket-hat.jpg",
    category: "hat",
    featured: true,
  },
  {
    id: "ftc-hoodie",
    name: "Field Trip Hoodie",
    price: 7500,
    description:
      "Premium heavyweight hoodie with the FTC crew wordmark across the chest. Fleece-lined, garment-dyed in earthy tones.",
    image: "/images/merch/hoodie.jpg",
    category: "hoodie",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "ftc-patch-pack",
    name: "Iron-On Patch Pack",
    price: 1500,
    description:
      "Set of 4 embroidered Field Trip Crew patches. Collect & trade. Iron-on or sew-on backing.",
    image: "/images/merch/patch-pack.jpg",
    category: "accessory",
    featured: true,
  },
  {
    id: "ftc-tote",
    name: "FTC Canvas Tote",
    price: 2000,
    description:
      "Natural cotton canvas tote with the FTC badge screen-printed on the front. Holds your records, your snacks, and your whole vibe.",
    image: "/images/merch/tote.jpg",
    category: "accessory",
  },
  {
    id: "ftc-cap",
    name: "FTC Strapback Cap",
    price: 3500,
    description:
      "Structured 6-panel cap with embroidered FTC logo. Adjustable strapback closure.",
    image: "/images/merch/cap.jpg",
    category: "hat",
  },
  {
    id: "ftc-vinyl-vol1",
    name: "Vol. 1 — Limited Vinyl",
    price: 3000,
    description:
      "Field Trip Crew Vol. 1 on wax. Limited pressing of 200. Hand-numbered, includes digital download code.",
    image: "/images/merch/vinyl-vol1.jpg",
    category: "vinyl",
    featured: true,
    soldOut: false,
  },
  {
    id: "ftc-longsleeve",
    name: "FTC Long Sleeve",
    price: 4500,
    description:
      "Long sleeve tee with the full Field Trip Crew roster printed on the back. 100% cotton.",
    image: "/images/merch/longsleeve.jpg",
    category: "tee",
    sizes: ["S", "M", "L", "XL"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
