#!/usr/bin/env node

'use strict'
const program = require('commander');
const mypackage = require('./package.json');
const path = require('path');
const fs = require('fs');
program.version(mypackage.version, '-v, --version')
	.command('init <name>')
	.action((projectName) => {
		if (!projectName) {
			throw new Error('project name is empty');
		}
		let templatepath = path.resolve(__dirname, 'src/template');
		let targetPath = path.resolve(process.cwd(), projectName);
		if (fs.existsSync(targetPath)) {
			console.log(`the directory ${targetPath} is already exists`);
			process.exit();
			return;
		}
		const copyDir = require('./src/utils/copyDir.js');
		copyDir(templatepath, targetPath, {
			ignores: '.svn|.gitignore|.vscode|.idea'
		});
		let packagePath = path.resolve(process.cwd(), `${projectName}/package.json`);
		let packageobj = require(packagePath);
		packageobj.name = projectName;
		fs.writeFileSync(packagePath, JSON.stringify(packageobj, null, '\t'));
		console.log(`the project ${projectName} has been created successfully!`);
		process.exit();
	});
program.parse(process.argv);
