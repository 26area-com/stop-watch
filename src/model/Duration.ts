export class Duration {
  private readonly SecondByInMillis: number = 1000;

  public readonly durationInMillis: number;

  public constructor(durationImMillis: number) {
    this.durationInMillis = durationImMillis;
  }

  public getBySec(): number {
    return this.durationInMillis / this.SecondByInMillis;
  }

  public getByMillis(): number {
    return this.durationInMillis;
  }
}
