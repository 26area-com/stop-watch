# Simple Stop Watch

This is simple stop watch to measure performance by typescript.

Just, 

```typescript
import {StopWatch} from '@26area/stop-watch';
import {Duration} from '@26area/stop-watch';
import {sleep} from '@26area/stop-watch';

const stopWatch: StopWatch = StopWatch.start();

await sleep(1000);

const duration: Duration<undefined> = stopWatch.stop();
const durationInMillies: number = duration.getByMillis();
// durationInMillies is 1000
```

We can also measure function.
```typescript
import {StopWatch} from '@26area/stop-watch';
import {Duration} from '@26area/stop-watch';

function foo(): number {
  return 1;
}

async function fooAsync(): Promise<number> {
  return 1;
}

const duration: Duration<number> = StopWatch.measure(() => foo());
duration.value;
// value is 1

const asyncDuration: Duration<number> = await StopWatch.measureAsync(() => fooAsync());
asyncDuration.value;
// value is 1
```
