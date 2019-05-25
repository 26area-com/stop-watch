#Simple Stop Watch

This is simple stop watch to measure performance by typescript.

Just, 

```typescript
import {StopWatch} from '@26area/stop-watch';
import {Duration} from '@26area/stop-watch';
import {sleep} from '@26area/stop-watch';

const stopWatch: StopWatch = StopWatch.start();

await sleep(1000);

const duration: Duration = stopWatch.stop();
const durationInMillies: number = duration.getByMillis();
// durationInMillies is 1000
```
