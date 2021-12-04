import savingGame from '../app';

jest.mock('../reader.js');
const Expected = 'Ошибка';

test('Test app on throw', async () => {
  const date = await savingGame();
  expect(date).toBe(Expected);
});
