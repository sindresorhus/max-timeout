import test from 'ava';
import maxTimeout from '.';

test.cb('works', t => {
	setTimeout(() => t.fail(), maxTimeout);
	setTimeout(() => t.end(), 100);
});

test.cb('overflows', t => {
	const now = Date.now();

	const id = setTimeout(() => {
		t.true(Date.now() - now < 10);
	}, maxTimeout + 1);

	// ensure it always finishes
	setTimeout(() => {
		clearTimeout(id);
		t.end();
	}, 100);
});
