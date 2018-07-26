import test from 'ava';
import alfyTest from 'alfy-test';
const yesNo = require('yes-no-words');

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('yes');
	t.true(yesNo.all.includes(result[0].arg))
});
