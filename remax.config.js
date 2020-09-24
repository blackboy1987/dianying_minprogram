const less = require('@remax/plugin-less');
module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  UNSAFE_wechatTemplateDepth: {
    button: 10,
    swiper:10,
  },
  plugins: [less()],
};
