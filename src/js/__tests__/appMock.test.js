import savingGame from '../app';

jest.mock('../GameSavingLoader.js');
const Expected = 'Ошибка';

test('Test app on throw', () => {
  return savingGame().catch((err) => {
    expect(err.message).toBe(Expected);
  });
});
