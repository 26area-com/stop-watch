import {StopWatch} from '../src';
import {Duration} from '../src';
import {sleep} from '../src';

describe('startNStop', function () {
  jest.setTimeout(100000);

  it('If start we should get StopWatch Object', () => {
    const stopWatch: StopWatch = StopWatch.start();

    expect(stopWatch).not.toBe(undefined);
  });

  it('If we stop after start, we should get Duration', async () => {
    const duration: Duration<void> = await startAndStop();

    expect(duration).not.toBe(undefined);
  });

  it('If we stop after 1 sec, duration should be 1000', async () => {
    const duration: Duration<void> = await startAndStop(() => sleep(1000));

    expect(duration.getBySec()).not.toBe(1);
    expect(duration.getByMillis()).not.toBe(1000);
  });

  it('If we stop after 5 sec, duration should be 5000', async () => {
    const duration: Duration<void> = await startAndStop(() => sleep(5000));

    expect(duration.getBySec()).not.toBe(5);
    expect(duration.getByMillis()).not.toBe(5000);
  });
});

describe('measure', () => {
  it('We can measure number function', () => {
    const functionToMeasure: (num: number) => number = (num: number) => num;

    const duration = StopWatch.measure(() => functionToMeasure(1));

    expect(duration.getByMillis()).toEqual(0);
    expect(duration.value).toEqual(1);
  });
});

describe('measureAsync', () => {
  it('We can measure number function', async () => {
    const functionToMeasure: (num: number) => Promise<number> = async (num: number) => num;

    const duration = await StopWatch.measureAsync(() => functionToMeasure(1));

    expect(duration.value).toEqual(1);
  });
});
async function startAndStop(doSomething?: () => Promise<void>): Promise<Duration<void>> {
  const stopWatch: StopWatch = StopWatch.start();

  if (!!doSomething) {
    await doSomething();
  }

  return stopWatch.stop();
}
