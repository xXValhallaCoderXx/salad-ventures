const hasKey = (obj, key) => key in obj;

const Undefined = new Proxy(
  {},
  {
    get: function (target, name) {
      return Undefined;
    },
  },
);

function safeObject(obj, fallback) {
  return new Proxy(obj, {
    get: function (target, name) {
      return hasKey(target, name) ? target[name] : fallback || Undefined;
    },
  });
}

export default safeObject;
