// Const. definition
export default {
  VALID_LIST: [
    {
      id: '1',
      category: 'cat1',
      payee: 'payee1',
      amount: 0,
      createdAt: '2020-01-01',
    },
    {
      id: '2',
      category: 'cat2',
      payee: 'payee2',
      amount: 10,
      createdAt: '2021-10-12',
    },
  ],
  TEXT_CRITERIA_ID_1: 'payee1',
  TEXT_CRITERIA_ALL: 'paye',
  DATERANGE_CRITERIA: [new Date(2019, 3, 1), new Date(2021, 3, 1)],
  DATE_CRITERIA_NO_END: [new Date(2019, 3, 1), null],
  DATE_CRITERIA_NO_START: [null, new Date(2020, 3, 1)],
  INVALID_LIST_MISSING_PAYEE: [
    {
      id: '1',
      category: 'cat1',
      amount: 0,
      createdAt: '2020-01-01',
    },
    {
      id: '2',
      category: 'cat2',
      payee: 'payee2',
      amount: 10,
      createdAt: '2021-10-12',
    },
  ],
};
