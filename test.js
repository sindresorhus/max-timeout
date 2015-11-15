import test from 'ava';
import x from './';

test('works', t => {
	setTimeout(() => t.fail(), x);
	setTimeout(() => t.end(), 100);
});

test('overflows', t => {
	const now = Date.now();

	const id = setTimeout(() => {
		t.true(Date.now() - now < 10);
	}, x + 1);

	// ensure it always finishes
	setTimeout(() => {
		clearTimeout(id);
		t.end();
	}, 100);
});
