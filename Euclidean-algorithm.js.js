const euclideanGcd = (a, b) => {
  if (!b) {
      return a;
  }
  return euclideanGcd(b, a % b);
};
