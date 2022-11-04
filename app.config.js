module.exports = ({ config }) => {
  return {
    ...config,
    name: 'Rota-Mandacaru',
    version: '1.0.0',
  // All values in extra will be passed to your app.
    extra: {
      fact: 'kittens are cool',
      eas: {
       projectId: "f3079831-5f5f-4a3b-80c9-d6171829c941",
      }
   },
  }
};
