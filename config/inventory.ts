import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  dosageforms: string[]
  medicationtypes: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "14f823dc-d3df-4aa9-a5d5-bd7cac607ca7",
    sku: "ABV-100MG-INJ-BATCH001",
    name: "Avastin 100mg Injection",
    description: 'Avastin 100mg Injection is an anticancer medication. It is used in the treatment of cancer of colon and rectum, non-small cell lung cancer, kidney cancer, brain tumor, ovarian and cervical cancer. It helps to prevent the growth of new blood vessels that feed tumors and stops tumors from growing.',
    price: 26445, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-2.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-3.jpg",
    ],
    dosageforms: ["injection"],
    categories: ["medicine"],
    medicationtypes: ["prescription"],
    currency: "inr",
  },
  {
    id: "b9a99f38-db03-4dff-82b9-6b1deb962d4a",
    sku: "ACT-40MG-INJ-BATCH001",
    name: "Actorise 40 Injection",
    description: 'Actorise 40 Injection is used in the treatment of anemia that may have occurred due to chronic kidney disease or chemotherapy. It works by stimulating the bone marrow to produce more red blood cells.',
    price: 2489,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-2.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-3.jpg",
    ],
    dosageforms: ["injection"],
    categories: ["medicine"],
    medicationtypes: ["prescription"],
    currency: "inr",
  },
  {
    id: "0c01de8b-a2a4-4bf5-adaa-6c4b8ee094e2",
    sku: "BDP-125MG-CAP-BATCH001",
    name: "Bdpalbo 125mg Capsule",
    description: 'Bdpalbo 125mg Capsule is used to treat patients with certain types of breast cancer (estrogen receptor-positive, human epidermal growth factor receptor 2-negative) which have spread to other organs. It is given together with hormonal anticancer therapies.',
    price: 4464,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
    ],
    dosageforms: ["capsule"],
    categories: ["medicine"],
    medicationtypes: ["prescription"],
    currency: "inr",
  },
]
