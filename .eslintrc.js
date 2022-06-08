module.exports = {
  extends: 'airbnb',
  rules: {
    'no-unused-expressions': ['error', {
      // eslint-disable-next-line quote-props
      'allowTernary': true,
    }],
  },
};
