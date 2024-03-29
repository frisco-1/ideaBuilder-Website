export const BCPRICES = [
  { id: 0, type: "Black & White 14 PT. - One Sided", quantity: 1000, price: 30, img: "./img/01-Printing/BusinessCard/Black&White.png", code: 'BC 1' },
  { id: 1, type: "Multicolor 14 PT. - One Sided", quantity: 1000, price: 45, img: "./img/01-Printing/BusinessCard/Multicolor.png", code: 'BC 2' },
  { id: 2, type: "Full Color - One Sided", quantity: 1000, price: 55, img: "./img/01-Printing/BusinessCard/FullColor1.png", code: 'BC 3' },
  { id: 3, type: "Full Color 14 PT. - Double Sided ", quantity: 1000, price: 65, img: "./img/01-Printing/BusinessCard/FullColor14PT.png", code: 'BC 4' },
  { id: 4, type: "Full Color 16 PT. - Double Sided ", quantity: 1000, price: 75, img: "./img/01-Printing/BusinessCard/FullColor16PT.png", code: 'BC 5' },
  { id: 5, type: "Full Color 12 PT. - Double Sided ", quantity: 5000, price: 120, img: "./img/01-Printing/BusinessCard/FullColor12PT.png ", code: 'BC 6' },
  { id: 6, type: "Full Color 16 PT. - Double Sided Round Corners", quantity: 5000, price: 180, img: "./img/01-Printing/BusinessCard/FullColor16PTRound.png", code: 'BC 7' },
  { id: 7, type: "Full Color Spot UV 16 PT. - One Sided Round Corners", quantity: 1000, price: 125, img: "./img/01-Printing/BusinessCard/SpotUV.png", code: 'BC 8' },
  { id: 8, type: "16 PT Silk Laminated with Foil - Double Sided", quantity: 1000, price: 235, img: "./img/01-Printing/BusinessCard/SilkLam.png", code: 'BC 10' },
  {
    id: 9, type: "20 PT Clear Plastic or Clear Frosted - One Sided", quantity: 1000, price: 265, img: "./img/01-Printing/BusinessCard/ClearPlasticClearFrostedBC.png",code: 'BC 11'
  },
  { id: 10, type: "20 PT White Plastic - Double Sided", quantity: 1000, price: 210, img: "./img/01-Printing/BusinessCard/ClearPlasticClearFrostedBC.png", code: 'BC 12' },
  { id: 11, type: "32 PT Uncoated Painted Edge - One Sided", quantity: 1000, price: 270, img: "./img/01-Printing/BusinessCard/32PT.png", code: 'BC 13' },
  { id: 12, type: "Business Card Magnet FULL COLOR - One Sided", quantity: 1000, price: 240, img: "./img/01-Printing/BusinessCard/MagentFullColorBC.png", code: 'BC 14' },
  { id: 13, type: "Business Card Sticker FULL COLOR - One Sided", quantity: 1000, price: 160, img: "./img/01-Printing/BusinessCard/StickerFullColorBC.png", code: 'BC 15' },
];

export const FLYERS = [

  {
    id: 0,
    type: '3" x 4" Cardstock 14PT 2 Sides',
    img:'./img/01-Printing/Flyers/Flyers3x4.png',
    code: 'FLY 1',
    pricing: [
      { id: 0, quantity: 500, price: 75},
      { id: 1, quantity: 1000, price: 140},
      { id: 2, quantity: 5000, price: 210},
      { id: 3, quantity: 10000, price: "N/A"},
    ]
  },
  {
    id: 1,
    type: '4" x 6" Cardstock 14PT 1 Side',
    img: "./img/01-Printing/Flyers/4x6 1Side.png",
    code: 'FLY 2',
    pricing: [
      { id: 0, quantity: 500, price: 60},
      { id: 1, quantity: 1000, price: 95}
    ]
  },
  {
    id: 2,
    type: '4" x 6" Cardstock 14PT 2 Sides',
    img: "./img/01-Printing/Flyers/4x6 2Side.png",
    code: 'FLY 3',
    pricing: [
      { id: 0, quantity: 500, price: 60},
      { id: 1, quantity: 1000, price: 95}
    ]
  },
  {
    id: 3,
    type: '3.6" x 8.5" Cardstock 14PT 2 Sides',
    img: "./img/01-Printing/Flyers/3.6x8.5.png",
    code: 'FLY 4',
    pricing: [
      { id: 0, quantity: 500, price: 120},
      { id: 1, quantity: 1000, price: 200},
      { id: 2, quantity: 5000, price: 375},
    ]
  },
  {
    id: 4,
    type: '5.5" x 8.5" Cardstock 14PT 1 Side',
    img: "./img/01-Printing/Flyers/5.5x8.5.png",
    code: 'FLY 5',
    pricing: [
      { id: 0, quantity: 500, price: 120},
      { id: 1, quantity: 1000, price: 220},
      { id: 2, quantity: 5000, price: 475},
      { id: 3, quantity: 10000, price: 750},
    ]
  },
  {
    id: 5,
    type: '6.75" x 9" Cardstock 14PT 2 Sides',
    img: "./img/01-Printing/Flyers/6.75x9.png",
    code: 'FLY 6',
    pricing: [
      { id: 0, quantity: 500, price: 175},
      { id: 1, quantity: 1000, price: 280},
      { id: 2, quantity: 5000, price: 550},
      { id: 3, quantity: 10000, price: 950},
    ]
  },
  {
    id: 6,
    type: '4" x 6" Magnetic 1 Side',
    img: "./img/01-Printing/Flyers/4x6Magnetic.png",
    code: 'FLY 7',
    pricing: [
      { id: 0, quantity: 500, price: 330},
      { id: 1, quantity: 1000, price: 540},
      { id: 2, quantity: 5000, price: 950}
    ]
  },
];

export const DOORHANGERS = [
  {
    id: 0,
    name: '3.6" x 8.5" Cardstock 14 PT',
    pricing: [
      { id: 0, quantity: 1000, price: 235 },
      { id: 1, quantity: 5000, price: 375 },
    ],
    img: "./img/01-Printing/Door Hangers/DoorHanger-3x8.png",
  },
  {
    id: 1,
    name: '4.25" x 11" Cardstock 14 PT',
    pricing: [
      { id: 0, quantity: 1000, price: 410 },
      { id: 1, quantity: 5000, price: 535 },
    ],
    img: "./img/01-Printing/Door Hangers/DoorHanger-4.25x11.png",
  },
];

// Check Envelopes Again
export const ENVELOPES = [
  {
    id: 0,
    type: "No.6 / No.10 1 Color",
    img: './img/01-Printing/Envelopes/No6_No10-1Color.png',
    amount:
    [
      {id: 0, quantity: 1000, price: 120},
      {id: 1, quantity: 2000, price: 205},
      {id: 2, quantity: 3000, price: 290},
      {id: 3, quantity: 4000, price: 375},
      {id: 4, quantity: 5000, price: 460},
      {id: 5, quantity: 6000, price: 545},
      {id: 6, quantity: 7000, price: 630},
      {id: 7, quantity: 8000, price: 715},
      {id: 8, quantity: 9000, price: 800},
    ]
  },
  {
    id: 1,
    type: "No.6 Top Opening 1 Color",
    img: './img/01-Printing/Envelopes/No6 Top Opening 1 Color.png',
    amount:
    [
      {id: 0, quantity: 1000, price: 150},
      {id: 1, quantity: 2000, price: 245},
      {id: 2, quantity: 3000, price: 340},
      {id: 3, quantity: 4000, price: 435},
      {id: 4, quantity: 5000, price: 530},
      {id: 5, quantity: 6000, price: 625},
      {id: 6, quantity: 7000, price: 720},
      {id: 7, quantity: 8000, price: 815},
      {id: 8, quantity: 9000, price: 910},
    ]
  },
  {
    id: 2,
    type: "No.6 / No.10 Multicolor",
    img: './img/01-Printing/Envelopes/No6_No10 Multicolor.png',
    amount:
    [
      {id: 0, quantity: 500, price: 150},
      {id: 1, quantity: 1000, price: 250},
      {id: 2, quantity: 2000, price: 390},
      {id: 3, quantity: 3000, price: 530},
      {id: 4, quantity: 4000, price: 670},
      {id: 5, quantity: 5000, price: 810},
      {id: 6, quantity: 6000, price: 950},
      {id: 7, quantity: 7000, price: 1090},
      {id: 8, quantity: 8000, price: 1230},
      {id: 9, quantity: 9000, price: 1370},
    ]
  },
  {
    id: 3,
    type: "No.10 Multicolor Window",
    img: './img/01-Printing/Envelopes/No10 Multicolor.png',
    amount:
    [
      {id: 0, quantity: 500, price: 180},
      {id: 1, quantity: 1000, price: 310},
      {id: 2, quantity: 2000, price: 490},
      {id: 3, quantity: 3000, price: 670},
      {id: 4, quantity: 4000, price: 850},
      {id: 5, quantity: 5000, price: 1030},
      {id: 6, quantity: 6000, price: 1210},
      {id: 7, quantity: 7000, price: 1390},
      {id: 8, quantity: 8000, price: 1570},
      {id: 9, quantity: 9000, price: 1750},
    ]
  },
  {
    id: 4,
    type: "No 10. Specialty Paper",
    img: './img/01-Printing/Envelopes/No10 Multicolor.png',
    amount:
    [
      {id: 0, quantity: 500, price: 220},
      {id: 1, quantity: 1000, price: 375},
      {id: 2, quantity: 2000, price: 670}
    ]
  },
];

export const LETTERHEADS = [
  { type: "Full Color/Linen Paper", quantity: 500, price: 150 },
  { type: "Full Color/Linen Paper", quantity: 1000, price: 225 },
];
//test
// Check Over Invoices Again
export const INVOICES = [
  {
    id: 0,
    name: "Invoices Contracts Black Ink 2 Parts",
    measurements: [
      {
        id: 0,
        size: '5.5" x 8.5"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 60 },
              { id: 1, quantity: 1000, price: 140 },
              { id: 2, quantity: 2000, price: 220 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 80 },
              { id: 1, quantity: 1000, price: 170 },
              { id: 2, quantity: 2000, price: 250 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 220 },
              { id: 1, quantity: 2000, price: 300 },
            ],
          },
        ],
      },
      {
        id: 1,
        size: '4.25" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 60 },
              { id: 1, quantity: 1000, price: 140 },
              { id: 2, quantity: 2000, price: 220 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 80 },
              { id: 1, quantity: 1000, price: 170 },
              { id: 2, quantity: 2000, price: 250 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 220 },
              { id: 1, quantity: 2000, price: 300 },
            ],
          },
        ],
      },
      {
        id: 2,
        size: '8.5" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 60 },
              { id: 1, quantity: 500, price: 140 },
              { id: 2, quantity: 1000, price: 220 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 80 },
              { id: 1, quantity: 500, price: 170 },
              { id: 2, quantity: 1000, price: 250 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 220 },
              { id: 1, quantity: 1000, price: 300 },
            ],
          },
        ],
      },
      {
        id: 3,
        size: '8.5" x 14"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 120 },
              { id: 1, quantity: 500, price: 280 },
              { id: 2, quantity: 1000, price: 400 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 140 },
              { id: 1, quantity: 500, price: 300 },
              { id: 2, quantity: 1000, price: 430 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 350 },
              { id: 1, quantity: 1000, price: 480 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Invoices Contracts Black Ink 3 Parts",
    measurements: [
      {
        id: 0,
        size: '5.5" x 8.5"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 90 },
              { id: 1, quantity: 1000, price: 180 },
              { id: 2, quantity: 2000, price: 280 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 110 },
              { id: 1, quantity: 1000, price: 200 },
              { id: 2, quantity: 2000, price: 310 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 250 },
              { id: 1, quantity: 2000, price: 360 },
            ],
          },
        ],
      },
      {
        id: 1,
        size: '4.25" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 90 },
              { id: 1, quantity: 1000, price: 180 },
              { id: 2, quantity: 2000, price: 280 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 110 },
              { id: 1, quantity: 1000, price: 200 },
              { id: 2, quantity: 2000, price: 310 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 250 },
              { id: 1, quantity: 2000, price: 360 },
            ],
          },
        ],
      },
      {
        id: 2,
        size: '8.5" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 90 },
              { id: 1, quantity: 500, price: 180 },
              { id: 2, quantity: 1000, price: 280 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 110 },
              { id: 1, quantity: 500, price: 200 },
              { id: 2, quantity: 1000, price: 310 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 250 },
              { id: 1, quantity: 1000, price: 360 },
            ],
          },
        ],
      },
      {
        id: 3,
        size: '8.5" x 14"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 150 },
              { id: 1, quantity: 500, price: 330 },
              { id: 2, quantity: 1000, price: 460 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 170 },
              { id: 1, quantity: 500, price: 350 },
              { id: 2, quantity: 1000, price: 490 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 400 },
              { id: 1, quantity: 1000, price: 540 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Invoices Contracts Black Ink 4 Parts",
    measurements: [
      {
        id: 0,
        size: '5.5" x 8.5"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 100 },
              { id: 1, quantity: 1000, price: 200 },
              { id: 2, quantity: 2000, price: 300 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 120 },
              { id: 1, quantity: 1000, price: 220 },
              { id: 2, quantity: 2000, price: 330 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 270 },
              { id: 1, quantity: 2000, price: 380 },
            ],
          },
        ],
      },
      {
        id: 1,
        size: '4.25" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 100 },
              { id: 1, quantity: 1000, price: 200 },
              { id: 2, quantity: 2000, price: 300 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 120 },
              { id: 1, quantity: 1000, price: 220 },
              { id: 2, quantity: 2000, price: 330 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 270 },
              { id: 1, quantity: 2000, price: 380 },
            ],
          },
        ],
      },
      {
        id: 2,
        size: '8.5" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 100 },
              { id: 1, quantity: 500, price: 200 },
              { id: 2, quantity: 1000, price: 300 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 120 },
              { id: 1, quantity: 500, price: 220 },
              { id: 2, quantity: 1000, price: 330 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 270 },
              { id: 1, quantity: 1000, price: 380 },
            ],
          },
        ],
      },
      {
        id: 3,
        size: '8.5" x 14"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 160 },
              { id: 1, quantity: 500, price: 350 },
              { id: 2, quantity: 1000, price: 490 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 180 },
              { id: 1, quantity: 500, price: 370 },
              { id: 2, quantity: 1000, price: 520 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 420 },
              { id: 1, quantity: 1000, price: 570 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Invoices Contracts Full Color 2 Parts",
    measurements: [
      {
        id: 0,
        size: '5.5" x 8.5"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 85 },
              { id: 1, quantity: 1000, price: 190 },
              { id: 2, quantity: 2000, price: 270 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 105 },
              { id: 1, quantity: 1000, price: 210 },
              { id: 2, quantity: 2000, price: 300 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 260 },
              { id: 1, quantity: 2000, price: 350 },
            ],
          },
        ],
      },
      {
        id: 1,
        size: '4.25" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 85 },
              { id: 1, quantity: 1000, price: 190 },
              { id: 2, quantity: 2000, price: 270 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 105 },
              { id: 1, quantity: 1000, price: 210 },
              { id: 2, quantity: 2000, price: 300 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 260 },
              { id: 1, quantity: 2000, price: 350 },
            ],
          },
        ],
      },
      {
        id: 2,
        size: '8.5" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 85 },
              { id: 1, quantity: 500, price: 190 },
              { id: 2, quantity: 1000, price: 270 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 105 },
              { id: 1, quantity: 500, price: 210 },
              { id: 2, quantity: 1000, price: 300 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 260 },
              { id: 1, quantity: 1000, price: 350 },
            ],
          },
        ],
      },
      {
        id: 3,
        size: '8.5" x 14"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 150 },
              { id: 1, quantity: 500, price: 320 },
              { id: 2, quantity: 1000, price: 450 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 170 },
              { id: 1, quantity: 500, price: 340 },
              { id: 2, quantity: 1000, price: 480 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 390 },
              { id: 1, quantity: 1000, price: 530 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Invoices Contracts Full Color 3 Parts",
    measurements: [
      {
        id: 0,
        size: '5.5" x 8.5"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 120 },
              { id: 1, quantity: 1000, price: 220 },
              { id: 2, quantity: 2000, price: 320 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 140 },
              { id: 1, quantity: 1000, price: 240 },
              { id: 2, quantity: 2000, price: 350 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 290 },
              { id: 1, quantity: 2000, price: 400 },
            ],
          },
        ],
      },
      {
        id: 1,
        size: '4.25" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 120 },
              { id: 1, quantity: 1000, price: 220 },
              { id: 2, quantity: 2000, price: 320 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 140 },
              { id: 1, quantity: 1000, price: 240 },
              { id: 2, quantity: 2000, price: 350 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 290 },
              { id: 1, quantity: 2000, price: 400 },
            ],
          },
        ],
      },
      {
        id: 2,
        size: '8.5" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 120 },
              { id: 1, quantity: 500, price: 220 },
              { id: 2, quantity: 1000, price: 320 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 140 },
              { id: 1, quantity: 500, price: 240 },
              { id: 2, quantity: 1000, price: 350 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 290 },
              { id: 1, quantity: 1000, price: 400 },
            ],
          },
        ],
      },
      {
        id: 3,
        size: '8.5" x 14"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 180 },
              { id: 1, quantity: 500, price: 380 },
              { id: 2, quantity: 1000, price: 520 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 200 },
              { id: 1, quantity: 500, price: 400 },
              { id: 2, quantity: 1000, price: 550 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 450 },
              { id: 1, quantity: 1000, price: 600 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Invoices Contracts Full Color 4 Parts",
    measurements: [
      {
        id: 0,
        size: '5.5" x 8.5"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 120 },
              { id: 1, quantity: 1000, price: 235 },
              { id: 2, quantity: 2000, price: 350 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 140 },
              { id: 1, quantity: 1000, price: 255 },
              { id: 2, quantity: 2000, price: 380 },
            ],
          },
          {
            id: 0,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 305 },
              { id: 1, quantity: 2000, price: 430 },
            ],
          },
        ],
      },
      {
        id: 1,
        size: '4.25" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 200, price: 120 },
              { id: 1, quantity: 1000, price: 235 },
              { id: 2, quantity: 2000, price: 350 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 200, price: 140 },
              { id: 1, quantity: 1000, price: 255 },
              { id: 2, quantity: 2000, price: 380 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 1000, price: 305 },
              { id: 1, quantity: 2000, price: 430 },
            ],
          },
        ],
      },
      {
        id: 2,
        size: '8.5" x 11"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 120 },
              { id: 1, quantity: 500, price: 235 },
              { id: 2, quantity: 1000, price: 350 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 140 },
              { id: 1, quantity: 500, price: 255 },
              { id: 2, quantity: 1000, price: 380 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 305 },
              { id: 1, quantity: 1000, price: 430 },
            ],
          },
        ],
      },
      {
        id: 3,
        size: '8.5" x 14"',
        category: [
          {
            id: 0,
            type: "Regular",
            amount: [
              { id: 0, quantity: 100, price: 180 },
              { id: 1, quantity: 500, price: 390 },
              { id: 2, quantity: 1000, price: 540 },
            ],
          },
          {
            id: 1,
            type: "With Numbering",
            amount: [
              { id: 0, quantity: 100, price: 200 },
              { id: 1, quantity: 500, price: 410 },
              { id: 2, quantity: 1000, price: 570 },
            ],
          },
          {
            id: 2,
            type: "With Numbering & Made in Booklets",
            amount: [
              { id: 0, quantity: 500, price: 460 },
              { id: 1, quantity: 1000, price: 620 },
            ],
          },
        ],
      },
    ],
  },
];

export const FOLDERS = [
  { type: '9" x 12" Full Color Cardstock', quantity: 100, price: 500 },
  { type: '9" x 12" Full Color Cardstock', quantity: 500, price: 1300 },
  { type: '9" x 12" Full Color Cardstock', quantity: 1000, price: 1800 },

  { type: '9" x 12" Full Color Staple', quantity: 100, price: 285 },
  { type: '9" x 12" Full Color Staple', quantity: 500, price: 750 },
  { type: '9" x 12" Full Color Staple', quantity: 1000, price: 1100 },
  { type: '9" x 12" Full Color Staple', quantity: 5000, price: 3000 },
];

export const POCKETFP = [
  {
    id: 0,
    name: '9" x 12" Full Color CardStock',
    pricing: [
      { id: 0, quantity: 100, price: 600 },
      { id: 1, quantity: 500, price: 1400 },
      { id: 2, quantity: 1000, price: 1900 },
    ],
  },
  {
    id: 1,
    name: '9" x 12" Full Color Staple',
    pricing: [
      { id: 0, quantity: 100, price: 320 },
      { id: 1, quantity: 500, price: 850 },
      { id: 2, quantity: 1000, price: 1300 },
      { id: 3, quantity: 5000, price: 3600 },
    ],
  },
];

export const REALTORSIGNS = [
  {
    id: 0,
    type: 'Aluminum Sign',
    category: [
      {id: 0, size: '18" x 24"', quantity: 1, price:50}
    ],
    img: "./img/02-Signs/Realtor Signs/RealtorSign01.png"
  },
  {
    id: 1,
    type: 'Aluminum Sign with Frame',
    category: [
      {id: 0, size: '18" x 24"', quantity: 1, price:85}
    ],
    img: "./img/02-Signs/Realtor Signs/RealtorSign02.png"
  },
];

export const BANNERS = [
  {
    id: 0,
    size: '2" x 6"',
    price: 65,
    quantity: 1,
    code: 'BAN1 ',
    img: './img/02-Signs/Banners/Banner2x6.png'
  },
  {
    id: 1,
    size: '2" x 4"',
    price: 65,
    quantity: 1,
    code: 'BAN1 ',
    img: './img/02-Signs/Banners/Banner2x4.png'
  },
  {
    id: 2,
    size: '2" x 8"',
    price: 85,
    quantity: 1,
    code: 'BAN2 ',
    img:'./img/02-Signs/Banners/Banner2x8.png'
  },
  {
    id: 3,
    size: '2" x 10"',
    price: 95,
    quantity: 1,
    code: 'BAN3 ',
    img:'./img/02-Signs/Banners/Banner2x10.png'
  },
  {
    id: 4,
    size: '3" x 6"',
    price: 120,
    quantity: 1,
    code: 'BAN4 ',
    img:'./img/02-Signs/Banners/Banner3x6.png'
  },
  {
    id: 5,
    size: '4" x 4"',
    price: 120,
    quantity: 1,
    code: 'BAN4 ',
    img:'./img/02-Signs/Banners/Banner4x4.png'
  },
  {
    id: 6,
    size: '3" x 8"',
    price: 140,
    quantity: 1,
    code: 'BAN5 ',
    img:'./img/02-Signs/Banners/Banner3x8.png'
  },
  {
    id: 7,
    size: '4" x 6"',
    price: 140,
    quantity: 1,
    code: 'BAN5 ',
    img:'./img/02-Signs/Banners/Banner4x6.png'
  },
  {
    id: 8,
    size: '3" x 10"',
    price: 150,
    quantity: 1,
    code: 'BAN6 ',
    img:'./img/02-Signs/Banners/Banner3x10.png'
  },
  {
    id: 9,
    size: '4" x 8"',
    price: 160,
    quantity: 1,
    code: 'BAN7 ',
    img:'./img/02-Signs/Banners/Banner4x8.png'
  },
  {
    id: 10,
    size: '4" x 10"',
    price: 180,
    quantity: 1,
    code: 'BAN8 ',
    img:'./img/02-Signs/Banners/Banner4x10.png'
  },
  {
    id: 11,
    size: '5" x 10"',
    price: 200,
    quantity: 1,
    code: 'BAN9 ',
    img:'./img/02-Signs/Banners/Banner5x10.png'
  },
  {
    id: 12,
    size: '5" x 15"',
    price: 250,
    quantity: 1,
    code: 'BAN10 ',
    img:'./img/02-Signs/Banners/Banner5x15.png'
  },
];
export const CARMAGNETS = {
  products: [
    {
      id: 0,
      productCode: "CM1",
      size: '12" X 24"',
      description: "(LESS THAN 2 SQ. FEET - SAME PRICE)",
      price: 75,
      img: "./img/02-Signs/Car Magnets/CarMagnet 12x24.png",
    },
    {
      id: 1,
      productCode: "CM2",
      size: '15" X 24"',
      description: "(LESS THAN 2 SQ. FEET - SAME PRICE)",
      price: 95,
      img: "./img/02-Signs/Car Magnets/CarMagnet 15x24.png",
    },
    {
      id: 2,
      productCode: "CM3",
      size: '24" X 24"',
      description: "(UP TO 4 SQ. FEET - SAME PRICE)",
      price: 130,
      img: "./img/02-Signs/Car Magnets/CarMagnet 24x24.png",
    },
  ],
  lamindatedFee: 15,
};
export const LABELS = {
  Shape: [
    {
      id: 0,name: 'NO 5100 Circle',img: './img/01-Printing/Labels/LabelsCircle.png'
    },
    {
      id: 1,name: 'NO 5200 Square',img: './img/01-Printing/Labels/LabelsSquare.png'
    },
    {
      id: 2,name: 'NO 5400 Oval',img: './img/01-Printing/Labels/LabelsOval.png'
    },
    {
      id: 3,name: 'NO 5500 Rectangle',img: './img/01-Printing/Labels/LabelsRectangle.png'
    },
  ],
  Paper: [
    { id: 0, type: 'White Gloss'},
    { id: 1, type: 'Yellow Gloss'},
    { id: 2, type: 'White Mate'},
    { id: 3, type: 'Silver Foil'},
    { id: 4, type: 'Gold Foil'},
    { id: 5, type: 'Fluorescent Green'},
    { id: 6, type: 'Fluorescent Yellow'},
    { id: 7, type: 'Fluorescent Red'},
    { id: 8, type: 'Fluorescent Orange'},
    { id: 9, type: 'Fluorescent Pink'},
  ],
  Price: [
    {
      id: 0,
      size: '1" x 1"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 95.20},
                {id: 1, quantity: 5000, price: 250},
                {id: 2, quantity: 10000, price: 350},
                {id: 3, quantity: 25000, price: 550},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 250},
                {id: 1, quantity: 5000, price: 350},
                {id: 2, quantity: 10000, price: 460},
                {id: 3, quantity: 25000, price: 670},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 118.40},
                {id: 1, quantity: 5000, price: 330.50},
                {id: 2, quantity: 10000, price: 442},
                {id: 3, quantity: 25000, price: 682},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 273.20},
                {id: 1, quantity: 5000, price: 430.50},
                {id: 2, quantity: 10000, price: 552},
                {id: 3, quantity: 25000, price: 802.50},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 1,
      size: '1.5" x 1.5"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 95.2},
                {id: 1, quantity: 5000, price: 250},
                {id: 2, quantity: 10000, price: 350},
                {id: 3, quantity: 25000, price: 550},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 250},
                {id: 1, quantity: 5000, price: 350},
                {id: 2, quantity: 10000, price: 460},
                {id: 3, quantity: 25000, price: 670},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 118.4},
                {id: 1, quantity: 5000, price: 330.5},
                {id: 2, quantity: 10000, price: 442},
                {id: 3, quantity: 25000, price: 682},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 273.2},
                {id: 1, quantity: 5000, price: 430.5},
                {id: 2, quantity: 10000, price: 552},
                {id: 3, quantity: 25000, price: 802.5},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 2,
      size: '2" x 1"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 95.2},
                {id: 1, quantity: 5000, price: 250},
                {id: 2, quantity: 10000, price: 350},
                {id: 3, quantity: 25000, price: 550},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 250},
                {id: 1, quantity: 5000, price: 350},
                {id: 2, quantity: 10000, price: 460},
                {id: 3, quantity: 25000, price: 670},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 118.4},
                {id: 1, quantity: 5000, price: 330.5},
                {id: 2, quantity: 10000, price: 442},
                {id: 3, quantity: 25000, price: 682},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 273.2},
                {id: 1, quantity: 5000, price: 430.5},
                {id: 2, quantity: 10000, price: 552},
                {id: 3, quantity: 25000, price: 802.5},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 3,
      size: '2.5" x 1.25"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 95.2},
                {id: 1, quantity: 5000, price: 250},
                {id: 2, quantity: 10000, price: 350},
                {id: 3, quantity: 25000, price: 550},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 250},
                {id: 1, quantity: 5000, price: 350},
                {id: 2, quantity: 10000, price: 460},
                {id: 3, quantity: 25000, price: 670},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 118.4},
                {id: 1, quantity: 5000, price: 330.5},
                {id: 2, quantity: 10000, price: 442},
                {id: 3, quantity: 25000, price: 682},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 273.2},
                {id: 1, quantity: 5000, price: 430.5},
                {id: 2, quantity: 10000, price: 552},
                {id: 3, quantity: 25000, price: 802.5},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 4,
      size: '2" x 2"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 120},
                {id: 1, quantity: 5000, price: 298},
                {id: 2, quantity: 10000, price: 417},
                {id: 3, quantity: 25000, price: 640},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 307.90},
                {id: 1, quantity: 5000, price: 652.50},
                {id: 2, quantity: 10000, price: 850},
                {id: 3, quantity: 25000, price: 1137.50},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 145.50},
                {id: 1, quantity: 5000, price: 357.50},
                {id: 2, quantity: 10000, price: 509},
                {id: 3, quantity: 25000, price: 777},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 333.40},
                {id: 1, quantity: 5000, price: 712},
                {id: 2, quantity: 10000, price: 942},
                {id: 3, quantity: 25000, price: 1274.50},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 5,
      size: '2.5" x 2"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 120},
                {id: 1, quantity: 5000, price: 298},
                {id: 2, quantity: 10000, price: 417},
                {id: 3, quantity: 25000, price: 640},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 307.90},
                {id: 1, quantity: 5000, price: 652.50},
                {id: 2, quantity: 10000, price: 850},
                {id: 3, quantity: 25000, price: 1137.50},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 145.50},
                {id: 1, quantity: 5000, price: 357.50},
                {id: 2, quantity: 10000, price: 509},
                {id: 3, quantity: 25000, price: 777},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 333.40},
                {id: 1, quantity: 5000, price: 712},
                {id: 2, quantity: 10000, price: 942},
                {id: 3, quantity: 25000, price: 1274.50},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 6,
      size: '3" x 3"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 131.00},
                {id: 1, quantity: 5000, price: 395.00},
                {id: 2, quantity: 10000, price: 620.00},
                {id: 3, quantity: 25000, price: 1017.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 369.00},
                {id: 1, quantity: 5000, price: 804.50},
                {id: 2, quantity: 10000, price: 1098.00},
                {id: 3, quantity: 25000, price: 1571.25},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 161.30},
                {id: 1, quantity: 5000, price: 475.00},
                {id: 2, quantity: 10000, price: 747.00},
                {id: 3, quantity: 25000, price: 1217.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 399.30},
                {id: 1, quantity: 5000, price: 884.50},
                {id: 2, quantity: 10000, price: 1225.00},
                {id: 3, quantity: 25000, price: 1771.25},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 7,
      size: '2" x 4"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 131.00},
                {id: 1, quantity: 5000, price: 395.00},
                {id: 2, quantity: 10000, price: 620.00},
                {id: 3, quantity: 25000, price: 1017.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 369.00},
                {id: 1, quantity: 5000, price: 804.50},
                {id: 2, quantity: 10000, price: 1098.00},
                {id: 3, quantity: 25000, price: 1571.25},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 161.30},
                {id: 1, quantity: 5000, price: 475.00},
                {id: 2, quantity: 10000, price: 747.00},
                {id: 3, quantity: 25000, price: 1217.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 399.30},
                {id: 1, quantity: 5000, price: 884.50},
                {id: 2, quantity: 10000, price: 1225.00},
                {id: 3, quantity: 25000, price: 1771.25},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 8,
      size: '3" x 2.5"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 131.00},
                {id: 1, quantity: 5000, price: 395.00},
                {id: 2, quantity: 10000, price: 620.00},
                {id: 3, quantity: 25000, price: 1017.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 369.00},
                {id: 1, quantity: 5000, price: 804.50},
                {id: 2, quantity: 10000, price: 1098.00},
                {id: 3, quantity: 25000, price: 1571.25},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 161.30},
                {id: 1, quantity: 5000, price: 475.00},
                {id: 2, quantity: 10000, price: 747.00},
                {id: 3, quantity: 25000, price: 1217.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 399.30},
                {id: 1, quantity: 5000, price: 884.50},
                {id: 2, quantity: 10000, price: 1225.00},
                {id: 3, quantity: 25000, price: 1771.25},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 9,
      size: '4" x 2"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 131.00},
                {id: 1, quantity: 5000, price: 395.00},
                {id: 2, quantity: 10000, price: 620.00},
                {id: 3, quantity: 25000, price: 1017.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 369.00},
                {id: 1, quantity: 5000, price: 804.50},
                {id: 2, quantity: 10000, price: 1098.00},
                {id: 3, quantity: 25000, price: 1571.25},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 161.30},
                {id: 1, quantity: 5000, price: 475.00},
                {id: 2, quantity: 10000, price: 747.00},
                {id: 3, quantity: 25000, price: 1217.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 399.30},
                {id: 1, quantity: 5000, price: 884.50},
                {id: 2, quantity: 10000, price: 1225.00},
                {id: 3, quantity: 25000, price: 1771.25},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 10,
      size: '5" x 2"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 131.00},
                {id: 1, quantity: 5000, price: 395.00},
                {id: 2, quantity: 10000, price: 620.00},
                {id: 3, quantity: 25000, price: 1017.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 369.00},
                {id: 1, quantity: 5000, price: 804.50},
                {id: 2, quantity: 10000, price: 1098.00},
                {id: 3, quantity: 25000, price: 1571.25},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 161.30},
                {id: 1, quantity: 5000, price: 475.00},
                {id: 2, quantity: 10000, price: 747.00},
                {id: 3, quantity: 25000, price: 1217.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 399.30},
                {id: 1, quantity: 5000, price: 884.50},
                {id: 2, quantity: 10000, price: 1225.00},
                {id: 3, quantity: 25000, price: 1771.25},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 11,
      size: '3" x 4"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 151},
                {id: 1, quantity: 5000, price: 467.50},
                {id: 2, quantity: 10000, price: 780},
                {id: 3, quantity: 25000, price: 1312.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 405.00},
                {id: 1, quantity: 5000, price: 895.00},
                {id: 2, quantity: 10000, price: 1250},
                {id: 3, quantity: 25000, price: 2037.50},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 196.90},
                {id: 1, quantity: 5000, price: 582.50},
                {id: 2, quantity: 10000, price: 964},
                {id: 3, quantity: 25000, price: 1615},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 450.90},
                {id: 1, quantity: 5000, price: 1010},
                {id: 2, quantity: 10000, price: 1434},
                {id: 3, quantity: 25000, price: 2340},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 12,
      size: '3.5" x 3.5"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 151},
                {id: 1, quantity: 5000, price: 467.50},
                {id: 2, quantity: 10000, price: 780},
                {id: 3, quantity: 25000, price: 1312.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 405.00},
                {id: 1, quantity: 5000, price: 895.00},
                {id: 2, quantity: 10000, price: 1250},
                {id: 3, quantity: 25000, price: 2037.50},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 196.90},
                {id: 1, quantity: 5000, price: 582.50},
                {id: 2, quantity: 10000, price: 964},
                {id: 3, quantity: 25000, price: 1615},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 450.90},
                {id: 1, quantity: 5000, price: 1010},
                {id: 2, quantity: 10000, price: 1434},
                {id: 3, quantity: 25000, price: 2340},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 13,
      size: '4" x 4"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 151},
                {id: 1, quantity: 5000, price: 467.50},
                {id: 2, quantity: 10000, price: 780},
                {id: 3, quantity: 25000, price: 1312.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 405.00},
                {id: 1, quantity: 5000, price: 895.00},
                {id: 2, quantity: 10000, price: 1250},
                {id: 3, quantity: 25000, price: 2037.50},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 196.90},
                {id: 1, quantity: 5000, price: 582.50},
                {id: 2, quantity: 10000, price: 964},
                {id: 3, quantity: 25000, price: 1615},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 450.90},
                {id: 1, quantity: 5000, price: 1010},
                {id: 2, quantity: 10000, price: 1434},
                {id: 3, quantity: 25000, price: 2340},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 14,
      size: '5" x 3"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 151},
                {id: 1, quantity: 5000, price: 467.50},
                {id: 2, quantity: 10000, price: 780},
                {id: 3, quantity: 25000, price: 1312.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 405.00},
                {id: 1, quantity: 5000, price: 895.00},
                {id: 2, quantity: 10000, price: 1250},
                {id: 3, quantity: 25000, price: 2037.50},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 196.90},
                {id: 1, quantity: 5000, price: 582.50},
                {id: 2, quantity: 10000, price: 964},
                {id: 3, quantity: 25000, price: 1615},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 450.90},
                {id: 1, quantity: 5000, price: 1010},
                {id: 2, quantity: 10000, price: 1434},
                {id: 3, quantity: 25000, price: 2340},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 15,
      size: '6" x 2"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 151},
                {id: 1, quantity: 5000, price: 467.50},
                {id: 2, quantity: 10000, price: 780},
                {id: 3, quantity: 25000, price: 1312.50},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 405.00},
                {id: 1, quantity: 5000, price: 895.00},
                {id: 2, quantity: 10000, price: 1250},
                {id: 3, quantity: 25000, price: 2037.50},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 196.90},
                {id: 1, quantity: 5000, price: 582.50},
                {id: 2, quantity: 10000, price: 964},
                {id: 3, quantity: 25000, price: 1615},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 450.90},
                {id: 1, quantity: 5000, price: 1010},
                {id: 2, quantity: 10000, price: 1434},
                {id: 3, quantity: 25000, price: 2340},
              ]
            },
          ]
        }
      ]
  
    },
    {
      id: 16,
      size: '6" x 4"',
      style: [
        {
          id: 0,
          lam: 'No Lamination',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 175.6},
                {id: 1, quantity: 5000, price: 625},
                {id: 2, quantity: 10000, price: 1020},
                {id: 3, quantity: 25000, price: 1775},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                {id: 0, quantity: 1000, price: 502},
                {id: 1, quantity: 5000, price: 1626},
                {id: 2, quantity: 10000, price: 1530},
                {id: 3, quantity: 25000, price: 2275},
              ]
            },
          ]
        },
        {
          id: 1,
          lam: 'Over Laminated',
          color: [
            {
              id: 0,
              selectColor: 'One Color',
              amount: [
                {id: 0, quantity: 1000, price: 225.2},
                {id: 1, quantity: 5000, price: 756.5},
                {id: 2, quantity: 10000, price: 1239},
                {id: 3, quantity: 25000, price: 2135},
              ]
            },
            {
              id: 1,
              selectColor: 'Full Color',
              amount: [
                { id: 0, quantity: 1000, price: 551.6},
                {id: 1, quantity: 5000, price: 1757.5},
                {id: 2, quantity: 10000, price: 1749},
                {id: 3, quantity: 25000, price: 2635},
              ]
            },
          ]
        }
      ]
  
    },
  ]
  
};

export const FOAMSIGNS = [
  {
    id: 0,
    size: '2" x 2"',
    price: 35,
    quantity: 1,
    code: 'FS 1'
  },
  {
    id: 1,
    size: '4" x 2"',
    price: 50,
    quantity: 1,
    code: 'FS 2'
  },
  {
    id: 2,
    size: '4" x 4"',
    price: 75,
    quantity: 1,
    code: 'FS 3'
  },
  {
    id: 3,
    size: '2" x 8"',
    price: 75,
    quantity: 1,
    code: 'FS 3'
  },
  {
    id: 4,
    size: '4" x 5"',
    price: 95,
    quantity: 1,
    code: 'FS 4'
  },
  {
    id: 5,
    size: '4" x 6"',
    price: 110,
    quantity: 1,
    code: 'FS 5'
  },
  {
    id: 6,
    size: '3" x 6"',
    price: 110,
    quantity: 1,
    code: 'FS 5'
  },
  {
    id: 7,
    size: '4" x 8"',
    price: 160,
    quantity: 1,
    code: 'FS 6'
  },
  {
    id: 8,
    size: '3" x 8"',
    price: 160,
    quantity: 1,
    code: 'FS 6'
  },
]

export const COROSIGNS = [
  {
    id: 0,
    size: '2" x 2"',
    price: 50,
    quantity: 1,
    code: 'COR 1'
  },
  {
    id: 1,
    size: '4" x 2"',
    price: 70,
    quantity: 1,
    code: 'COR 2'
  },
  {
    id: 2,
    size: '4" x 4"',
    price: 120,
    quantity: 1,
    code: 'COR 3'
  },
  {
    id: 3,
    size: '2" x 8"',
    price: 120,
    quantity: 1,
    code: 'COR 3'
  },
  {
    id: 4,
    size: '4" x 5"',
    price: 140,
    quantity: 1,
    code: 'COR 4'
  },
  {
    id: 5,
    size: '4" x 6"',
    price: 160,
    quantity: 1,
    code: 'COR 5'
  },
  {
    id: 6,
    size: '3" x 6"',
    price: 160,
    quantity: 1,
    code: 'COR 5'
  },
  {
    id: 7,
    size: '4" x 8"',
    price: 200,
    quantity: 1,
    code: 'COR 6'
  },
  {
    id: 8,
    size: '3" x 8"',
    price: 200,
    quantity: 1,
    code: 'COR 6'
  },
]

export const ALUMINUMSIGNS = [
  {
    id: 0,
    size: '2" x 2"',
    price: 90,
    quantity: 1,
    code: 'MM 1',
    img: './img/02-Signs/Aluminum Sign/AluminumSign2x2.png'
  },
  {
    id: 1,
    size: '4" x 2"',
    price: 132,
    quantity: 1,
    code: 'MM 2',
    img: './img/02-Signs/Aluminum Sign/AluminumSign4x2.png'
  },
  {
    id: 2,
    size: '4" x 4"',
    price: 165,
    quantity: 1,
    code: 'MM 3',
    img: './img/02-Signs/Aluminum Sign/AluminumSign4x4.png'
  },
  {
    id: 3,
    size: '2" x 8"',
    price: 165,
    quantity: 1,
    code: 'MM 3',
    img: './img/02-Signs/Aluminum Sign/AluminumSign2x8.png'
  },
  {
    id: 4,
    size: '4" x 5"',
    price: 220,
    quantity: 1,
    code: 'MM 4',
    img: './img/02-Signs/Aluminum Sign/AluminumSign4x5.png'
  },
  {
    id: 5,
    size: '4" x 6"',
    price: 290,
    quantity: 1,
    code: 'MM 5',
    img: './img/02-Signs/Aluminum Sign/AluminumSign4x6.png'
  },
  {
    id: 6,
    size: '3" x 6"',
    price: 290,
    quantity: 1,
    code: 'MM 5',
    img: './img/02-Signs/Aluminum Sign/AluminumSign3x6.png'
  },
  {
    id: 7,
    size: '4" x 8"',
    price: 296,
    quantity: 1,
    code: 'MM 6',
    img: './img/02-Signs/Aluminum Sign/AluminumSign4x8.png'
  },
  {
    id: 8,
    size: '3" x 8"',
    price: 296,
    quantity: 1,
    code: 'MM 6',
    img: './img/02-Signs/Aluminum Sign/AluminumSign3x8.png'
  },
]

export const BROCHURES = [
  {
    id: 0,
    type: '8.5" x 11" 100LB Text 2 Sides',
    img: './img/01-Printing/Flyers/8.5x11.png',
    price:[
      { id: 0, quantity: 500, price: 175},
      { id: 1, quantity: 1000, price: 280},
      { id: 2, quantity: 5000, price: 600},
    ]
  },
  {
    id: 1,
    type: '8.5" x 11" 100LB Text 1 Side',
    img: './img/01-Printing/Flyers/8.5x11.png',
    price:[
      { id: 0, quantity: 500, price: 125},
      { id: 1, quantity: 1000, price: 199},
      { id: 2, quantity: 5000, price: 420},
    ]
  },
  {
    id: 2,
    type: '11" x 17" 100LB Text 2 Sides',
    img: './img/01-Printing/Flyers/11x17.png',
    price:[
      { id: 0, quantity: 500, price: 295},
      { id: 1, quantity: 1000, price: 580},
      { id: 2, quantity: 5000, price: 1100},
    ]
  },
]

export const ROLLUPSIGN = [
  {
    id: 0,
    type: 'Complete With Base',
    price: 170
  },
  {
    id: 1,
    type: 'Imprint Only',
    price: 110
  },
]

export const TABLECOVERS = [
  {
    id: 0,
    size: "6' TABLE THROW",
    options: [
      {
        id: 0,
        name: "6ft Table Cover 3 sided (Open Back)",
        price: 71.66,
        img: './img/03-Promotional/TableCovers/6-3Sided.png',
        description: 'Our standard table cover is a great table topper for trade shows, exhibitions, and any presentations. Our table covers are dye sublimated and are 100% washable if it ever gets dirty. This table cover is made from our 8.8 oz. polyester table fabric that drapes over 3 sides of a 72" x 30" x 30" display table. The table cover is sewn with rounded corners and hang approximately 2" above the floor. Complete your presentation with our simple and cost-effective table cover.'
      },
      {
        id: 1,
        name: "6ft Table Cover 4 sided (Close Back)",
        price: 95.06,
        img: './img/03-Promotional/TableCovers/6-4Sided.png',
        description: 'Our standard 4 sided table cover is a great table topper for trade shows, exhibitions, and any presentations. Our table covers are dye sublimated and are 100% washable. This table cover is made of 8.8 oz. polyester table fabric with rounded corners and hangs approximately 2" above the floor.  This material drapes over 4 sides of a 72" x 30" x 30" display table.  Complete your presentation with our simple and cost-effective table cover.'
      },
    ]
  },
  {
    id: 1,
    size: "8' TABLE THROW",
    options: [
      {
        id: 0,
        name: "8ft Table Cover 3 sided (Open Back)",
        price: 85.25,
        img: './img/03-Promotional/TableCovers/8-3Sided.png',
        description: 'Our standard table cover is a great table topper for trade shows, exhibitions, and any presentations. Our table covers are dye sublimated and are 100% washable if it ever gets dirty. This table cover is made from our 8.8 oz. polyester table fabric that drapes over 3 sides of a 96" x 30" x 30" display table. The table cover is sewn with rounded corners and hang approximately 2" above the floor. Complete your presentation with our simple and cost-effective table cover.'
      },
      {
        id: 1,
        name: "8ft Table Cover 4 sided (Close Back)",
        price: 114.13,
        img: './img/03-Promotional/TableCovers/8-4Sided.png',
        description: 'Our standard 4 sided table cover is a great table topper for trade shows, exhibitions, and any presentations. Our table covers are dye sublimated and are 100% washable. This table cover is made of 8.8 oz. polyester table fabric with rounded corners and hangs approximately 2" above the floor. This material drapes over 4 sides of a 96" x 30" x 30" display table.  Complete your presentation with our simple and cost-effective table cover.'
      },
    ]
  },
]

export const CARS_VANS_WRAP = [
  {
    id: 0,
    name: "Small Cars Wrap",
    des: "Price Includes Installation. Price per one job.",
    products: [
      { id: 0, code: "SCV 1", type: "VINYL DECALS", price: "600", img:'./img/03-Promotional/Wraps(Cars&Vans)/CarsVinyl.png'},
      {id: 1, code: "SCV 2", type: "SEMI WRAP", price: "1200", img: './img/03-Promotional/Wraps(Cars&Vans)/CarSemi.png'},
      {id: 2, code: "SCV 3", type: "FULL WRAP", price: "2000", img: './img/03-Promotional/Wraps(Cars&Vans)/CarFull.png'}
    ]
  },
  {
    id: 1,
    name: "Vans Wrap",
    des: "Price Includes Installation. Price per one job.",
    products: [
      {id: 0, code: "VAN 1", type: "VINYL DECALS", price: "800", img: './img/03-Promotional/Wraps(Cars&Vans)/VansVinylDecal.png'},
      {id: 1, code: "VAN 2", type: "SEMI WRAP", price: "1400", img: './img/03-Promotional/Wraps(Cars&Vans)/VansSemiWrap.png'},
      {id: 2, code: "VAN 3", type: "FULL WRAP", price: "2500", img: './img/03-Promotional/Wraps(Cars&Vans)/VansFullWrap.png'},
      {id: 3, code: "VAN 4", type: "HIGH TOP VANS", price: "3500", img: './img/03-Promotional/Wraps(Cars&Vans)/VansHighTop.png'}
    ]
  },
]

export const TRAILERS_WRAP = [
  {
    id: 0,
    style: 'FULL WRAP W/INSTALLATION',
    code: "TRV FULL",
    img:"./img/03-Promotional/Wraps(Trailers)/FullWrapTrailer.png",
    size: [ 
      { id: 0, size: "12-14 FEET", price: 2500 },
      { id: 1, size: "16-18 FEET", price: 2900 },
      { id: 2, size: "20 FEET & UP", price: 3200 },
    ]
  },
  {
    id: 1,
    style: 'SEMI WRAP W/INSTALLATION',
    code: "TRV DECAL",
    img:"./img/03-Promotional/Wraps(Trailers)/SemiVinylTrailer.png",
    size: [
      { id: 0, size: "12-14 FEET", price: 1300 },
      { id: 1, size: "16-18 FEET", price: 1500 },
      { id: 2, size: "20 FEET & UP", price: 1700},
    ]
  },
  {
    id: 2,
    style: 'CUT VINYL W/INSTALLATION  ',
    code: "TRV SEMI",
    img:"./img/03-Promotional/Wraps(Trailers)/CutVinylTrailer.png",
    size: [
      { id: 0, size: "12-14 FEET", price: 900 },
      { id: 1, size: "16-18 FEET", price: 1050 },
      { id: 2, size: "20 FEET & UP", price: 1200},
    ]
  },
]