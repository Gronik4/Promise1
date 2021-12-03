export default class GameSaving {
  constructor(savingGame) {
    const { created, id, userInfo } = savingGame;
    this.created = created;
    this.id = id;
    this.userInfo = userInfo;
  }
}
