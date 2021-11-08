import './Switcher.svelte.css';
/* src/components/Switcher.svelte generated by Svelte v3.43.1 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	space,
	text
} from "../../_snowpack/pkg/svelte/internal.js";

import { isMonthlyState } from './store/index.js';

function create_fragment(ctx) {
	let div1;
	let span0;
	let t0;
	let span0_class_value;
	let t1;
	let div0;
	let input;
	let t2;
	let b;
	let t3;
	let span1;
	let t4;
	let span1_class_value;
	let mounted;
	let dispose;

	return {
		c() {
			div1 = element("div");
			span0 = element("span");
			t0 = text("Monthly");
			t1 = space();
			div0 = element("div");
			input = element("input");
			t2 = space();
			b = element("b");
			t3 = space();
			span1 = element("span");
			t4 = text("Annually");
			attr(span0, "class", span0_class_value = "toggler " + (/*isMonthly*/ ctx[0] ? "toggler--is-active" : "") + " svelte-sjf6eg");
			attr(input, "type", "checkbox");
			attr(input, "id", "switcher");
			attr(input, "class", "check svelte-sjf6eg");
			attr(b, "class", "b switch svelte-sjf6eg");
			attr(div0, "class", "toggle svelte-sjf6eg");
			attr(span1, "class", span1_class_value = "toggler " + (/*isMonthly*/ ctx[0] ? "" : "toggler--is-active") + " svelte-sjf6eg");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, span0);
			append(span0, t0);
			append(div1, t1);
			append(div1, div0);
			append(div0, input);
			append(div0, t2);
			append(div0, b);
			append(div1, t3);
			append(div1, span1);
			append(span1, t4);

			if (!mounted) {
				dispose = listen(input, "change", /*change_handler*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*isMonthly*/ 1 && span0_class_value !== (span0_class_value = "toggler " + (/*isMonthly*/ ctx[0] ? "toggler--is-active" : "") + " svelte-sjf6eg")) {
				attr(span0, "class", span0_class_value);
			}

			if (dirty & /*isMonthly*/ 1 && span1_class_value !== (span1_class_value = "toggler " + (/*isMonthly*/ ctx[0] ? "" : "toggler--is-active") + " svelte-sjf6eg")) {
				attr(span1, "class", span1_class_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let isMonthly;

	isMonthlyState.subscribe(value => {
		$$invalidate(0, isMonthly = value);
	});

	const change_handler = () => {
		isMonthlyState.update(val => !val);
	};

	return [isMonthly, change_handler];
}

class Switcher extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Switcher;