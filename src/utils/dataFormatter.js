import numeral from 'numeral';

/**
 * Formats the input expense data to specified display format
 * @param data is the raw data object -> onne/unique expense
 * @param dec is the number of decimals for the expense amount
 */

export const formatExpenses = (data, dec = 0) => ({
  ...data,
  amount: numeral(data.amount).format(
    // eslint-disable-next-line no-useless-concat
    '$0,0' + `${!!dec && '.'}` + `${'0'.repeat(dec)}`
  ),
  createdAt: data.createdAt.split('T')[0],
});
