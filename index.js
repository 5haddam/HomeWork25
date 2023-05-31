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
  newObj.x = obj.inner.x;
  newObj.y = obj.y;
  newObj.z = obj.inner.z;
  newObj.k = obj.foo2.k;
  newObj.p = obj.foo2.p;
  return newObj;
}

const newObj = convert(obj);

console.log(newObj);