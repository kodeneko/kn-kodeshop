export default {
  plugins: {
    autoprefixer: {},
    cssnano: {},
    "postcss-nesting": {},
    "postcss-simple-vars": {},
    "postcss-normalize": {},
    "postcss-import": {},
    "postcss-functions": {
      functions: {
        pxToRem: (val, base = 16, scale = 1) => {
          const sufReg = /px$/;
          const valNorm = val.replace(sufReg, "");
          const baseNorm = base.replace(sufReg, "");
          const scaleNorm = scale.replace(sufReg, "");
          return `${parseInt(valNorm) / baseNorm * scaleNorm}rem`;
        }
      }
    }
  }
}