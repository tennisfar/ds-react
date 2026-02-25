import { createFileRoute } from '@tanstack/react-router';
// @ts-ignore
import { Receipt } from '@KlubLotto/Scripts/Components/FreePrizeClaim/_Receipt.tsx';
import { PageHeader } from '../../components/PageHeader/PageHeader.tsx';
import { getNextEurojackpotDrawDate, getNextLottoDrawDate, getNextVikinglottoDrawDate } from '../../utils/dates.ts';

export const Route = createFileRoute('/klublotto/FreePrizeClaim-Receipt')({
  component: RouteComponent,
});

function RouteComponent() {
  const props = {
    allornothing: {
      couponData: {
        couponId: '4310281022654610900',
        playType: 'Lightning',
        transactionDate: '2026-02-24T02:39:06+00:00',
        price: 10,
        state: 'Normal',
        primaryGame: {
          gameType: 'AllOrNothing',
          rows: [
            {
              numbers: [
                // 1,
                // 4,
                // 9,
                // 10,
                // 11,
                13, 15, 17, 18, 20, 23, 24,
              ],
              extraNumbers: [],
            },
          ],
          drawInfo: [
            {
              drawNo: 2339,
              drawInProgress: false,
              drawDate: '2026-02-24T20:20:00+00:00',
              bundle: 1,
            },
          ],
        },
        secondaryGames: [],
        campaignGames: [],
        rebuyInfo: {
          rebuyCostPrice: 10,
          draws: ['Regular'],
          validUntil: '2026-06-07T19:13:00+00:00',
        },
        canRebuy: true,
        rebuyCostPrice: 10,
      },
      receiptProps: {
        title: 'Dit køb er gennemført',
        text: 'Du er nu med i Alt eller Intet trækningen om {poolsize}&nbsp;&nbsp;kr. ',
        disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
      },
      numberGamesType: 'allornothing',
      poolFeed: {
        gameId: 'allornothing',
        poolSizeDecimal: 10000000,
        poolSizeFormatted: '500.000',
        secondPrizePoolSizeDecimal: 0,
        secondPrizePoolSizeFormatted: '0',
        drawDate: '2026-02-24T20:20:00+01:00',
        gameStopDate: '2026-02-24T20:20:00+01:00',
        gameUrl: 'https://danskespil.dk/allornothing',
        isOpen: true,
      },
    },
    keno: {
      couponData: {
        couponId: '4310281022690761100',
        playType: 'KenoMillion',
        transactionDate: '2026-02-24T12:33:35+00:00',
        price: 25,
        state: 'Normal',
        primaryGame: {
          gameType: 'Keno',
          rows: [
            {
              numbers: [1, 3, 8, 28, 44, 50, 66, 68, 69],
              extraNumbers: [],
            },
            // {
            //   "numbers": [
            //     2,
            //     7,
            //     16,
            //     20,
            //     25,
            //     30,
            //     31,
            //     39,
            //     46
            //   ],
            //   "extraNumbers": []
            // },
            // {
            //   "numbers": [
            //     3,
            //     9,
            //     22,
            //     25,
            //     29,
            //     45,
            //     46,
            //     53,
            //     59
            //   ],
            //   "extraNumbers": []
            // },
            // {
            //   "numbers": [
            //     3,
            //     9,
            //     14,
            //     21,
            //     32,
            //     37,
            //     56,
            //     65,
            //     68
            //   ],
            //   "extraNumbers": []
            // },
            // {
            //   "numbers": [
            //     16,
            //     18,
            //     23,
            //     32,
            //     33,
            //     41,
            //     48,
            //     58,
            //     67
            //   ],
            //   "extraNumbers": []
            // }
          ],
          drawInfo: [
            {
              drawNo: 8066,
              drawInProgress: false,
              drawDate: '2026-02-24T20:05:00+00:00',
              bundle: 1,
            },
          ],
        },
        secondaryGames: [],
        campaignGames: [],
        rebuyInfo: {
          rebuyCostPrice: 25,
          draws: ['Regular'],
          validUntil: '2026-06-07T19:00:00+00:00',
        },
        canRebuy: true,
        rebuyCostPrice: 25,
      },
      receiptProps: {
        title: 'Dit køb er gennemført',
        text: 'Du er nu med i Keno trækningen om {poolsize}&nbsp;mio.&nbsp;kr. ',
        disclaimer: 'Udbydes af Danske Lotteri Spil A/S',
      },
      numberGamesType: 'keno',
      poolFeed: {
        gameId: 'keno',
        poolSizeDecimal: 5000000,
        poolSizeFormatted: '5',
        secondPrizePoolSizeDecimal: 0,
        secondPrizePoolSizeFormatted: '0',
        drawDate: '2026-02-24T20:05:00+01:00',
        gameStopDate: '2026-02-24T20:05:00+01:00',
        gameUrl: 'https://danskespil.dk/keno',
        isOpen: true,
      },
    },
    lotto: {
      couponData: {
        couponId: '4310254030168018200',
        playType: 'Lightning',
        transactionDate: '2026-01-28T03:38:14+00:00',
        price: 14,
        state: 'Normal',
        primaryGame: {
          gameType: 'Lotto',
          rows: [
            {
              numbers: [3, 4, 17, 18, 19, 24, 36],
              extraNumbers: [],
            },
            // {
            //   numbers: [5, 13, 18, 23, 24, 26, 28],
            //   extraNumbers: [],
            // },
          ],
          drawInfo: [
            {
              drawNo: 1863,
              drawInProgress: false,
              drawDate: getNextLottoDrawDate(),
              bundle: 1,
              drawResult: {
                drawNumbers: [14, 27, 9, 10, 2, 8, 19],
                drawExtraNumbers: [18],
                totalWinAmount: 0,
                prizes: [],
                totalPlayerWinAmount: 0,
              },
            },
          ],
        },
        secondaryGames: [],
        campaignGames: [
          {
            campaignNo: -1,
            campaignName: 'Million vinder',
            drawInfo: [
              {
                drawDate: '2026-01-31T19:05:00+00:00',
                drawComplete: true,
                bundles: [1],
                totalWinAmount: 0,
                totalPlayerWinAmount: 0,
                prizes: [],
                totalTickets: -1,
              },
            ],
          },
        ],
        rebuyInfo: {
          rebuyCostPrice: 14,
          draws: ['Regular'],
          validUntil: '2026-04-04T18:00:00+00:00',
        },
        canRebuy: true,
        rebuyCostPrice: 14,
      },
      receiptProps: {
        title: 'Dit køb er gennemført',
        text: 'Du er nu med i Lotto trækningen om {poolsize}&nbsp;mio.&nbsp;kr. ',
        disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
      },
      numberGamesType: 'lotto',
      poolFeed: {
        gameId: 'lotto',
        poolSizeDecimal: 10000000,
        poolSizeFormatted: '63',
        secondPrizePoolSizeDecimal: 0,
        secondPrizePoolSizeFormatted: '0',
        drawDate: getNextLottoDrawDate(),
        gameStopDate: getNextLottoDrawDate(),
        gameUrl: 'https://danskespil.dk/lotto',
        isOpen: true,
      },
    },
    vikinglotto: {
      couponData: {
        couponId: '4310269021533717100',
        playType: 'Lightning',
        transactionDate: '2026-02-12T06:49:59+00:00',
        price: 14,
        state: 'Normal',
        primaryGame: {
          gameType: 'Viking',
          rows: [
            {
              numbers: [20, 33, 35, 36, 42, 48],
              extraNumbers: [2],
            },
            {
              numbers: [6, 24, 26, 29, 30, 41],
              extraNumbers: [3],
            },
            {
              numbers: [14, 16, 26, 31, 36, 42],
              extraNumbers: [7],
            },
          ],
          drawInfo: [
            {
              drawNo: 1719,
              drawInProgress: false,
              drawDate: getNextVikinglottoDrawDate(),
              bundle: 1,
              drawResult: {
                drawNumbers: [7, 30, 8, 39, 19, 42],
                drawExtraNumbers: [3],
                totalWinAmount: 0,
                prizes: [],
                totalPlayerWinAmount: 0,
              },
            },
          ],
        },
        secondaryGames: [],
        campaignGames: [],
        rebuyInfo: {
          rebuyCostPrice: 14,
          draws: ['Regular'],
          validUntil: '2026-05-27T16:00:00+00:00',
        },
        canRebuy: true,
        rebuyCostPrice: 14,
      },
      receiptProps: {
        title: 'Dit køb er gennemført',
        text: 'Du er nu med i Vikinglotto trækningen om {poolsize}&nbsp;mio.&nbsp;kr. ',
        disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
      },
      numberGamesType: 'vikinglotto',
      poolFeed: {
        gameId: 'vikinglotto',
        poolSizeDecimal: 5000000,
        poolSizeFormatted: '19',
        secondPrizePoolSizeDecimal: 0,
        secondPrizePoolSizeFormatted: '0',
        drawDate: '2026-02-18T18:00:00+01:00',
        gameStopDate: '2026-02-18T18:00:00+01:00',
        gameUrl: 'https://danskespil.dk/vikinglotto',
        isOpen: true,
      },
    },
    eurojackpot: {
      couponData: {
        couponId: '4310257030434016800',
        playType: 'Lightning',
        transactionDate: '2026-01-31T02:54:58+00:00',
        price: 55,
        state: 'Normal',
        primaryGame: {
          gameType: 'Eurojackpot',
          rows: [
            {
              numbers: [5, 12, 13, 20, 31],
              extraNumbers: [7, 8],
            },
            {
              numbers: [4, 13, 34, 35, 36],
              extraNumbers: [2, 4],
            },
            // {
            //   numbers: [2, 6, 7, 26, 37],
            //   extraNumbers: [1, 5],
            // },
          ],
          drawInfo: [
            {
              drawNo: 926,
              drawInProgress: false,
              drawDate: getNextEurojackpotDrawDate(),
              bundle: 1,
            },
          ],
        },
        secondaryGames: [
          {
            gameType: 'JokerWednesday',
            rows: [
              {
                numbers: [8, 3, 7, 7, 4, 3, 1],
                extraNumbers: [],
              },
              {
                numbers: [4, 5, 5, 5, 1, 8, 1],
                extraNumbers: [],
              },
            ],
            drawInfo: [
              {
                drawNo: 901,
                drawInProgress: false,
                drawDate: '2026-02-04T17:05:00+00:00',
                bundle: 1,
              },
            ],
          },
        ],
        campaignGames: [],
        rebuyInfo: {
          rebuyCostPrice: 55,
          draws: ['Regular'],
          validUntil: '2026-05-12T17:00:00+00:00',
        },
        canRebuy: true,
        rebuyCostPrice: 55,
      },
      receiptProps: {
        title: 'Dit køb er gennemført',
        text: 'Du er nu med i Eurojackpot trækningen om {poolsize}&nbsp;mio.&nbsp;kr. ',
        disclaimer: 'Spillet udbydes af Danske Lotteri Spil A/S. <a href="#">Se vilkår og spilleregler</a>',
      },
      numberGamesType: 'eurojackpot',
      poolFeed: {
        gameId: 'eurojackpot',
        poolSizeDecimal: 10000000,
        poolSizeFormatted: '142',
        secondPrizePoolSizeDecimal: 0,
        secondPrizePoolSizeFormatted: '0',
        drawDate: getNextEurojackpotDrawDate(),
        gameStopDate: getNextEurojackpotDrawDate(),
        gameUrl: 'https://danskespil.dk/eurojackpot',
        isOpen: true,
      },
    },
  };

  // const allornothingCoupon = {
  //   "couponId": "4310281022654610900",
  //   "playType": "Lightning",
  //   "transactionDate": "2026-02-24T02:39:06+00:00",
  //   "price": 10,
  //   "state": "Normal",
  //   "primaryGame": {
  //     "gameType": "AllOrNothing",
  //     "rows": [
  //       {
  //         "numbers": [
  //           // 1,
  //           // 4,
  //           // 9,
  //           // 10,
  //           // 11,
  //           13,
  //           15,
  //           17,
  //           18,
  //           20,
  //           23,
  //           24
  //         ],
  //         "extraNumbers": []
  //       }
  //     ],
  //     "drawInfo": [
  //       {
  //         "drawNo": 2339,
  //         "drawInProgress": false,
  //         "drawDate": "2026-02-24T20:20:00+00:00",
  //         "bundle": 1
  //       }
  //     ]
  //   },
  //   "secondaryGames": [],
  //   "campaignGames": [],
  //   "rebuyInfo": {
  //     "rebuyCostPrice": 10,
  //     "draws": [
  //       "Regular"
  //     ],
  //     "validUntil": "2026-06-07T19:13:00+00:00"
  //   },
  //   "canRebuy": true,
  //   "rebuyCostPrice": 10
  // }
  //
  // const eurojackpotCoupon = {
  //   couponId: '4310257030434016800',
  //   playType: 'Lightning',
  //   transactionDate: '2026-01-31T02:54:58+00:00',
  //   price: 55,
  //   state: 'Normal',
  //   primaryGame: {
  //     gameType: 'Eurojackpot',
  //     rows: [
  //       {
  //         numbers: [5, 12, 13, 20, 31],
  //         extraNumbers: [7, 8],
  //       },
  //       {
  //         numbers: [4, 13, 34, 35, 36],
  //         extraNumbers: [2, 4],
  //       },
  //       {
  //         numbers: [2, 6, 7, 26, 37],
  //         extraNumbers: [1, 5],
  //       },
  //     ],
  //     drawInfo: [
  //       {
  //         drawNo: 926,
  //         drawInProgress: false,
  //         drawDate: getNextEurojackpotDrawDate(),
  //         bundle: 1,
  //       },
  //     ],
  //   },
  //   secondaryGames: [
  //     {
  //       gameType: 'JokerWednesday',
  //       rows: [
  //         {
  //           numbers: [8, 3, 7, 7, 4, 3, 1],
  //           extraNumbers: [],
  //         },
  //         {
  //           numbers: [4, 5, 5, 5, 1, 8, 1],
  //           extraNumbers: [],
  //         },
  //       ],
  //       drawInfo: [
  //         {
  //           drawNo: 901,
  //           drawInProgress: false,
  //           drawDate: '2026-02-04T17:05:00+00:00',
  //           bundle: 1,
  //         },
  //       ],
  //     },
  //   ],
  //   campaignGames: [],
  //   rebuyInfo: {
  //     rebuyCostPrice: 55,
  //     draws: ['Regular'],
  //     validUntil: '2026-05-12T17:00:00+00:00',
  //   },
  //   canRebuy: true,
  //   rebuyCostPrice: 55,
  // };
  //
  // const kenoCoupon = {
  //   "couponId": "4310281022690761100",
  //   "playType": "KenoMillion",
  //   "transactionDate": "2026-02-24T12:33:35+00:00",
  //   "price": 25,
  //   "state": "Normal",
  //   "primaryGame": {
  //     "gameType": "Keno",
  //     "rows": [
  //       {
  //         "numbers": [
  //           1,
  //           3,
  //           8,
  //           28,
  //           44,
  //           50,
  //           66,
  //           68,
  //           69
  //         ],
  //         "extraNumbers": []
  //       },
  //       {
  //         "numbers": [
  //           2,
  //           7,
  //           16,
  //           20,
  //           25,
  //           30,
  //           31,
  //           39,
  //           46
  //         ],
  //         "extraNumbers": []
  //       },
  //       {
  //         "numbers": [
  //           3,
  //           9,
  //           22,
  //           25,
  //           29,
  //           45,
  //           46,
  //           53,
  //           59
  //         ],
  //         "extraNumbers": []
  //       },
  //       {
  //         "numbers": [
  //           3,
  //           9,
  //           14,
  //           21,
  //           32,
  //           37,
  //           56,
  //           65,
  //           68
  //         ],
  //         "extraNumbers": []
  //       },
  //       {
  //         "numbers": [
  //           16,
  //           18,
  //           23,
  //           32,
  //           33,
  //           41,
  //           48,
  //           58,
  //           67
  //         ],
  //         "extraNumbers": []
  //       }
  //     ],
  //     "drawInfo": [
  //       {
  //         "drawNo": 8066,
  //         "drawInProgress": false,
  //         "drawDate": "2026-02-24T20:05:00+00:00",
  //         "bundle": 1
  //       }
  //     ]
  //   },
  //   "secondaryGames": [],
  //   "campaignGames": [],
  //   "rebuyInfo": {
  //     "rebuyCostPrice": 25,
  //     "draws": [
  //       "Regular"
  //     ],
  //     "validUntil": "2026-06-07T19:00:00+00:00"
  //   },
  //   "canRebuy": true,
  //   "rebuyCostPrice": 25
  // }
  //
  // const lottoCoupon = {
  //   couponId: '4310254030168018200',
  //   playType: 'Lightning',
  //   transactionDate: '2026-01-28T03:38:14+00:00',
  //   price: 14,
  //   state: 'Normal',
  //   primaryGame: {
  //     gameType: 'Lotto',
  //     rows: [
  //       {
  //         numbers: [3, 4, 17, 18, 19, 24, 36],
  //         extraNumbers: [],
  //       },
  //       {
  //         numbers: [5, 13, 18, 23, 24, 26, 28],
  //         extraNumbers: [],
  //       },
  //     ],
  //     drawInfo: [
  //       {
  //         drawNo: 1863,
  //         drawInProgress: false,
  //         drawDate: getNextLottoDrawDate(),
  //         bundle: 1,
  //         drawResult: {
  //           drawNumbers: [14, 27, 9, 10, 2, 8, 19],
  //           drawExtraNumbers: [18],
  //           totalWinAmount: 0,
  //           prizes: [],
  //           totalPlayerWinAmount: 0,
  //         },
  //       },
  //     ],
  //   },
  //   secondaryGames: [],
  //   campaignGames: [
  //     {
  //       campaignNo: -1,
  //       campaignName: 'Million vinder',
  //       drawInfo: [
  //         {
  //           drawDate: '2026-01-31T19:05:00+00:00',
  //           drawComplete: true,
  //           bundles: [1],
  //           totalWinAmount: 0,
  //           totalPlayerWinAmount: 0,
  //           prizes: [],
  //           totalTickets: -1,
  //         },
  //       ],
  //     },
  //   ],
  //   rebuyInfo: {
  //     rebuyCostPrice: 14,
  //     draws: ['Regular'],
  //     validUntil: '2026-04-04T18:00:00+00:00',
  //   },
  //   canRebuy: true,
  //   rebuyCostPrice: 14,
  // };
  //
  // const vikinglottoCoupon = {
  //   "couponId": "4310269021533717100",
  //   "playType": "Lightning",
  //   "transactionDate": "2026-02-12T06:49:59+00:00",
  //   "price": 14,
  //   "state": "Normal",
  //   "primaryGame": {
  //     "gameType": "Viking",
  //     "rows": [
  //       {
  //         "numbers": [
  //           20,
  //           33,
  //           35,
  //           36,
  //           42,
  //           48
  //         ],
  //         "extraNumbers": [
  //           2
  //         ]
  //       },
  //       {
  //         "numbers": [
  //           6,
  //           24,
  //           26,
  //           29,
  //           30,
  //           41
  //         ],
  //         "extraNumbers": [
  //           3
  //         ]
  //       }
  //     ],
  //     "drawInfo": [
  //       {
  //         "drawNo": 1719,
  //         "drawInProgress": false,
  //         "drawDate": "2026-02-18T18:00:00+00:00",
  //         "bundle": 1,
  //         "drawResult": {
  //           "drawNumbers": [
  //             7,
  //             30,
  //             8,
  //             39,
  //             19,
  //             42
  //           ],
  //           "drawExtraNumbers": [
  //             3
  //           ],
  //           "totalWinAmount": 0,
  //           "prizes": [],
  //           "totalPlayerWinAmount": 0
  //         }
  //       }
  //     ]
  //   },
  //   "secondaryGames": [],
  //   "campaignGames": [],
  //   "rebuyInfo": {
  //     "rebuyCostPrice": 14,
  //     "draws": [
  //       "Regular"
  //     ],
  //     "validUntil": "2026-05-27T16:00:00+00:00"
  //   },
  //   "canRebuy": true,
  //   "rebuyCostPrice": 14
  // }

  // const gameType = 'allornothing';
  // const gameType = 'keno';
  // const gameType = 'lotto';
  // const gameType = 'vikinglotto';
  const gameType = 'eurojackpot';

  return (
    <>
      <PageHeader title="Dine præmier" />
      <Receipt
        couponData={props[gameType].couponData}
        receiptProps={props[gameType].receiptProps}
        numberGamesType={props[gameType].numberGamesType}
        poolFeed={props[gameType].poolFeed}
      />
    </>
  );
}
