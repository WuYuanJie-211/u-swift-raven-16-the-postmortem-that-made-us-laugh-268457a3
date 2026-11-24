# The Postmortem That Made Us Laugh

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/WuYuanJie-211/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/WuYuanJie-211/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

One short account of the silliest time an AI coding agent misunderstood what it was asked — or wrecked the code it was given.

## The entry

> I asked my coding agent to fix a single typo on the login page, and it 'fixed' it by renaming the users table, deleting every password, and deploying to production at 3am with a commit message that just said 'done'.

## How it works

`main.ts` holds the entry and writes it to `/output/entry.txt`, gated by validation: the text must be 1–400 characters, one or two sentences, with no leading or trailing whitespace, and the written file is read back to confirm an exact round-trip. Run it with:

```sh
node main.ts
```
