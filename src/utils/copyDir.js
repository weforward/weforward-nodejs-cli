const fs = require('fs');
const path = require("path");

function writeFile(p, text) {
	fs.writeFile(p, text);
}

//递归创建目录 同步方法  
function mkdirsSync(dirname, options) {
	if (isMatchIgnores(dirname, options.ignores)) {
		return;
	}
	if (fs.existsSync(dirname)) {
		return true;
	} else {
		if (mkdirsSync(path.dirname(dirname), options)) {
			fs.mkdirSync(dirname);
			return true;
		}
	}
}

function isMatchIgnores(filename, ignores) {
	if (!ignores || !filename) {
		return false;
	}
	if (filename.match(/\\/).length <= 1) {
		return false;
	}
	let items = ignores.split('|');
	for (let item of items) {
		if (filename.lastIndexOf(item) == filename.length - item.length) {
			return true;
		}
	}
	return false;
}

/**
 * @param {Object} src
 * @param {Object} dist
 * @param {Object} options
 * options：
 * ignores:'.svn|.gitignore|.vscode|.idea'
 */
function _copy(src, dist, options) {
	let idx = src.lastIndexOf()
	if (isMatchIgnores(src, options.ignores)) {
		return;
	}
	var paths = fs.readdirSync(src)
	paths.forEach(function(p) {
		var _src = src + path.sep + p;
		var _dist = dist + path.sep + p;
		var stat = fs.statSync(_src)
		if (stat.isFile()) { // 判断是文件还是目录
			fs.writeFileSync(_dist, fs.readFileSync(_src));
		} else if (stat.isDirectory()) {
			copyDir(_src, _dist, options) // 当是目录是，递归复制
		}
	})
}

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src, dist, options = {}) {
	var b = fs.existsSync(dist)
	if (!b) {
		mkdirsSync(dist, options); //创建目录
	}
	_copy(src, dist, options);
}

module.exports = copyDir;
