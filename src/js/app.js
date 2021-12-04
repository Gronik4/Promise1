import GameSavingLoader from './GameSavingLoader';

export default function savingGame() {
  return GameSavingLoader.load().then(
    (saving) => saving,
    () => 'Ошибка',
  );
}
