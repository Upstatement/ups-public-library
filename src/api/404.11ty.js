exports.data = () => ({
  permalink: 'api/404.json',
});

exports.render = () => {
  // Defines the 404 page data
  const data = {
    status: 404,
    message: 'Route not found',
  };

  // Render as JSON for the API
  return this.renderApi(data);
};
