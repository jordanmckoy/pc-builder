type Part = {
  id: string | undefined;
  name: string | null;
  price: number | null;
  image: string | null;
  description: string | null;
  category: string;
  stock: number | null;
  rating: 1 | 2 | 3 | 4 | 5 | null;
  watt?: number | null;
  watt_ratting?: number | null;
};

export const Parts: Part[] = [
  {
    id: "1",
    name: "Intel Core i9-11900K",
    price: 499.99,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQopHW7QM6g2_Xr6C4j8KHc7Mf9dE73a5P47W2qdN9Cc5R4siyQuchqPBJgCfFUKf7SDIgXe3Ms0pjmPn4DNFGsMZgp5CYiP8UMipLL4sgk&usqp=CAE",
    description:
      "The Intel Core i9-11900K is a 10-core, 20-thread processor based on the Comet Lake-S architecture. It features a base clock of 3.5 GHz and a boost clock of 5.3 GHz. The i9-11900K is unlocked, allowing for overclocking, and it supports Intel's Optane Memory H10.",
    category: "CPU",
    stock: 10,
    rating: 2,
    watt: 125,
  },
  {
    id: "2",
    name: "AMD Ryzen 9 5950X",
    price: 799.99,
    image: "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg",
    description:
      "The AMD Ryzen 9 5950X is a 16-core, 32-thread processor based on the Zen 3 architecture. It features a base clock of 3.4 GHz and a boost clock of 4.9 GHz. The 5950X is unlocked, allowing for overclocking, and it supports AMD's PCIe 4.0.",
    category: "CPU",
    stock: 10,
    rating: 5,
    watt: 105,
  },
  {
    id: "3",
    name: "NVIDIA GeForce RTX 3090",
    price: 1499.99,
    image: "https://m.media-amazon.com/images/I/61wbV8oqAbL._AC_SL1500_.jpg",
    description:
      "The NVIDIA GeForce RTX 3090 is a high-end graphics card based on the Ampere architecture. It features 10496 CUDA cores, 68 RT cores, and 272 Tensor cores. The RTX 3090 has a base clock of 1.7 GHz and a boost clock of 1.8 GHz.",
    category: "GPU",
    stock: 10,
    rating: 4,
    watt: 350,
  },
  {
    id: "4",
    name: "AMD Radeon RX 6800 XT",
    price: 649.99,
    image: "https://m.media-amazon.com/images/I/51QbS7ZwetL._AC_SL1260_.jpg",
    description:
      "The AMD Radeon RX 6800 XT is a high-end graphics card based on the RDNA 2 architecture. It features 5120 stream processors, 64 compute units, and 128 texture units. The RX 6800 XT has a base clock of 1.8 GHz and a boost clock of 2.2 GHz.",
    category: "GPU",
    stock: 10,
    rating: 4,
    watt: 300,
  },
  {
    id: "5",
    name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4",
    price: 79.99,
    image: "https://m.media-amazon.com/images/I/51gLnYN1W7L._AC_SL1100_.jpg",
    description:
      "The Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black is a 16GB (2x8GB) DDR4 memory kit that operates at speeds up to 3200 MT/s and has a CL16 latency. It is compatible with Intel 100 Series and AMD 300 Series motherboards.",
    category: "RAM",
    stock: 10,
    rating: 4,
  },
  {
    id: "6",
    name: "G.SKILL Trident Z Neo 16GB (2x8GB) DDR4 3600MHz",
    price: 99.99,
    image: "https://m.media-amazon.com/images/I/61P8DpntLXL._AC_SL1280_.jpg",
    description:
      "The G.SKILL Trident Z Neo 16GB (2x8GB) DDR4 3600MHz CL16 Desktop Memory Kit - F4-3600C16D-16GTZN is a 16GB (2x8GB) DDR4 memory kit that operates at speeds up to 3600 MT/s and has a CL16 latency. It is compatible with Intel 100 Series and AMD 300 Series motherboards.",
    category: "RAM",
    stock: 10,
    rating: 4,
  },
  {
    id: "7",
    name: "ASUS ROG Strix B550-F Gaming (WiFi 6)",
    price: 199.99,
    image: "https://m.media-amazon.com/images/I/81x069mwcbL._AC_SL1500_.jpg",
    description:
      "The ASUS ROG Strix B550-F Gaming (WiFi 6) AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard is a motherboard that supports AMD AM4 socket Ryzen 5000 and 3rd Gen Ryzen processors. It features 2 PCIe 4.0 x16 slots, 2 PCIe 3.0 x1 slots, and 6 SATA 6Gb/s ports.",
    category: "MOTHERBOARD",
    stock: 10,
    rating: 4,
  },
  {
    id: "8",
    name: "ASUS Prime Z590M-PLUS",
    price: 199.99,
    image: "https://m.media-amazon.com/images/I/91Hkvzo6PYL._AC_SL1500_.jpg",
    description:
      "The ASUS Prime Z590M-PLUS LGA 1200 PCIe 4.0 10 Power Stages 3X M.2 Slot Thunderbolt 4 1Gb LAN M.2 microATX Motherboard is a motherboard that supports LGA 1200 socket 10th and 11th Gen Intel Core processors. It features 2 PCIe 4.0 x16 slots, 2 PCIe 3.0 x1 slots, and 6 SATA 6Gb/s ports.",
    category: "MOTHERBOARD",
    stock: 10,
    rating: 4,
  },
  {
    id: "9",
    name: "Samsung 970 EVO Plus 1TB",
    price: 149.99,
    image: "https://m.media-amazon.com/images/I/61XDwt17G4L._AC_SL1500_.jpg",
    description:
      "The Samsung 970 EVO Plus 1TB V-NAND M.2 NVMe PCIe 3.0 x4 3D NAND Internal Solid State Drive (SSD) with Heatsink (MZ-V7S1T0B/AM) is a 1TB M.2 NVMe SSD that features sequential read speeds of up to 3,500 MB/s and sequential write speeds of up to 3,300 MB/s.",
    category: "STORAGE",
    stock: 10,
    rating: 4,
  },
  {
    id: "10",
    name: "Kingston KC2500 1 TB Solid State Drive",
    price: 199.99,
    image: "https://m.media-amazon.com/images/I/71+aY32E9SL._AC_SL1500_.jpg",
    description:
      "The Kingston KC2500 1 TB Solid State Drive - M.2 2280 Internal - PCI Express NVMe (PCI Express NVMe 3.0 x4) is a 1TB M.2 NVMe SSD that features sequential read speeds of up to 3,500 MB/s and sequential write speeds of up to 3,300 MB/s.",
    category: "STORAGE",
    stock: 10,
    rating: 4,
  },
  {
    id: "11",
    name: "Seagate FireCuda 2TB SSHD",
    price: 79.99,
    image: "https://m.media-amazon.com/images/I/81V6cC0gnbL._AC_SL1500_.jpg",
    description:
      "The Seagate FireCuda 2TB Solid State Hybrid Drive Performance SSHD – 2.5 Inch SATA 6Gb/s Flash Accelerated for Gaming PC Laptop – Frustration Free Packaging (ST2000LX001) is a 2TB 2.5-inch SATA III SSD that features sequential read speeds of up to 560 MB/s and sequential write speeds of up to 530 MB/s.",
    category: "STORAGE",
    stock: 10,
    rating: 4,
  },
  {
    id: "12",
    name: " Western Digital Blue HDD 1TB",
    price: 49.99,
    image: "https://m.media-amazon.com/images/I/514DyIKQYYL._AC_SL1280_.jpg",
    description:
      "The Western Digital Blue HDD 1TB PC Hard Drive - 7200 RPM Class, SATA 6 Gb/s, 64 MB Cache, 3.5 Inch - WD10EZEX is a 1TB 3.5-inch SATA III HDD that features a 7200 RPM rotational speed and a 64 MB cache.",
    category: "STORAGE",
    stock: 10,
    rating: 4,
  },
  {
    id: "14",
    name: "EVGA 750 GQ, 80+ Gold 750W",
    price: 99.99,
    image: "https://m.media-amazon.com/images/I/71POUO-MQCL._AC_SL1500_.jpg",
    description:
      "The EVGA 750 GQ, 80+ Gold 750W, Semi Modular, FDB Fan, 10 Year Warranty, Includes Power ON Self Tester, Compact 150mm Size, Power Supply 220-GQ-0750-V1 is a 750W power supply that features 80+ Gold efficiency, a single +12V rail, and a semi-modular design.",
    category: "POWER SUPPLY",
    stock: 10,
    rating: 4,
    watt_ratting: 750,
  },
  {
    id: "15",
    name: "EVGA 850 GQ, 80+ Gold 850W",
    price: 119.99,
    image: "https://m.media-amazon.com/images/I/71RXqAgUaFL._AC_SL1500_.jpg",
    description:
      "The EVGA 850 GQ, 80+ Gold 850W, Semi Modular, FDB Fan, 10 Year Warranty, Includes Power ON Self Tester, Compact 150mm Size, Power Supply 220-GQ-0850-V1 is a 850W power supply that features 80+ Gold efficiency, a single +12V rail, and a semi-modular design.",
    category: "POWER SUPPLY",
    stock: 10,
    rating: 4,
    watt_ratting: 850,
  },
  {
    id: "16",
    name: "EVGA 1000 GQ, 80+ Gold 1000W",
    price: 139.99,
    image: "https://m.media-amazon.com/images/I/71OaPvBxzPL._AC_SL1500_.jpg",
    description:
      "The EVGA 1000 GQ, 80+ Gold 1000W, Semi Modular, FDB Fan, 10 Year Warranty, Includes Power ON Self Tester, Compact 150mm Size, Power Supply 220-GQ-1000-V1 is a 1000W power supply that features 80+ Gold efficiency, a single +12V rail, and a semi-modular design.",
    category: "POWER SUPPLY",
    stock: 10,
    rating: 4,
    watt_ratting: 1000,
  },
  {
    id: "17",
    name: "Corsair 5000D Airflow Tempered Glass Case- Black",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/81fki2HcyeL._AC_SL1500_.jpg",
    description:
      "The Corsair 5000D Airflow Tempered Glass Case- Black is a mid-tower ATX case that features a tempered glass side panel, a front panel USB 3.0 port, and a front panel USB 3.1 Type-C port.",
    category: "CASE",
    stock: 10,
    rating: 4,
  },
  {
    id: "18",
    name: "NZXT H5 Flow Compact ATX Mid-Tower Case, Black",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/71SIs5kxpYL._AC_SL1500_.jpg",
    description:
      "The NZXT H5 Flow Compact ATX Mid-Tower Case, Black is a mid-tower ATX case that features a tempered glass side panel, a front panel USB 3.0 port, and a front panel USB 3.1 Type-C port.",
    category: "CASE",
    stock: 10,
    rating: 4,
  },
  {
    id: "19",
    name: "Cooler Master MasterBox NR600",
    price: 129.99,
    image: "https://m.media-amazon.com/images/I/81xDXNrDAuL._AC_SX425_.jpg",
    description:
      "The Cooler Master MasterBox NR600 ATX Mid-Tower with Front Mesh Ventilation, Minimal Design, Tempered Glass Side Panel and Single Headset Jack is a mid-tower ATX case that features a tempered glass side panel, a front panel USB 3.0 port, and a front panel USB 3.1 Type-C port.",
    category: "CASE",
    stock: 10,
    rating: 4,
  },
  {
    id: "20",
    name: "Noctua NH-D15 140mm(Brown)",
    price: 89.95,
    image: "https://m.media-amazon.com/images/I/91Hw1zcAIjL._AC_SL1500_.jpg",
    description:
      "The Noctua NH-D15 140mm & 120mm SSO2 CPU Cooler with Dual NF-A15 PWM 140mm Fans (Brown) is a CPU cooler that features a 140mm fan, a 120mm fan, and a 140mm fan.",
    category: "COOLING",
    stock: 10,
    rating: 4,
  },
  {
    id: "21",
    name: "Corsair iCUE H150i RGB Elite Liquid CPU Cooler",
    price: 149.99,
    image: "https://m.media-amazon.com/images/I/71lMY8M6ZnL._AC_SL1500_.jpg",
    description:
      "The Corsair iCUE H150i RGB Elite Liquid CPU Cooler (16 Dynamic RGB LEDs, 120mm AF Elite Series FDB Fans, 360mm Radiator, iCUE Software Compatible, LGA 1700, 1200, 115X, 2066, and AM4 Sockets) Black is a CPU cooler that features a 120mm fan, a 120mm fan, and a 360mm radiator.",
    category: "COOLING",
    stock: 10,
    rating: 4,
  },
];
