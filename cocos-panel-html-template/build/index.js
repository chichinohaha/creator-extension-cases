'use strict';

const { join } = require('path');
const { spawnSync } = require('child_process');
const { ensureDirSync, readdirSync, copyFileSync } = require('fs-extra');

const getCSSConfig = function() {
    try {
        const panelNames = readdirSync(join(__dirname, '../src/panels'));
        return panelNames.map(panelName => {
            return {
                source: `./src/panels/${panelName}/style/index.less`,
                dist: `./dist/panels/${panelName}/style/index.css`,
            };
        });
    } catch (error) {
        return [];
    }
};

const getTemplateConfig = function() {
    try {
        const panelNames = readdirSync(join(__dirname, '../src/panels'));
        return panelNames.map(panelName => {
            return {
                source: join(__dirname, `../src/panels/${panelName}/template/index.html`),
                dist: join(__dirname, `../dist/panels/${panelName}/template/index.html`),
            };
        });
    } catch (error) {
        return [];
    }
};

const cmd = process.platform === 'win32' ? 'tsc.cmd' : 'tsc';
spawnSync(cmd, ['-b'], {
    cwd: join(__dirname, '../', './'),
});

const cssConfig = getCSSConfig();
cssConfig.forEach(config => {
    const cmd = process.platform === 'win32' ? 'lessc.cmd' : 'lessc';
    spawnSync(cmd, [config.source, config.dist], {
        cwd: join(__dirname, '../'),
    });
});

const templateConfig = getTemplateConfig();
templateConfig.forEach(config => {
    ensureDirSync(join(config.dist, '../'));
    copyFileSync(config.source, config.dist);
});
