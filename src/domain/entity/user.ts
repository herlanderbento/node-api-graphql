import { randomUUID } from 'node:crypto';

export type UserProperty = {
  name: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

export class User {
  private _id: string;

  constructor(
    public readonly props: UserProperty,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
      updated_at: props.updated_at ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  private set name(name: string) {
    this.props.name = name;
  }

  public get email(): string {
    return this.props.email;
  }

  private set email(email: string) {
    this.props.email = email;
  }

  public get password(): string {
    return this.props.password;
  }

  private set password(password: string) {
    this.props.password = password;
  }
}