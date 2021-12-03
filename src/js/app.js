import GameSavingLoader from './GameSavingLoader';

export default function savingGame() {
  return GameSavingLoader.load().then(
    (saving) => { return saving; },
    () => { throw new Error('Ошибка'); },
  );
}
