window.RUNS = {
 "score": {
  "kind_right": 91,
  "source_n": 42,
  "source_right": 38,
  "emails": 100,
  "bars": {
   "0.6": {
    "action_right": 88,
    "machine_wrong": 0,
    "action_draft": 34,
    "action_person": 38,
    "action_order": 17,
    "action_skip": 11
   },
   "0.7": {
    "action_right": 85,
    "machine_wrong": 0,
    "action_draft": 33,
    "action_person": 41,
    "action_order": 16,
    "action_skip": 10
   },
   "0.8": {
    "action_right": 78,
    "machine_wrong": 0,
    "action_draft": 29,
    "action_person": 48,
    "action_order": 16,
    "action_skip": 7
   }
  },
  "decider": "strands-decider:2b",
  "writer": "gemma4-e4b-local",
  "embedder": "qwen3-embedding-1k",
  "seconds": {
   "sort_s": 54.3,
   "find_s": 4.8,
   "write_s": 268.6,
   "check_s": 42.8
  }
 },
 "runs": [
  {
   "email": {
    "id": 1,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Jonas Lund, Lund Bygg",
    "subj": "Delivery to Kungsbacka",
    "body": "How fast can you deliver to Kungsbacka if we order before lunch tomorrow?"
   },
   "result": {
    "seconds": {
     "sort_s": 2.2,
     "find_s": 0.04,
     "write_s": 7.68,
     "check_s": 3.79
    },
    "sort": {
     "kind": "question",
     "confidence": 0.825,
     "wants_person": 0.154,
     "lang": "en"
    },
    "hits": [
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.62
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.542
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.475
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "If you order before 14:00 tomorrow, delivery to the Göteborg area (postcodes 40–43) is the next working day.",
     "used": [
      "delivery-terms#Delivery times"
     ],
     "grounded": 0.821
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 2,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Maria Sjö, Sjö El",
    "subj": "Leverans Uddevalla",
    "body": "Hej, hur lång leveranstid har ni till Uddevalla och vad kostar frakten för en order på 900 kr?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.45,
     "find_s": 0.05,
     "write_s": 8.38,
     "check_s": 1.37
    },
    "sort": {
     "kind": "question",
     "confidence": 0.95,
     "wants_person": 0.1,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.536
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.513
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.472
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Maria,\n\nFör leverans till Uddevalla (Sverige) gäller 2–4 arbetsdagar med DB Schenker.\n\nFör en order på 900 kr till Sverige är fraktkostnaden 149 kr per order.",
     "used": [
      "delivery-terms#Delivery times",
      "delivery-terms#Shipping cost"
     ],
     "grounded": 0.661
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 3,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Henrik Moe, Moe Tre AS",
    "subj": "Shipping to Bergen",
    "body": "What is the shipping cost to Bergen, Norway? Our order is around 3 000 kr."
   },
   "result": {
    "seconds": {
     "sort_s": 0.44,
     "find_s": 0.04,
     "write_s": 5.47,
     "check_s": 1.33
    },
    "sort": {
     "kind": "question",
     "confidence": 0.925,
     "wants_person": 0.101,
     "lang": "en"
    },
    "hits": [
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.665
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.484
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.382
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hello Henrik, for an order of around 3 000 kr to Bergen, Norway, the shipping cost is 349 kr.",
     "used": [
      "delivery-terms#Shipping cost"
     ],
     "grounded": 0.745
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 4,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Kalle Ny, Ny Montage",
    "subj": "Fri frakt?",
    "body": "Från vilket belopp får man fri frakt hos er?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.41,
     "find_s": 0.04,
     "write_s": 8.89,
     "check_s": 1.04
    },
    "sort": {
     "kind": "question",
     "confidence": 0.877,
     "wants_person": 0.088,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.573
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.451
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.447
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Kalle,\n\nFri frakt inom Sverige gäller för beställningar över 2 000 kr exklusive moms.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "delivery-terms#Shipping cost"
     ],
     "grounded": 0.799
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 5,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Fatima Noor, Noor Fastighetsservice",
    "subj": "Same day pickup",
    "body": "Can I collect an order the same day at your warehouse? What time do you close?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.45,
     "find_s": 0.04,
     "write_s": 8.17,
     "check_s": 1.03
    },
    "sort": {
     "kind": "question",
     "confidence": 0.797,
     "wants_person": 0.151,
     "lang": "en"
    },
    "hits": [
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.656
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.605
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.486
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hello Fatima, you can pick up orders at our warehouse, Exportgatan 12, Göteborg, on weekdays between 07:00 and 16:00. Orders are ready 2 hours after you place your order.",
     "used": [
      "delivery-terms#Pickup"
     ],
     "grounded": 0.842
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 6,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Erik Falk, Falk VVS",
    "subj": "Hämta själv",
    "body": "Kan vi hämta ordern själva på lagret istället för frakt? Hur snabbt är den klar?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.45,
     "find_s": 0.05,
     "write_s": 7.73,
     "check_s": 1.02
    },
    "sort": {
     "kind": "question",
     "confidence": 0.823,
     "wants_person": 0.127,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.511
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.475
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.468
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Erik,\n\nJa, ni kan hämta er order på vårt lager på Exportgatan 12 i Göteborg, måndag till fredag mellan 07:00 och 16:00. Ordern är klar 2 timmar efter att ni beställt.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "delivery-terms#Pickup"
     ],
     "grounded": 0.813
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 7,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Sofia Rask, Rask Electric",
    "subj": "Copenhagen delivery",
    "body": "Do you ship to Copenhagen and how many days does it take?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.4,
     "find_s": 0.04,
     "write_s": 4.25,
     "check_s": 0.78
    },
    "sort": {
     "kind": "question",
     "confidence": 0.86,
     "wants_person": 0.1,
     "lang": "en"
    },
    "hits": [
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.597
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.482
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.45
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Yes, we ship to Denmark. Delivery to Denmark takes 4–6 working days.",
     "used": [
      "delivery-terms#Delivery times"
     ],
     "grounded": 0.762
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 8,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Pia Ström, Ström Städ",
    "subj": "Leverans Stockholm",
    "body": "Vi sitter i Stockholm. Hur många dagar tar leveransen?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.41,
     "find_s": 0.04,
     "write_s": 6.0,
     "check_s": 1.13
    },
    "sort": {
     "kind": "question",
     "confidence": 0.837,
     "wants_person": 0.092,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.609
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.516
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.483
     }
    ],
    "action": "person",
    "why": "draft check failed (0.33)",
    "draft": {
     "found": true,
     "draft": "Hej Pia Ström,\n\nEftersom ni sitter i Stockholm, tar leveransen 2–4 arbetsdagar med DB Schenker.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "delivery-terms#Delivery times"
     ],
     "grounded": 0.332
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 9,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Leo Grant, Grant Workshop",
    "subj": "Order cutoff",
    "body": "What is the latest time I can order to get delivery in Mölndal the next day?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.04,
     "write_s": 5.86,
     "check_s": 0.81
    },
    "sort": {
     "kind": "question",
     "confidence": 0.893,
     "wants_person": 0.127,
     "lang": "en"
    },
    "hits": [
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.6
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.537
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.531
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "For delivery in the Göteborg area (which includes Mölndal), the order must be in before 14:00 to receive next working day delivery.",
     "used": [
      "delivery-terms#Delivery times"
     ],
     "grounded": 0.778
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 10,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "delivery-terms"
    ],
    "frm": "Ida Berg, Berg & Co",
    "subj": "Fraktkostnad",
    "body": "Vad kostar frakten om vi beställer för 1 200 kr till Jönköping?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.04,
     "write_s": 6.22,
     "check_s": 0.98
    },
    "sort": {
     "kind": "question",
     "confidence": 0.958,
     "wants_person": 0.108,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.551
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.503
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.414
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Ida,\n\nFör en beställning på 1 200 kr till Jönköping gäller fraktkostnaden 149 kr per order inom Sverige.",
     "used": [
      "delivery-terms#Shipping cost"
     ],
     "grounded": 0.726
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 11,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Mark Hill, Hill Construction",
    "subj": "Price M10 bolts",
    "body": "What is the price for a box of M10x50 hex bolts?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.04,
     "write_s": 6.59,
     "check_s": 1.23
    },
    "sort": {
     "kind": "question",
     "confidence": 0.972,
     "wants_person": 0.109,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.749
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.42
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.419
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hello Mark, the price for a box of M10x50 hex bolts (steel 8.8, zinc) is 259 kr.",
     "used": [
      "price-list#Fasteners"
     ],
     "grounded": 0.692
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 12,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Anders Vik, Vik Bygg",
    "subj": "Pris rostfria skruvar",
    "body": "Vad kostar en låda rostfria skruvar A4 5x50?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.04,
     "write_s": 6.63,
     "check_s": 1.26
    },
    "sort": {
     "kind": "question",
     "confidence": 0.978,
     "wants_person": 0.129,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.464
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.424
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.405
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Anders,\n\nEn låda rostfria skruvar A4 5x50 kostar 349 kr.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "price-list#Fasteners"
     ],
     "grounded": 0.633
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 13,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Nina Shah, Shah Electric",
    "subj": "Cable price",
    "body": "How much is a 50 m roll of EKK 3G1.5 installation cable?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.46,
     "find_s": 0.04,
     "write_s": 4.75,
     "check_s": 1.24
    },
    "sort": {
     "kind": "question",
     "confidence": 0.976,
     "wants_person": 0.131,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.748
     },
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.333
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.327
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hello Nina, the price for a 50 m roll of EKK 3G1.5 installation cable is 1 190 kr.",
     "used": [
      "price-list#Cable and electrical"
     ],
     "grounded": 0.653
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 14,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Lars Holm, Holm El",
    "subj": "Kopplingsdosor",
    "body": "Vad kostar kopplingsdosa IP65 per styck?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.46,
     "find_s": 0.04,
     "write_s": 5.26,
     "check_s": 1.23
    },
    "sort": {
     "kind": "question",
     "confidence": 0.973,
     "wants_person": 0.115,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.445
     },
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.405
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.396
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Lars,\n\nEn kopplingsdosa IP65 kostar 64 kr styck.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "price-list#Cable and electrical"
     ],
     "grounded": 0.604
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 15,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Ben Cole, Cole Repairs",
    "subj": "Gloves sizes",
    "body": "Which sizes do your cut-resistant work gloves come in, and what do they cost?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.46,
     "find_s": 0.04,
     "write_s": 5.26,
     "check_s": 1.27
    },
    "sort": {
     "kind": "question",
     "confidence": 0.933,
     "wants_person": 0.131,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.615
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.307
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.268
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hello Ben, our cut-resistant work gloves (cut level C) come in size 9 or 10 and cost 89 kr per pair.",
     "used": [
      "price-list#Safety"
     ],
     "grounded": 0.645
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 16,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Tove Lind, Lind Måleri",
    "subj": "Skyddsglasögon",
    "body": "Har ni skyddsglasögon och vad kostar de?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.04,
     "write_s": 5.76,
     "check_s": 1.06
    },
    "sort": {
     "kind": "question",
     "confidence": 0.943,
     "wants_person": 0.108,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.543
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.445
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.425
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Tove,\n\nJa, vi har skyddsglasögon. De klara skyddsglasögon kostar 59 kr (artikel 3010).\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "price-list#Safety"
     ],
     "grounded": 0.715
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 17,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Raj Patel, Patel Facility",
    "subj": "Big order discount",
    "body": "We plan an order of about 25 000 kr. Is there any discount on that size?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.46,
     "find_s": 0.04,
     "write_s": 5.09,
     "check_s": 1.0
    },
    "sort": {
     "kind": "question",
     "confidence": 0.965,
     "wants_person": 0.121,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.674
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.404
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.383
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Thank you for your inquiry regarding a discount on an order of approximately 25,000 kr. We offer a 10% discount on orders over 20,000 kr excluding VAT.",
     "used": [
      "price-list#Volume discount"
     ],
     "grounded": 0.697
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 18,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Olle Åberg, Åberg Plåt",
    "subj": "Rabatt på muttrar",
    "body": "Om vi tar 15 kartonger muttrar M8, blir det billigare då?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.04,
     "write_s": 7.16,
     "check_s": 1.17
    },
    "sort": {
     "kind": "question",
     "confidence": 0.96,
     "wants_person": 0.087,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.463
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.4
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.372
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Olle,\n\nJa, vid beställning av 15 kartonger muttrar M8 får ni 5% rabatt på orderlinjen, eftersom det är 10 kartonger eller mer av samma vara.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "price-list#Volume discount"
     ],
     "grounded": 0.602
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 19,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Clara West, West Interiors",
    "subj": "Prices with VAT?",
    "body": "Are the prices in your price list with or without VAT?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.45,
     "find_s": 0.04,
     "write_s": 5.84,
     "check_s": 0.93
    },
    "sort": {
     "kind": "question",
     "confidence": 0.931,
     "wants_person": 0.081,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.519
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.398
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.384
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hello Clara,\n\nOur prices in the price list are excluding VAT (25%).\n\nBest regards,\nÄlvkant order desk",
     "used": [
      "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)"
     ],
     "grounded": 0.529
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 20,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Hassan Ali, Ali Bygg",
    "subj": "Buntband",
    "body": "Vad kostar buntband 300 mm, svarta?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.48,
     "find_s": 0.04,
     "write_s": 6.17,
     "check_s": 0.44
    },
    "sort": {
     "kind": "question",
     "confidence": 0.971,
     "wants_person": 0.109,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.456
     },
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.454
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.408
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Hassan,\n\nBuntband 300 mm, svarta (förpackning med 100 stycken) kostar 79 kr.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "price-list#Cable and electrical"
     ],
     "grounded": 0.639
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 21,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "returns"
    ],
    "frm": "Greg Stone, Stone Mechanical",
    "subj": "Return window",
    "body": "How many days do we have to return unopened items?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.44,
     "find_s": 0.04,
     "write_s": 4.52,
     "check_s": 1.15
    },
    "sort": {
     "kind": "question",
     "confidence": 0.938,
     "wants_person": 0.098,
     "lang": "en"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.722
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.385
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.325
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "You may return unopened items within 30 days. Please contact us first, and we will send you a return label.",
     "used": [
      "returns#Returns and complaints"
     ],
     "grounded": 0.634
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 22,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "returns"
    ],
    "frm": "Lena Kock, Kock Fastighet",
    "subj": "Retur av handskar",
    "body": "Vi beställde fel storlek på handskar, de är oöppnade. Kan vi byta?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.04,
     "write_s": 5.4,
     "check_s": 1.06
    },
    "sort": {
     "kind": "question",
     "confidence": 0.663,
     "wants_person": 0.137,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.568
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.348
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.346
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.66)",
    "draft": {
     "found": true,
     "draft": "Hej Lena,\n\nJa, ni kan returnera oöppnade handskar inom 30 dagar. Kontakta oss först så skickar vi er en retursedel.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "returns#Returns and complaints"
     ],
     "grounded": 0.661
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 23,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "returns"
    ],
    "frm": "Amir Sadeghi, AS Install",
    "subj": "Return shipping cost",
    "body": "If we return items, do we pay the return shipping?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.44,
     "find_s": 0.04,
     "write_s": 5.8,
     "check_s": 1.04
    },
    "sort": {
     "kind": "question",
     "confidence": 0.941,
     "wants_person": 0.102,
     "lang": "en"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.587
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.473
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.295
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hello Amir, return shipping costs 99 kr, which will be deducted from your refund. It is free if we sent you the wrong item. Please note that you may return unopened items within 30 days, and we will send you a return label once you contact us.",
     "used": [
      "returns#Returns and complaints"
     ],
     "grounded": 0.76
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 24,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "returns"
    ],
    "frm": "Jens Persson, Persson Snickeri",
    "subj": "Öppnad kartong",
    "body": "Kan man returnera en öppnad kartong skruv?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.04,
     "write_s": 4.49,
     "check_s": 0.75
    },
    "sort": {
     "kind": "question",
     "confidence": 0.872,
     "wants_person": 0.101,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.62
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.392
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.379
     }
    ],
    "action": "person",
    "why": "draft check failed (0.47)",
    "draft": {
     "found": true,
     "draft": "Hej Jens,\n\nTyvärr kan öppnade kartonger med fästanordningar inte returneras.",
     "used": [
      "returns#Returns and complaints"
     ],
     "grounded": 0.47
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 25,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "returns"
    ],
    "frm": "Paula Reyes, Reyes Cleaning",
    "subj": "Refund time",
    "body": "We sent back a return last week. When will we get the money back?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.43,
     "find_s": 0.04,
     "write_s": 4.81,
     "check_s": 1.0
    },
    "sort": {
     "kind": "question",
     "confidence": 0.881,
     "wants_person": 0.168,
     "lang": "en"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.573
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.343
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.318
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hello Paula, refunds are paid within 10 working days after we receive the return. \n\nBest regards,\nÄlvkant order desk",
     "used": [
      "returns#Returns and complaints"
     ],
     "grounded": 0.721
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 26,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "returns"
    ],
    "frm": "Maja Ek, Ek Elservice",
    "subj": "Fel vara",
    "body": "Vi fick hörselskydd istället för skyddsglasögon. Hur gör vi?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.5,
     "find_s": 0.04,
     "write_s": 5.19
    },
    "sort": {
     "kind": "question",
     "confidence": 0.756,
     "wants_person": 0.178,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.463
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.32
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.312
     }
    ],
    "action": "person",
    "why": "documents do not answer it",
    "draft": {
     "found": false,
     "draft": "Hej Maja,\n\nVi ber om ursäkt för felleveransen. En kollega kommer att kontakta dig snart för att lösa detta.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": []
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 27,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "returns"
    ],
    "frm": "Tim Brooks, Brooks Builders",
    "subj": "Broken box",
    "body": "One box of junction boxes arrived crushed. What should I do?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.49,
     "find_s": 0.04,
     "write_s": 5.87,
     "check_s": 1.53
    },
    "sort": {
     "kind": "question",
     "confidence": 0.842,
     "wants_person": 0.192,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.487
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.431
     },
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.357
     }
    ],
    "action": "person",
    "why": "draft check failed (0.46)",
    "draft": {
     "found": true,
     "draft": "Hello Tim, we are sorry to hear that one box of junction boxes arrived crushed. Since the goods are damaged, please report this within 8 days with a photo. We will send a replacement at no cost to you.",
     "used": [
      "returns#Returns and complaints"
     ],
     "grounded": 0.457
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 28,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "returns"
    ],
    "frm": "Sven Dahl, Dahl Bygg",
    "subj": "Trasig leverans",
    "body": "Kabeln kom med skadad trumma. Hur anmäler vi det?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.56,
     "find_s": 0.04,
     "write_s": 5.99,
     "check_s": 1.09
    },
    "sort": {
     "kind": "question",
     "confidence": 0.787,
     "wants_person": 0.137,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.444
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.405
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.34
     }
    ],
    "action": "person",
    "why": "draft check failed (0.47)",
    "draft": {
     "found": true,
     "draft": "Hej Sven,\n\nFör skadade varor ska du anmäla detta inom 8 dagar och bifoga en bild. Vi skickar då en ersättare kostnadsfritt.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "returns#Returns and complaints"
     ],
     "grounded": 0.468
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 29,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "payment-and-accounts"
    ],
    "frm": "Laura King, King Properties",
    "subj": "Invoice terms",
    "body": "What are your payment terms on invoices?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.46,
     "find_s": 0.04,
     "write_s": 6.99,
     "check_s": 1.46
    },
    "sort": {
     "kind": "question",
     "confidence": 0.934,
     "wants_person": 0.106,
     "lang": "en"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.513
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.322
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.293
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Dear Laura King, our payment terms for companies are 30 days net upon invoice. If you are a new customer, we will require a credit check before the first invoice. Please let us know if you would like to open a company account by sending your company name, organisation number, and invoice address to order@alvkant.example.",
     "used": [
      "payment-and-accounts#Payment and customer accounts"
     ],
     "grounded": 0.739
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 30,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "payment-and-accounts"
    ],
    "frm": "Rickard Ståhl, Ståhl El",
    "subj": "Swish",
    "body": "Kan man betala med Swish som privatperson?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.52,
     "find_s": 0.04,
     "write_s": 4.92,
     "check_s": 1.18
    },
    "sort": {
     "kind": "question",
     "confidence": 0.836,
     "wants_person": 0.095,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.55
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.426
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.314
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Rickard,\nJa, privatpersoner kan betala med Swish när de beställer.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "payment-and-accounts#Payment and customer accounts"
     ],
     "grounded": 0.546
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 31,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "payment-and-accounts"
    ],
    "frm": "Victor Nunez, Nunez HVAC",
    "subj": "Company account",
    "body": "How do we open a company account with you?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.52,
     "find_s": 0.04,
     "write_s": 4.93,
     "check_s": 0.89
    },
    "sort": {
     "kind": "question",
     "confidence": 0.794,
     "wants_person": 0.162,
     "lang": "en"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.528
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.307
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.244
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "To open a company account, please send your company name, organisation number, and invoice address to order@alvkant.example.",
     "used": [
      "payment-and-accounts#Payment and customer accounts"
     ],
     "grounded": 0.691
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 32,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "payment-and-accounts"
    ],
    "frm": "Elin Ros, Ros Interiör",
    "subj": "Påminnelseavgift",
    "body": "Vad tar ni för påminnelseavgift om vi betalar sent?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.5,
     "find_s": 0.04,
     "write_s": 4.96,
     "check_s": 0.72
    },
    "sort": {
     "kind": "question",
     "confidence": 0.914,
     "wants_person": 0.099,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.45
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.345
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.327
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Elin,\n\nVid försenad betalning tillkommer en påminnelseavgift på 60 kr samt ränta enligt svensk räntelag.",
     "used": [
      "payment-and-accounts#Payment and customer accounts"
     ],
     "grounded": 0.791
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 33,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "payment-and-accounts"
    ],
    "frm": "Hannah Fox, Fox Facilities",
    "subj": "Invoice format",
    "body": "Do you send invoices by post or email?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.04,
     "write_s": 5.79,
     "check_s": 0.97
    },
    "sort": {
     "kind": "question",
     "confidence": 0.888,
     "wants_person": 0.12,
     "lang": "en"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.481
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.307
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.305
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Dear Hannah Fox,\n\nWe send invoices by email as PDF. E-invoice (Peppol) is available on request.\n\nBest regards,\nÄlvkant order desk",
     "used": [
      "payment-and-accounts#Payment and customer accounts"
     ],
     "grounded": 0.586
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 34,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "payment-and-accounts"
    ],
    "frm": "Mohammed Said, Said Bygg",
    "subj": "E-faktura",
    "body": "Kan vi få e-faktura via Peppol?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.5,
     "find_s": 0.04,
     "write_s": 6.6,
     "check_s": 0.85
    },
    "sort": {
     "kind": "question",
     "confidence": 0.705,
     "wants_person": 0.087,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.414
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.318
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.273
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Mohammed,\n\nJa, e-faktura via Peppol är tillgänglig på begäran. För att öppna ett företagskonto skickar du ditt företagsnamn, organisationsnummer och faktureringsadress till order@alvkant.example.",
     "used": [
      "payment-and-accounts#Payment and customer accounts"
     ],
     "grounded": 0.572
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 35,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "payment-and-accounts"
    ],
    "frm": "Owen Ward, Ward Joinery",
    "subj": "Credit check",
    "body": "Do you run a credit check on new business customers?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.43,
     "find_s": 0.04,
     "write_s": 5.05,
     "check_s": 0.9
    },
    "sort": {
     "kind": "question",
     "confidence": 0.716,
     "wants_person": 0.114,
     "lang": "en"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.455
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.209
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.199
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Yes, new customers receive a credit check before the first invoice.",
     "used": [
      "payment-and-accounts#Payment and customer accounts"
     ],
     "grounded": 0.794
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 36,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "company-info"
    ],
    "frm": "Karin Blom, Blom Städ",
    "subj": "Öppettider",
    "body": "Vilka tider har ni öppet på lagret?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.41,
     "find_s": 0.04,
     "write_s": 7.29,
     "check_s": 1.03
    },
    "sort": {
     "kind": "question",
     "confidence": 0.899,
     "wants_person": 0.103,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.608
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.462
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.421
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hej Karin,\n\nVi är öppna på lagret på vardagar mellan kl. 07:00 och 16:00.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": [
      "company-info#Opening hours and holidays"
     ],
     "grounded": 0.709
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 37,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "company-info"
    ],
    "frm": "Simon Price, Price Electric",
    "subj": "Address",
    "body": "What is the address of your warehouse?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.41,
     "find_s": 0.04,
     "write_s": 5.14,
     "check_s": 1.14
    },
    "sort": {
     "kind": "question",
     "confidence": 0.857,
     "wants_person": 0.105,
     "lang": "en"
    },
    "hits": [
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.453
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.45
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.375
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Our warehouse address is Exportgatan 12, 422 46 Hisings Backa, Göteborg.",
     "used": [
      "company-info#About us"
     ],
     "grounded": 0.691
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 38,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "company-info"
    ],
    "frm": "Linnea Holt, Holt Bygg",
    "subj": "Midsommar",
    "body": "Har ni öppet på midsommarafton?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.44,
     "find_s": 0.04,
     "write_s": 4.97
    },
    "sort": {
     "kind": "question",
     "confidence": 0.813,
     "wants_person": 0.181,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.414
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.316
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.285
     }
    ],
    "action": "person",
    "why": "documents do not answer it",
    "draft": {
     "found": false,
     "draft": "Vi har tyvärr ingen information om öppettider på midsommarafton. En kollega kommer att svara så snart som möjligt.",
     "used": []
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 39,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "company-info"
    ],
    "frm": "Adam Clark, Clark Services",
    "subj": "Summer closing",
    "body": "Are you closed any week in the summer?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.38,
     "find_s": 0.04,
     "write_s": 5.8,
     "check_s": 0.99
    },
    "sort": {
     "kind": "question",
     "confidence": 0.884,
     "wants_person": 0.111,
     "lang": "en"
    },
    "hits": [
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.637
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.317
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.252
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Thank you for your email. We are closed in week 29 (July) during the summer. Orders placed that week will ship in week 30.",
     "used": [
      "company-info#Opening hours and holidays"
     ],
     "grounded": 0.661
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 40,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [
     "company-info"
    ],
    "frm": "Ahmed Yusuf, Yusuf VVS",
    "subj": "Telefonnummer",
    "body": "Vilket nummer ringer jag om jag vill prata med kundtjänst?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.44,
     "find_s": 0.05
    },
    "sort": {
     "kind": "question",
     "confidence": 0.451,
     "wants_person": 0.503,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.309
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.308
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.3
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.45)",
    "draft": null,
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 41,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Petra Lang, Lang Steel",
    "subj": "Torque M8",
    "body": "What torque should we use on M8 8.8 bolts in aluminium?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.52,
     "find_s": 0.04,
     "write_s": 6.31
    },
    "sort": {
     "kind": "question",
     "confidence": 0.961,
     "wants_person": 0.101,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.546
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.266
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.265
     }
    ],
    "action": "person",
    "why": "documents do not answer it",
    "draft": {
     "found": false,
     "draft": "Hello Petra, we do not have information regarding the required torque for M8 8.8 bolts in aluminium. A colleague will reply to your email soon.",
     "used": []
    },
    "want": "person"
   }
  },
  {
   "email": {
    "id": 42,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Robin Ek, Ek Tak",
    "subj": "Takskruv",
    "body": "Säljer ni takskruv med EPDM-bricka?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.48,
     "find_s": 0.04
    },
    "sort": {
     "kind": "question",
     "confidence": 0.631,
     "wants_person": 0.126,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.353
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.329
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.321
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.63)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 43,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Diana Moss, Moss Electric",
    "subj": "Cable certification",
    "body": "Is your EKK cable certified for outdoor burial?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.41,
     "find_s": 0.04,
     "write_s": 4.54
    },
    "sort": {
     "kind": "question",
     "confidence": 0.903,
     "wants_person": 0.115,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.537
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.275
     },
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.236
     }
    ],
    "action": "person",
    "why": "documents do not answer it",
    "draft": {
     "found": false,
     "draft": "Hello Diana, a colleague will reply to your question soon.",
     "used": []
    },
    "want": "person"
   }
  },
  {
   "email": {
    "id": 44,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Gustav Ny, Ny Ventilation",
    "subj": "Lagerstatus",
    "body": "Har ni 400 kopplingsdosor i lager just nu?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.42,
     "find_s": 0.04
    },
    "sort": {
     "kind": "question",
     "confidence": 0.837,
     "wants_person": 0.075,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.384
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.366
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.362
     }
    ],
    "action": "person",
    "why": "no document matches well (0.38)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 45,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Kevin Shaw, Shaw Install",
    "subj": "Glove brand",
    "body": "Which brand are your cut level C gloves?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.39,
     "find_s": 0.04,
     "write_s": 5.36
    },
    "sort": {
     "kind": "question",
     "confidence": 0.881,
     "wants_person": 0.123,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.515
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.332
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.286
     }
    ],
    "action": "person",
    "why": "documents do not answer it",
    "draft": {
     "found": false,
     "draft": "Hello Kevin, we do not have information regarding the brand of our cut level C gloves. A colleague will reply to your email soon.",
     "used": []
    },
    "want": "person"
   }
  },
  {
   "email": {
    "id": 46,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Frida Malm, Malm Bygg",
    "subj": "Leverans lördag",
    "body": "Kan ni leverera på en lördag?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.44,
     "find_s": 0.04
    },
    "sort": {
     "kind": "order",
     "confidence": 0.562,
     "wants_person": 0.083,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.506
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.485
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.436
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.56)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 47,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Alan Brooks, Brooks Marine",
    "subj": "Marine grade",
    "body": "Are A4 screws good enough for a boat deck?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.46,
     "find_s": 0.04,
     "write_s": 5.67
    },
    "sort": {
     "kind": "question",
     "confidence": 0.907,
     "wants_person": 0.099,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.42
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.249
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.226
     }
    ],
    "action": "person",
    "why": "documents do not answer it",
    "draft": {
     "found": false,
     "draft": "Hello Alan, we are not sure if A4 screws are suitable for a boat deck. A colleague will reply to your email soon.",
     "used": []
    },
    "want": "person"
   }
  },
  {
   "email": {
    "id": 48,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Oskar Lund, Lund Fasad",
    "subj": "Offert",
    "body": "Kan ni ge oss ett pris på 2 000 st specialbultar M12x120?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.49,
     "find_s": 0.04,
     "write_s": 7.62
    },
    "sort": {
     "kind": "question",
     "confidence": 0.915,
     "wants_person": 0.102,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.433
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.414
     },
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.393
     }
    ],
    "action": "person",
    "why": "documents do not answer it",
    "draft": {
     "found": false,
     "draft": "Hej Oskar,\n\nVi behöver mer information för att kunna ge er ett pris på specialbultarna M12x120. En kollega kommer att återkomma till er så snart som möjligt.\n\nMed vänliga hälsningar,\nÄlvkant order desk",
     "used": []
    },
    "want": "person"
   }
  },
  {
   "email": {
    "id": 49,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Eva Stone, Stone Labs",
    "subj": "Safety data sheet",
    "body": "Can you send the safety data sheet for your cable ties?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.43,
     "find_s": 0.04
    },
    "sort": {
     "kind": "order",
     "confidence": 0.566,
     "wants_person": 0.088,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.428
     },
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.396
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.326
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.57)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 50,
    "lang": "sv",
    "kind": "question",
    "person": false,
    "expect": [],
    "frm": "Johanna Vik, Vik Event",
    "subj": "Hyra",
    "body": "Hyr ni ut hörselskydd till evenemang?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.43,
     "find_s": 0.05
    },
    "sort": {
     "kind": "question",
     "confidence": 0.588,
     "wants_person": 0.1,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.321
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.278
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.239
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.59)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 51,
    "lang": "en",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Anna Berg, Berg Electric",
    "subj": "Order",
    "body": "Please send 10 junction boxes IP65 to our site in Mölndal. Ref B-221."
   },
   "result": {
    "seconds": {
     "sort_s": 0.56,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.976,
     "wants_person": 0.096,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.62
     },
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.426
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.394
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 52,
    "lang": "sv",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Mats Holm, Holm Bygg",
    "subj": "Beställning",
    "body": "Hej, vi beställer 4 kartonger M8x40 och 2 kartonger muttrar M8. Leverans till vanliga adressen."
   },
   "result": {
    "seconds": {
     "sort_s": 0.5,
     "find_s": 0.06
    },
    "sort": {
     "kind": "order",
     "confidence": 0.963,
     "wants_person": 0.074,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.422
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.413
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.407
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 53,
    "lang": "en",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Liam Scott, Scott HVAC",
    "subj": "New order",
    "body": "Order: 3 x hearing protection SNR 30, 5 pairs of gloves size 10. Deliver to Exportgatan pickup please."
   },
   "result": {
    "seconds": {
     "sort_s": 0.55,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.967,
     "wants_person": 0.083,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.697
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.462
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.399
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 54,
    "lang": "sv",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Sara Kahn, Kahn El",
    "subj": "Order 5512",
    "body": "Skicka 2 rullar EKK 3G1.5 och 1 påse buntband. Vår ref: 5512."
   },
   "result": {
    "seconds": {
     "sort_s": 0.51,
     "find_s": 0.06
    },
    "sort": {
     "kind": "order",
     "confidence": 0.96,
     "wants_person": 0.068,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.539
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.35
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.343
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 55,
    "lang": "en",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Chris Ford, Ford Builders",
    "subj": "Restock",
    "body": "Same as last month please: 6 boxes M10x50 and 6 boxes M8 nuts."
   },
   "result": {
    "seconds": {
     "sort_s": 0.49,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.944,
     "wants_person": 0.074,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.579
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.347
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.339
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 56,
    "lang": "sv",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Ali Rahimi, Rahimi Plåt",
    "subj": "Beställ",
    "body": "Vi vill beställa 20 par handskar storlek 9. Kan ni skicka idag?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.48,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.942,
     "wants_person": 0.086,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.38
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.37
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.367
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 57,
    "lang": "en",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Megan Lee, Lee Facilities",
    "subj": "PO 7781",
    "body": "Attached is PO 7781: 12 safety glasses, 12 hearing protectors. Please confirm delivery date."
   },
   "result": {
    "seconds": {
     "sort_s": 0.53,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.67,
     "wants_person": 0.097,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.557
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.374
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.352
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.67)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 58,
    "lang": "sv",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Nils Ström, Ström Snickeri",
    "subj": "Order till bygget",
    "body": "Leverera 3 kartonger rostfria skruv A4 till Lindholmen bygget, märk med projekt 44."
   },
   "result": {
    "seconds": {
     "sort_s": 0.51,
     "find_s": 0.07
    },
    "sort": {
     "kind": "order",
     "confidence": 0.975,
     "wants_person": 0.073,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.388
     },
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.364
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.348
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 59,
    "lang": "en",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Ryan Cook, Cook Electric",
    "subj": "Order for Friday",
    "body": "Please ship 4 rolls of EKK cable for delivery on Friday. Account 1093."
   },
   "result": {
    "seconds": {
     "sort_s": 0.52,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.976,
     "wants_person": 0.079,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.545
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.358
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.344
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 60,
    "lang": "sv",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Elsa Berg, Berg Fastighet",
    "subj": "Ny order",
    "body": "Vi behöver 50 kopplingsdosor, skicka dem till Hisingen så snart det går."
   },
   "result": {
    "seconds": {
     "sort_s": 0.53,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.971,
     "wants_person": 0.075,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.405
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.398
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.387
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 61,
    "lang": "en",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Daniel Kim, Kim Workshop",
    "subj": "Order",
    "body": "Send 2 boxes stainless screws and 1 bag cable ties. Card payment is fine."
   },
   "result": {
    "seconds": {
     "sort_s": 0.48,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.967,
     "wants_person": 0.088,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.532
     },
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.51
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.391
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 62,
    "lang": "sv",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Ebba Lund, Lund El",
    "subj": "Påfyllning",
    "body": "Kan ni skicka samma som förra veckan? 8 kartonger buntband."
   },
   "result": {
    "seconds": {
     "sort_s": 0.54,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.898,
     "wants_person": 0.084,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.392
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.368
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.355
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 63,
    "lang": "en",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Paul Grey, Grey Install",
    "subj": "Urgent order",
    "body": "Need 30 pairs of gloves size 9 delivered tomorrow morning to Kungsbacka. Ref PG-3."
   },
   "result": {
    "seconds": {
     "sort_s": 0.51,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.975,
     "wants_person": 0.09,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.479
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.443
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.409
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 64,
    "lang": "sv",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Moa Sten, Sten Bygg",
    "subj": "Order",
    "body": "Hej! Beställer 5 skyddsglasögon och 5 hörselskydd. Hämtar själv kl 14."
   },
   "result": {
    "seconds": {
     "sort_s": 0.59,
     "find_s": 0.06
    },
    "sort": {
     "kind": "order",
     "confidence": 0.933,
     "wants_person": 0.073,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.531
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.393
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.38
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 65,
    "lang": "en",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Nora Hale, Hale Properties",
    "subj": "Order confirmation",
    "body": "We confirm the order from our call: 15 boxes M8x40, deliver to Partille."
   },
   "result": {
    "seconds": {
     "sort_s": 0.51,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.952,
     "wants_person": 0.081,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.394
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.392
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.365
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 66,
    "lang": "en",
    "kind": "complaint",
    "person": true,
    "expect": [],
    "frm": "Rick Moran, Moran VVS",
    "subj": "Still no delivery",
    "body": "We ordered 9 days ago and nothing has arrived. Call me today."
   },
   "result": {
    "seconds": {
     "sort_s": 0.45,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.425,
     "wants_person": 0.818,
     "lang": "en"
    },
    "hits": [
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.448
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.439
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.438
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.42)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 67,
    "lang": "sv",
    "kind": "complaint",
    "person": true,
    "expect": [],
    "frm": "Gunnar Ek, Ek Bygg",
    "subj": "Tredje gången",
    "body": "Tredje gången ni skickar fel storlek. Jag vill prata med en chef."
   },
   "result": {
    "seconds": {
     "sort_s": 0.53,
     "find_s": 0.06
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.86,
     "wants_person": 0.869,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.363
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.328
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.324
     }
    ],
    "action": "person",
    "why": "asks for a person",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 68,
    "lang": "en",
    "kind": "complaint",
    "person": false,
    "expect": [],
    "frm": "Tina Wolf, Wolf Electric",
    "subj": "Unacceptable",
    "body": "Your driver left the pallet in the rain and the cable boxes are ruined. This is unacceptable."
   },
   "result": {
    "seconds": {
     "sort_s": 0.52,
     "find_s": 0.05
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.748,
     "wants_person": 0.138,
     "lang": "en"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.436
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.387
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.322
     }
    ],
    "action": "person",
    "why": "complaint: a person replies",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 69,
    "lang": "sv",
    "kind": "complaint",
    "person": true,
    "expect": [],
    "frm": "Bo Svensson, Svensson Tak",
    "subj": "Ring mig",
    "body": "Fakturan är fel igen, ni har tagit betalt två gånger. Ring mig snarast."
   },
   "result": {
    "seconds": {
     "sort_s": 0.59,
     "find_s": 0.05
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.876,
     "wants_person": 0.8,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.445
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.362
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.33
     }
    ],
    "action": "person",
    "why": "asks for a person",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 70,
    "lang": "en",
    "kind": "complaint",
    "person": false,
    "expect": [],
    "frm": "Ian Bell, Bell Mechanical",
    "subj": "Bad quality",
    "body": "The gloves tore after one day. Very poor quality, not what we pay for."
   },
   "result": {
    "seconds": {
     "sort_s": 0.47,
     "find_s": 0.05
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.674,
     "wants_person": 0.135,
     "lang": "en"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.523
     },
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.451
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.336
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.67)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 71,
    "lang": "sv",
    "kind": "complaint",
    "person": true,
    "expect": [],
    "frm": "Karin Ödman, Ödman Fastighet",
    "subj": "Missnöjd",
    "body": "Jag är mycket missnöjd med hur ni hanterade vår reklamation. Jag vill tala med någon ansvarig."
   },
   "result": {
    "seconds": {
     "sort_s": 0.59,
     "find_s": 0.07
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.946,
     "wants_person": 0.904,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.35
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.251
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.25
     }
    ],
    "action": "person",
    "why": "asks for a person",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 72,
    "lang": "en",
    "kind": "complaint",
    "person": true,
    "expect": [],
    "frm": "Steve Nash, Nash Builders",
    "subj": "Wrong invoice",
    "body": "Your invoice charges us 25 000 kr for an order of 2 500 kr. Get someone to call me."
   },
   "result": {
    "seconds": {
     "sort_s": 0.54,
     "find_s": 0.05
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.739,
     "wants_person": 0.87,
     "lang": "en"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.46
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.401
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.394
     }
    ],
    "action": "person",
    "why": "asks for a person",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 73,
    "lang": "sv",
    "kind": "complaint",
    "person": false,
    "expect": [],
    "frm": "Lisa Holm, Holm Måleri",
    "subj": "Sen leverans igen",
    "body": "Leveransen var två dagar sen igen och vi fick stå still på bygget."
   },
   "result": {
    "seconds": {
     "sort_s": 0.59,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.426,
     "wants_person": 0.081,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.424
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.413
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.392
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.43)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 74,
    "lang": "en",
    "kind": "complaint",
    "person": false,
    "expect": [],
    "frm": "Ola Berg, Berg Marine",
    "subj": "Rude staff",
    "body": "Your staff at the warehouse were rude to my worker this morning."
   },
   "result": {
    "seconds": {
     "sort_s": 0.56,
     "find_s": 0.05
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.828,
     "wants_person": 0.16,
     "lang": "en"
    },
    "hits": [
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.304
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.297
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.274
     }
    ],
    "action": "person",
    "why": "complaint: a person replies",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 75,
    "lang": "sv",
    "kind": "complaint",
    "person": true,
    "expect": [],
    "frm": "Per Lind, Lind VVS",
    "subj": "Avsluta konto",
    "body": "Vi har fått nog av felleveranser. Ring mig, annars avslutar vi kontot."
   },
   "result": {
    "seconds": {
     "sort_s": 0.64,
     "find_s": 0.06
    },
    "sort": {
     "kind": "other",
     "confidence": 0.489,
     "wants_person": 0.815,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.369
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.336
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.296
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.49)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 76,
    "lang": "en",
    "kind": "complaint",
    "person": false,
    "expect": [],
    "frm": "Grace Kim, Kim Interiors",
    "subj": "Missing items",
    "body": "Half of order 4471 is missing and nobody answered my last email."
   },
   "result": {
    "seconds": {
     "sort_s": 0.55,
     "find_s": 0.05
    },
    "sort": {
     "kind": "question",
     "confidence": 0.495,
     "wants_person": 0.23,
     "lang": "en"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.45
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.368
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.31
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.49)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 77,
    "lang": "sv",
    "kind": "complaint",
    "person": true,
    "expect": [],
    "frm": "Rasmus Ek, Ek El",
    "subj": "Fel pris",
    "body": "Ni har fakturerat fel pris på kabeln två gånger nu. Jag vill prata med er ekonomi."
   },
   "result": {
    "seconds": {
     "sort_s": 0.59,
     "find_s": 0.06
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.825,
     "wants_person": 0.728,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.437
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.432
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.408
     }
    ],
    "action": "person",
    "why": "asks for a person",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 78,
    "lang": "en",
    "kind": "complaint",
    "person": true,
    "expect": [],
    "frm": "Helen Shaw, Shaw Cleaning",
    "subj": "Speak to a manager",
    "body": "I have called three times. I want to speak to a manager today."
   },
   "result": {
    "seconds": {
     "sort_s": 0.52,
     "find_s": 0.05
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.875,
     "wants_person": 0.84,
     "lang": "en"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.246
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.245
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.236
     }
    ],
    "action": "person",
    "why": "asks for a person",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 79,
    "lang": "sv",
    "kind": "complaint",
    "person": false,
    "expect": [],
    "frm": "Viktor Ahl, Ahl Bygg",
    "subj": "Skadat gods",
    "body": "Andra gången på en månad som pallen kommer trasig. Det här håller inte."
   },
   "result": {
    "seconds": {
     "sort_s": 0.58,
     "find_s": 0.06
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.693,
     "wants_person": 0.106,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.375
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.318
     },
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.3
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.69)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 80,
    "lang": "en",
    "kind": "complaint",
    "person": false,
    "expect": [],
    "frm": "Jack Lowe, Lowe Electric",
    "subj": "Overcharged shipping",
    "body": "You charged shipping on a 3 000 kr order. Your own terms say free over 2 000. Fix it."
   },
   "result": {
    "seconds": {
     "sort_s": 0.6,
     "find_s": 0.05
    },
    "sort": {
     "kind": "question",
     "confidence": 0.438,
     "wants_person": 0.156,
     "lang": "en"
    },
    "hits": [
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.581
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.387
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.378
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.44)",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 81,
    "lang": "en",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Growth Agency",
    "subj": "Double your sales",
    "body": "We help industrial suppliers double their online sales. Book a free call this week!"
   },
   "result": {
    "seconds": {
     "sort_s": 0.52,
     "find_s": 0.05
    },
    "sort": {
     "kind": "other",
     "confidence": 0.857,
     "wants_person": 0.8,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.331
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.32
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.279
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 82,
    "lang": "sv",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Nyhetsbrev Byggindustrin",
    "subj": "Veckans nyheter",
    "body": "Läs veckans nyheter från byggbranschen. Avregistrera dig här."
   },
   "result": {
    "seconds": {
     "sort_s": 0.56,
     "find_s": 0.05
    },
    "sort": {
     "kind": "other",
     "confidence": 0.828,
     "wants_person": 0.065,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.419
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.412
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.277
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 83,
    "lang": "en",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "IT Support Desk",
    "subj": "Your mailbox is full",
    "body": "Your mailbox is full. Click here to verify your password within 24 hours."
   },
   "result": {
    "seconds": {
     "sort_s": 0.59,
     "find_s": 0.05
    },
    "sort": {
     "kind": "other",
     "confidence": 0.758,
     "wants_person": 0.076,
     "lang": "en"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.31
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.301
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.228
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 84,
    "lang": "sv",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Kontorsmaterial AB",
    "subj": "Erbjudande",
    "body": "Just nu 30% rabatt på kontorsmaterial för företag. Beställ före fredag!"
   },
   "result": {
    "seconds": {
     "sort_s": 0.6,
     "find_s": 0.06
    },
    "sort": {
     "kind": "other",
     "confidence": 0.435,
     "wants_person": 0.074,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.453
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.436
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.364
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.43)",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 85,
    "lang": "en",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "LinkedIn",
    "subj": "You appeared in 12 searches",
    "body": "See who is looking at your profile this week."
   },
   "result": {
    "seconds": {
     "sort_s": 0.52,
     "find_s": 0.06
    },
    "sort": {
     "kind": "other",
     "confidence": 0.927,
     "wants_person": 0.072,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.203
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.187
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.176
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 86,
    "lang": "en",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Auto-reply: Johan Berg",
    "subj": "Out of office",
    "body": "I am out of office until Monday. For urgent matters call the switchboard."
   },
   "result": {
    "seconds": {
     "sort_s": 0.6,
     "find_s": 0.06
    },
    "sort": {
     "kind": "other",
     "confidence": 0.71,
     "wants_person": 0.44,
     "lang": "en"
    },
    "hits": [
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.429
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.314
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.275
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 87,
    "lang": "sv",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Frånvaro: Anna Lind",
    "subj": "Autosvar",
    "body": "Jag är på semester till vecka 32. Kontakta kontoret vid brådskande ärenden."
   },
   "result": {
    "seconds": {
     "sort_s": 0.6,
     "find_s": 0.05
    },
    "sort": {
     "kind": "other",
     "confidence": 0.675,
     "wants_person": 0.175,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.414
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.404
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.381
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.68)",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 88,
    "lang": "en",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Crypto Profits",
    "subj": "Make 5000 euro a week",
    "body": "Join thousands earning passive income from home. Limited spots."
   },
   "result": {
    "seconds": {
     "sort_s": 0.49,
     "find_s": 0.05
    },
    "sort": {
     "kind": "other",
     "confidence": 0.862,
     "wants_person": 0.112,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.232
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.206
     },
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.203
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 89,
    "lang": "sv",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Jobbsökande: Ali Hassan",
    "subj": "Spontanansökan",
    "body": "Hej, jag söker jobb som lagerarbetare och bifogar mitt CV."
   },
   "result": {
    "seconds": {
     "sort_s": 0.58,
     "find_s": 0.05
    },
    "sort": {
     "kind": "other",
     "confidence": 0.901,
     "wants_person": 0.103,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.372
     },
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.318
     },
     {
      "id": "company-info#Opening hours and holidays",
      "doc": "company-info",
      "text": "## Opening hours and holidays\n- Office, phone and warehouse pickup: weekdays 07:00–16:00.\n- Summer: closed in week 29 (July). Orders placed that week ship in week 30.\n- Closed on Swedish public holidays.",
      "score": 0.296
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 90,
    "lang": "en",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Webinar Team",
    "subj": "Invitation: AI for logistics",
    "body": "Join our free webinar on AI in logistics next Thursday."
   },
   "result": {
    "seconds": {
     "sort_s": 0.54,
     "find_s": 0.05
    },
    "sort": {
     "kind": "other",
     "confidence": 0.896,
     "wants_person": 0.087,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.247
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.221
     },
     {
      "id": "company-info#About us",
      "doc": "company-info",
      "text": "# About us\n\nÄlvkant Industridelar AB (fictional) sells fasteners, electrical parts and safety gear to builders and workshops in western Sweden.\n- Address: Exportgatan 12, 422 46 Hisings Backa, Göteborg.\n- Phone: 031-000 00 00\n- Email: order@alvkant.example",
      "score": 0.221
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 91,
    "lang": "sv",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Skatteverket-info (falsk)",
    "subj": "Återbetalning",
    "body": "Du har en skatteåterbäring. Klicka på länken och ange ditt bankkonto."
   },
   "result": {
    "seconds": {
     "sort_s": 0.65,
     "find_s": 0.07
    },
    "sort": {
     "kind": "other",
     "confidence": 0.82,
     "wants_person": 0.068,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.413
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.35
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.322
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 92,
    "lang": "en",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Printer Supplies Ltd",
    "subj": "Toner offer",
    "body": "Cheap toner for all printer models. Free delivery on orders over 50 euro."
   },
   "result": {
    "seconds": {
     "sort_s": 0.59,
     "find_s": 0.06
    },
    "sort": {
     "kind": "question",
     "confidence": 0.525,
     "wants_person": 0.067,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.432
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.319
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.306
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.53)",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 93,
    "lang": "sv",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Lokaltidningen",
    "subj": "Annonsera hos oss",
    "body": "Synas i Göteborgs lokaltidning, boka annons nu och få 20% rabatt."
   },
   "result": {
    "seconds": {
     "sort_s": 0.72,
     "find_s": 0.06
    },
    "sort": {
     "kind": "other",
     "confidence": 0.769,
     "wants_person": 0.078,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.363
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.351
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.336
     }
    ],
    "action": "skip",
    "why": "not a customer email",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 94,
    "lang": "en",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Survey Team",
    "subj": "2 minute survey",
    "body": "Tell us about your experience and win a gift card."
   },
   "result": {
    "seconds": {
     "sort_s": 0.64,
     "find_s": 0.06
    },
    "sort": {
     "kind": "other",
     "confidence": 0.49,
     "wants_person": 0.074,
     "lang": "en"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.304
     },
     {
      "id": "payment-and-accounts#Payment and customer accounts",
      "doc": "payment-and-accounts",
      "text": "# Payment and customer accounts\n\n- Companies pay by invoice, 30 days net. New customers get a credit check before the first invoice.\n- Private persons pay by card or Swish when they order.\n- Late payment: reminder fee 60 kr and interest by the Swedish Interest Act.\n- To open a company account, send your company name, organisation number and invoice address to order@alvkant.example.\n- Invoices are sent by email as PDF. E-invoice (Peppol) is available on request.",
      "score": 0.258
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.243
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.49)",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 95,
    "lang": "sv",
    "kind": "other",
    "person": false,
    "expect": [],
    "frm": "Leverantör: Stålgrossisten",
    "subj": "Ny prislista",
    "body": "Bifogat finns vår nya prislista för 2027 till er som återförsäljare."
   },
   "result": {
    "seconds": {
     "sort_s": 1.43,
     "find_s": 0.06
    },
    "sort": {
     "kind": "question",
     "confidence": 0.53,
     "wants_person": 0.07,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.496
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.337
     },
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.329
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.53)",
    "draft": null,
    "want": "skip"
   }
  },
  {
   "email": {
    "id": 96,
    "lang": "en",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Zoe Hart, Hart Electric",
    "subj": "Order + timing",
    "body": "Please send 4 boxes of M8x40 bolts to Angered. When will they arrive?"
   },
   "result": {
    "seconds": {
     "sort_s": 1.04,
     "find_s": 0.05
    },
    "sort": {
     "kind": "order",
     "confidence": 0.901,
     "wants_person": 0.116,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Fasteners",
      "doc": "price-list",
      "text": "## Fasteners\n- Hex bolt M8x40, steel 8.8, zinc — box of 100: 189 kr (item 1001)\n- Hex bolt M10x50, steel 8.8, zinc — box of 100: 259 kr (item 1002)\n- Hex nut M8, zinc — box of 200: 99 kr (item 1010)\n- Stainless screw A4 5x50 — box of 200: 349 kr (item 1020)",
      "score": 0.596
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.424
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.409
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 97,
    "lang": "sv",
    "kind": "order",
    "person": false,
    "expect": [],
    "frm": "Leif Ross, Ross Bygg",
    "subj": "Beställning och fråga",
    "body": "Skicka 10 par handskar storlek 10. Kan ni fakturera oss?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.84,
     "find_s": 0.06
    },
    "sort": {
     "kind": "order",
     "confidence": 0.88,
     "wants_person": 0.089,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.406
     },
     {
      "id": "delivery-terms#Shipping cost",
      "doc": "delivery-terms",
      "text": "## Shipping cost\n- Free shipping within Sweden on orders over 2 000 kr excluding VAT.\n- Otherwise 149 kr per order within Sweden, 349 kr to Norway or Denmark.",
      "score": 0.383
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.368
     }
    ],
    "action": "order",
    "why": "goes to the order flow (email -> sheet)",
    "draft": null,
    "want": "order"
   }
  },
  {
   "email": {
    "id": 98,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "price-list"
    ],
    "frm": "Ivy Moore, Moore Workshop",
    "subj": "Thinking of ordering",
    "body": "We are thinking about ordering 12 boxes of cable ties next month. Would we get a discount?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.71,
     "find_s": 0.05,
     "write_s": 7.46,
     "check_s": 0.92
    },
    "sort": {
     "kind": "question",
     "confidence": 0.933,
     "wants_person": 0.166,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Volume discount",
      "doc": "price-list",
      "text": "## Volume discount\n- 5% off order lines of 10 boxes or more of the same item.\n- 10% off orders over 20 000 kr excluding VAT.",
      "score": 0.623
     },
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.534
     },
     {
      "id": "price-list#Price list 2026 — Älvkant Industridelar AB (fictional)",
      "doc": "price-list",
      "text": "# Price list 2026 — Älvkant Industridelar AB (fictional)\nPrices in SEK, excluding VAT (25%). Valid from 1 Jan 2026.",
      "score": 0.362
     }
    ],
    "action": "draft",
    "why": "draft ready for a person to send",
    "draft": {
     "found": true,
     "draft": "Hello Ivy, yes, you would qualify for a discount on 12 boxes of cable ties, as the volume discount offers 5% off order lines of 10 boxes or more of the same item. Please let us know when you are ready to place your order!",
     "used": [
      "price-list#Volume discount"
     ],
     "grounded": 0.631
    },
    "want": "draft"
   }
  },
  {
   "email": {
    "id": 99,
    "lang": "sv",
    "kind": "complaint",
    "person": true,
    "expect": [],
    "frm": "Elias Berg, Berg Mark",
    "subj": "Ingen svarar",
    "body": "Jag har mejlat tre gånger utan svar om en trasig leverans. Ring mig nu."
   },
   "result": {
    "seconds": {
     "sort_s": 0.68,
     "find_s": 0.05
    },
    "sort": {
     "kind": "complaint",
     "confidence": 0.861,
     "wants_person": 0.785,
     "lang": "sv"
    },
    "hits": [
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.441
     },
     {
      "id": "delivery-terms#Delivery times",
      "doc": "delivery-terms",
      "text": "## Delivery times\n- Göteborg area (postcodes 40–43): next working day if the order is in before 14:00.\n- Rest of Sweden: 2–4 working days with DB Schenker.\n- Norway and Denmark: 4–6 working days.",
      "score": 0.397
     },
     {
      "id": "delivery-terms#Pickup",
      "doc": "delivery-terms",
      "text": "## Pickup\n- You can pick up orders at our warehouse, Exportgatan 12, Göteborg, weekdays 07:00–16:00. Orders are ready 2 hours after you order.",
      "score": 0.381
     }
    ],
    "action": "person",
    "why": "asks for a person",
    "draft": null,
    "want": "person"
   }
  },
  {
   "email": {
    "id": 100,
    "lang": "en",
    "kind": "question",
    "person": false,
    "expect": [
     "returns"
    ],
    "frm": "Rosa Diaz, Diaz Interiors",
    "subj": "Wrong colour",
    "body": "We received white cable ties but ordered black. They are unopened. Can we swap them?"
   },
   "result": {
    "seconds": {
     "sort_s": 0.76,
     "find_s": 0.06
    },
    "sort": {
     "kind": "question",
     "confidence": 0.552,
     "wants_person": 0.187,
     "lang": "en"
    },
    "hits": [
     {
      "id": "price-list#Cable and electrical",
      "doc": "price-list",
      "text": "## Cable and electrical\n- Cable tie 300 mm, black — bag of 100: 79 kr (item 2001)\n- Installation cable EKK 3G1.5, 50 m: 1 190 kr (item 2010)\n- Junction box IP65: 64 kr each (item 2020)",
      "score": 0.496
     },
     {
      "id": "returns#Returns and complaints",
      "doc": "returns",
      "text": "# Returns and complaints\n\n- You may return unopened items within 30 days. Contact us first and we send a return label.\n- Return shipping costs 99 kr, deducted from the refund. Free if we sent the wrong item.\n- Opened boxes of fasteners cannot be returned.\n- Damaged or wrong goods: report within 8 days with a photo. We send a replacement at no cost.\n- Refunds are paid within 10 working days after we receive the return.",
      "score": 0.449
     },
     {
      "id": "price-list#Safety",
      "doc": "price-list",
      "text": "## Safety\n- Work gloves, cut level C, size 9 or 10: 89 kr per pair (item 3001)\n- Safety glasses, clear: 59 kr (item 3010)\n- Hearing protection, SNR 30: 249 kr (item 3020)",
      "score": 0.318
     }
    ],
    "action": "person",
    "why": "sorter unsure (0.55)",
    "draft": null,
    "want": "draft"
   }
  }
 ]
};
