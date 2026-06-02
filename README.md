# rescuetime

A terminal CLI for [RescueTime](https://www.rescuetime.com) — productivity pulse, time by
category, top activities, focus breakdown, and highlights from your shell.

This is an unofficial third-party CLI.

## Install

```sh
brew install serhiitroinin/tap/rescuetime
```

Or run from source with [Bun](https://bun.sh):

```sh
bun install
bun run src/cli.ts --help
```

## Setup

Get an API key from RescueTime → Account Settings → API → Manage API keys, then:

```sh
rescuetime setup
rescuetime status
```

The key is stored in the macOS Keychain (service: `rescuetime`).

## Usage

```sh
rescuetime overview              # full dashboard (last 7 days)
rescuetime productivity 14       # daily pulse scores
rescuetime categories            # time by category
rescuetime activities            # top apps/sites by time
rescuetime focus                 # productive vs distracting per day
rescuetime focus-sessions        # focus session history
rescuetime highlights            # daily highlights
rescuetime json summary          # raw JSON for any endpoint
```

## Migrating from `luff`

`rescuetime` was extracted from the `rescuetime` tool in the `luff` monorepo. To copy
your existing API key from the old Keychain entry:

```sh
rescuetime auth-import-from-luff
```

This reads the credential stored under the legacy `luff-rescuetime` Keychain service and
copies it to the standalone `rescuetime` service. It is idempotent and does not delete the
original.

## License

MIT
