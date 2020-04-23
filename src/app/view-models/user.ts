export class User {
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  public id: number;
  public username: string;
  public fname: string;
  public image;
  public email;
  public password;
}
