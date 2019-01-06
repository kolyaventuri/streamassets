console.log('Loaded');

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept();
}
