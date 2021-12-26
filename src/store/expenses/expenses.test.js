// External imports

// Internal imports
import { filterListItems, sortByListItems } from './expenses.actions';
import fixture from './fixtures';

// Testing Input Data
const {
  VALID_LIST,
  TEXT_CRITERIA_ID_1,
  TEXT_CRITERIA_ALL,
  DATERANGE_CRITERIA,
  DATE_CRITERIA_NO_END,
  DATE_CRITERIA_NO_START,
  INVALID_LIST_MISSING_PAYEE,
} = fixture;

// Utility functions

// Test case #1 - filterListItem:
test('should throw error if no argument is passed in', () => {
  expect(() => filterListItems()).toThrow('The list provided is not valid.');
});
// Test case #2 - filterListItem:
test('should return same list if no criteria argument is passed in', () => {
  expect(filterListItems(VALID_LIST)).toEqual(VALID_LIST);
});
// Test case #3 - filterListItem:
test('should return filtered list with item id: 1 on text criteria', () => {
  expect(filterListItems(VALID_LIST, TEXT_CRITERIA_ID_1)).toEqual([
    VALID_LIST[0],
  ]);
});
// Test case #4 - filterListItem:
test('should return filtered list with all items on full matching text', () => {
  expect(filterListItems(VALID_LIST, TEXT_CRITERIA_ALL)).toEqual(VALID_LIST);
});
// Test case #5 - filterListItem:
test('should return empty list on no text match', () => {
  expect(filterListItems(VALID_LIST, 'no match')).toEqual([]);
});
// Test case #6 - filterListItem:
test('should return filtered list with item id: 1 on date range criteria', () => {
  expect(filterListItems(VALID_LIST, DATERANGE_CRITERIA)).toEqual([
    VALID_LIST[0],
  ]);
});
// Test case #7 - filterListItem:
test('should return filtered list with item id: 1 and 2 on date range criteria with no end date', () => {
  expect(filterListItems(VALID_LIST, DATE_CRITERIA_NO_END)).toEqual(VALID_LIST);
});
// Test case #8 - filterListItem:
test('should return filtered list with item id: 1 on date range criteria with no start date', () => {
  expect(filterListItems(VALID_LIST, DATE_CRITERIA_NO_START)).toEqual([
    VALID_LIST[0],
  ]);
});
// Test case #9 - filterListItem:
test('should throw error if one of items has no payee attribute', () => {
  expect(() => filterListItems(INVALID_LIST_MISSING_PAYEE, 'payee1')).toThrow(
    'Missing payee in element with id: 1'
  );
});
