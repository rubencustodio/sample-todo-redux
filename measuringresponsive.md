# When is load?
Old load metrics don't capture user experience
We need to rethink our metrics and focus on what matters

## What are LongTasks?
- scripts
- longer than 50ms
- because of main thread

## Real User Measurement (RUM)
- Web performance APIs
- Capture experience beyond page loads

### APIs and Metrics
- Performance Observer
- LongTasks
- Time to Interactive
- Input Latency

https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver

```
let entries = [];

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    entries.push(entry)
  }
})

observer.observe({entryTypes: ['longTask']})
```

### Time to Interactive
- is it usable?

From when user sees content, until they can interact

- No long tasks
- No long frames (FPS >= 20)
- Page Busy is less than 10%
- Low network activity (<= 2 outstanding)

### Input Latency
- Interactions ( scrolls, clicks, keys) may be delayed by script, layout and other browsers work
- Latency can be measured
- Latency can be attributed bia LongTasks

### How to find
1. Turn on PerformanceObserver
2. Watch for input delays
3. Find LongTasks
