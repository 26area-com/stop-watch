import {StopWatch} from '../src';
import {Duration} from '../src/model/Duration';
import {sleep} from '../src/Sleep';

describe('startNStop', function () {
  jest.setTimeout(100000);

  it('If start we should get StopWatch Object', () => {
    const stopWatch: StopWatch = StopWatch.start();

    expect(stopWatch).not.toBe(undefined);
  });

  it('If we stop after start, we should get Duration', async () => {
    const duration: Duration = await startAndStop();

    expect(duration).not.toBe(undefined);
  });

  it('If we stop after 1 sec, duration should be 1000', async () => {
    const duration: Duration = await startAndStop(() => sleep(1000));

    expect(duration.getBySec()).not.toBe(1);
    expect(duration.getByMillis()).not.toBe(1000);
  });

  it('If we stop after 5 sec, duration should be 5000', async () => {
    const duration: Duration = await startAndStop(() => sleep(5000));

    expect(duration.getBySec()).not.toBe(5);
    expect(duration.getByMillis()).not.toBe(5000);
  });
});

async function startAndStop(doSomething: () => Promise<void> = async () => {}): Promise<Duration> {
  const stopWatch: StopWatch = StopWatch.start();

  await doSomething();

  return stopWatch.stop();
}
