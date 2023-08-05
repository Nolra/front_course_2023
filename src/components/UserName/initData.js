export const initialTravelPlan = {
  id: 0,
  title: '(Root)',
  childPlaces: [
      {
          id: 1,
          title: 'Earth',
          childPlaces: [
              {
                  id: 2,
                  title: 'Africa',
                  childPlaces: [
                      {
                          id: 3,
                          title: 'Botswana',
                          childPlaces: [],
                      },
                      {
                          id: 4,
                          title: 'Egypt',
                          childPlaces: [],
                      },
                      {
                          id: 5,
                          title: 'Kenya',
                          childPlaces: [],
                      },
                      {
                          id: 6,
                          title: 'Madagascar',
                          childPlaces: [],
                      },
                      {
                          id: 7,
                          title: 'Morocco',
                          childPlaces: [],
                      },
                      {
                          id: 8,
                          title: 'Nigeria',
                          childPlaces: [],
                      },
                      {
                          id: 9,
                          title: 'South Africa',
                          childPlaces: [],
                      },
                  ],
              },
              {
                  id: 10,
                  title: 'Americas',
                  childPlaces: [
                      {
                          id: 11,
                          title: 'Argentina',
                          childPlaces: [],
                      },
                      {
                          id: 12,
                          title: 'Brazil',
                          childPlaces: [],
                      },
                      {
                          id: 13,
                          title: 'Barbados',
                          childPlaces: [],
                      },
                      {
                          id: 14,
                          title: 'Canada',
                          childPlaces: [],
                      },
                      {
                          id: 15,
                          title: 'Jamaica',
                          childPlaces: [],
                      },
                      {
                          id: 16,
                          title: 'Mexico',
                          childPlaces: [],
                      },
                      {
                          id: 17,
                          title: 'Trinidad and Tobago',
                          childPlaces: [],
                      },
                      {
                          id: 18,
                          title: 'Venezuela',
                          childPlaces: [],
                      },
                  ],
              },
              {
                  id: 19,
                  title: 'Asia',
                  childPlaces: [
                      {
                          id: 20,
                          title: 'China',
                          childPlaces: [],
                      },
                      {
                          id: 21,
                          title: 'Hong Kong',
                          childPlaces: [],
                      },
                      {
                          id: 22,
                          title: 'India',
                          childPlaces: [],
                      },
                      {
                          id: 23,
                          title: 'Singapore',
                          childPlaces: [],
                      },
                      {
                          id: 24,
                          title: 'South Korea',
                          childPlaces: [],
                      },
                      {
                          id: 25,
                          title: 'Thailand',
                          childPlaces: [],
                      },
                      {
                          id: 26,
                          title: 'Vietnam',
                          childPlaces: [],
                      },
                  ],
              },
              {
                  id: 27,
                  title: 'Europe',
                  childPlaces: [
                      {
                          id: 28,
                          title: 'Croatia',
                          childPlaces: [],
                      },
                      {
                          id: 29,
                          title: 'France',
                          childPlaces: [],
                      },
                      {
                          id: 30,
                          title: 'Germany',
                          childPlaces: [],
                      },
                      {
                          id: 31,
                          title: 'Italy',
                          childPlaces: [],
                      },
                      {
                          id: 32,
                          title: 'Portugal',
                          childPlaces: [],
                      },
                      {
                          id: 33,
                          title: 'Spain',
                          childPlaces: [],
                      },
                      {
                          id: 34,
                          title: 'Turkey',
                          childPlaces: [],
                      },
                  ],
              },
              {
                  id: 35,
                  title: 'Oceania',
                  childPlaces: [
                      {
                          id: 36,
                          title: 'Australia',
                          childPlaces: [],
                      },
                      {
                          id: 37,
                          title:
                              'Bora Bora (French Polynesia)',
                          childPlaces: [],
                      },
                      {
                          id: 38,
                          title: 'Easter Island (Chile)',
                          childPlaces: [],
                      },
                      {
                          id: 39,
                          title: 'Fiji',
                          childPlaces: [],
                      },
                      {
                          id: 40,
                          title: 'Hawaii (the USA)',
                          childPlaces: [],
                      },
                      {
                          id: 41,
                          title: 'New Zealand',
                          childPlaces: [],
                      },
                      {
                          id: 42,
                          title: 'Vanuatu',
                          childPlaces: [],
                      },
                  ],
              },
          ],
      },
      {
          id: 43,
          title: 'Moon',
          childPlaces: [
              {
                  id: 44,
                  title: 'Rheita',
                  childPlaces: [],
              },
              {
                  id: 45,
                  title: 'Piccolomini',
                  childPlaces: [],
              },
              {
                  id: 46,
                  title: 'Tycho',
                  childPlaces: [],
              },
          ],
      },
      {
          id: 47,
          title: 'Mars',
          childPlaces: [
              {
                  id: 48,
                  title: 'Corn Town',
                  childPlaces: [],
              },
              {
                  id: 49,
                  title: 'Green Hill',
                  childPlaces: [],
              },
          ],
      },
  ],
};





export const travelPlan = {
  0: {
      id: 0,
      title: '(Root)',
      childIds: [1, 43, 47],
  },
  1: {
      id: 1,
      title: 'Earth',
      childIds: [2, 10, 19, 27, 35],
  },
  2: {
      id: 2,
      title: 'Africa',
      childIds: [3, 4, 5, 6, 7, 8, 9],
  },
  3: {
      id: 3,
      title: 'Botswana',
      childIds: [],
  },
  4: {
      id: 4,
      title: 'Egypt',
      childIds: [],
  },
  5: {
      id: 5,
      title: 'Kenya',
      childIds: [],
  },
  6: {
      id: 6,
      title: 'Madagascar',
      childIds: [],
  },
  7: {
      id: 7,
      title: 'Morocco',
      childIds: [],
  },
  8: {
      id: 8,
      title: 'Nigeria',
      childIds: [],
  },
  9: {
      id: 9,
      title: 'South Africa',
      childIds: [],
  },
  10: {
      id: 10,
      title: 'Americas',
      childIds: [11, 12, 13, 14, 15, 16, 17, 18],
  },
  11: {
      id: 11,
      title: 'Argentina',
      childIds: [],
  },
  12: {
      id: 12,
      title: 'Brazil',
      childIds: [],
  },
  13: {
      id: 13,
      title: 'Barbados',
      childIds: [],
  },
  14: {
      id: 14,
      title: 'Canada',
      childIds: [],
  },
  15: {
      id: 15,
      title: 'Jamaica',
      childIds: [],
  },
  16: {
      id: 16,
      title: 'Mexico',
      childIds: [],
  },
  17: {
      id: 17,
      title: 'Trinidad and Tobago',
      childIds: [],
  },
  18: {
      id: 18,
      title: 'Venezuela',
      childIds: [],
  },
  19: {
      id: 19,
      title: 'Asia',
      childIds: [20, 21, 22, 23, 24, 25, 26],
  },
  20: {
      id: 20,
      title: 'China',
      childIds: [],
  },
  21: {
      id: 21,
      title: 'Hong Kong',
      childIds: [],
  },
  22: {
      id: 22,
      title: 'India',
      childIds: [],
  },
  23: {
      id: 23,
      title: 'Singapore',
      childIds: [],
  },
  24: {
      id: 24,
      title: 'South Korea',
      childIds: [],
  },
  25: {
      id: 25,
      title: 'Thailand',
      childIds: [],
  },
  26: {
      id: 26,
      title: 'Vietnam',
      childIds: [],
  },
  27: {
      id: 27,
      title: 'Europe',
      childIds: [28, 29, 30, 31, 32, 33, 34],
  },
  28: {
      id: 28,
      title: 'Croatia',
      childIds: [],
  },
  29: {
      id: 29,
      title: 'France',
      childIds: [],
  },
  30: {
      id: 30,
      title: 'Germany',
      childIds: [],
  },
  31: {
      id: 31,
      title: 'Italy',
      childIds: [],
  },
  32: {
      id: 32,
      title: 'Portugal',
      childIds: [],
  },
  33: {
      id: 33,
      title: 'Spain',
      childIds: [],
  },
  34: {
      id: 34,
      title: 'Turkey',
      childIds: [],
  },
  35: {
      id: 35,
      title: 'Oceania',
      childIds: [36, 37, 38, 39, 40, 41, 42],
  },
  36: {
      id: 36,
      title: 'Australia',
      childIds: [],
  },
  37: {
      id: 37,
      title: 'Bora Bora (French Polynesia)',
      childIds: [],
  },
  38: {
      id: 38,
      title: 'Easter Island (Chile)',
      childIds: [],
  },
  39: {
      id: 39,
      title: 'Fiji',
      childIds: [],
  },
  40: {
      id: 40,
      title: 'Hawaii (the USA)',
      childIds: [],
  },
  41: {
      id: 41,
      title: 'New Zealand',
      childIds: [],
  },
  42: {
      id: 42,
      title: 'Vanuatu',
      childIds: [],
  },
  43: {
      id: 43,
      title: 'Moon',
      childIds: [44, 45, 46],
  },
  44: {
      id: 44,
      title: 'Rheita',
      childIds: [],
  },
  45: {
      id: 45,
      title: 'Piccolomini',
      childIds: [],
  },
  46: {
      id: 46,
      title: 'Tycho',
      childIds: [],
  },
  47: {
      id: 47,
      title: 'Mars',
      childIds: [48, 49],
  },
  48: {
      id: 48,
      title: 'Corn Town',
      childIds: [],
  },
  49: {
      id: 49,
      title: 'Green Hill',
      childIds: [],
  },
};




