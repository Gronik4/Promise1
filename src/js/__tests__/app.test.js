import savingGame from '../app';
import GameSaving from '../GameSaving';

const dat = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
const result = new GameSaving(JSON.parse(dat));

test('Test app.js', () => {
  return savingGame().then((data) => {
    expect(data).toEqual(result);
  });
});
