#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Config } from './config.js';
import { Downloader } from './downloader.js';

Config.load();

const downloader = new Downloader(process.env.API_KEY);

yargs(hideBin(process.argv))
    .scriptName('yt')
    .locale('en')
    .demandCommand()
    .command('config <key> [value]', 'save config', argv => {
        return argv
            .positional('key', {
                type: 'string',
                desc: 'key',
            })
            .positional('value', {
                type: 'string',
                desc: 'value',
            });
    }, argv => Config.saveFromCommand(argv))
    .command('download <id>', 'download youtube video', argv => {
        return argv
            .positional('id', {
                type: 'string',
                desc: 'id (or url) of the video',
            })
            .option('channel', {
                alias: ['c'],
                desc: 'download all videos from the channel',
                type: 'boolean',
            })
            .option('list', {
                alias: ['l'],
                desc: 'download all videos from the playlist',
                type: 'boolean',
            })
            .option('outdir', {
                alias: ['o'],
                desc: 'set directory for output videos',
                type: 'string',
            });
    }, argv => downloader.download(argv))
    .argv;
