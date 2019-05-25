import {Duration} from './model/Duration';

export class StopWatch {
  private readonly startTimeInMillis: number;

  public constructor() {
    this.startTimeInMillis = Date.now();
  }

  public static start(): StopWatch {
    return new StopWatch();
  }

  public stop(): Duration {
    return new Duration(Date.now() - this.startTimeInMillis);
  }
}
