export class Duration<T> {
  private readonly SecondByInMillis: number = 1000;

  private readonly durationInMillis: number;

  public readonly value: T;

  public constructor(returnValue: T, durationInMillis: number) {
    this.value = returnValue;
    this.durationInMillis = durationInMillis;
  }

  /**
   *
   * Get duration by second.
   * @return Second floor millis.
   *
   */
  public getBySec(): number {
    return this.durationInMillis / this.SecondByInMillis;
  }

  public getByMillis(): number {
    return this.durationInMillis;
  }
}
