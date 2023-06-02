const obj = {
	x: 10,
	y: 20,
	inner: {
		x: 20,
		z: 30
	},
	foo2: {
		k: 23,
		p: 13
	}
};

function convert(obj) {
  const newObj = {};
	function convertRecursion(object) {
		for (let key in object) {
			if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
				convertRecursion(object[key]);
			} else {
				newObj[key] = object[key];
			}
		}
	}
	convertRecursion(obj);
  return newObj;
}

const newObj = convert(obj);

console.log(newObj);
