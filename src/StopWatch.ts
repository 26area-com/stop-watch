import {Duration} from './model/Duration';

export class StopWatch {
  private readonly startTimeInMillis: number;

  public constructor() {
    this.startTimeInMillis = Date.now();
  }

  /**
   *
   * Start of StopWatch. It save current time in millis
   * @return StopWatch instance which save current time in millis
   *
   */
  public static start(): StopWatch {
    return new StopWatch();
  }

  /**
   *
   * Stop and compare time and start time.
   * @return Duration which store time in millis
   *
   */
  public stop(): Duration<undefined> {
    return new Duration(undefined, Date.now() - this.startTimeInMillis);
  }

  /**
   *
   * Measure function how long function takes. Function should be thunk so, pass parameter inevitably.
   * @param functionToMeasure: Thunk function has to be measured.
   * @return Duration which has value and duration information.
   *
   */
  public static measure<T>(functionToMeasure: () => T): Duration<T> {
    const stopWatch = StopWatch.start();
    const result = functionToMeasure();

    return new Duration(result, stopWatch.stop().getByMillis());
  }

  /**
   *
   * Measure async function how long function takes. Function should be thunk so, pass parameter inevitably.
   * @param functionToMeasure: Thunk function has to be measured.
   * @return Promise<Duration> which has value and duration information.
   *
   */
  public static async measureAsync<T>(functionToMeasure: () => Promise<T>): Promise<Duration<T>> {
    const stopWatch = StopWatch.start();
    const result = await functionToMeasure();

    return new Duration(result, stopWatch.stop().getByMillis());
  }
}
