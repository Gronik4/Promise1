import savingGame from '../app';

jest.mock('../reader.js');

test('Test app on throw', async () => {
  const Expected = 'Ошибка';
  const date = await savingGame();
  expect(date).toBe(Expected);
});
