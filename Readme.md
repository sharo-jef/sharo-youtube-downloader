# Youtube Downloader

## Requirements
- Node.js
    - after v15
- Youtube Data API v3
    - api key

## Installation
```bash
npm i -g youtube-downloader
```

## Configuration
```bash
youtube config <key> [value]
```

### example
```bash
youtube config API_KEY foobar
```

## Usage
### Help
```bash
yt --help
yt download --help
```

### Download
```bash
youtube download <videoId>
```

```bash
youtube download <videoId> --outdir <directoryName>
```

```bash
youtube download --list <playlistId>
```

```bash
youtube download --channel <channelId>
```
