/* Below are the common functions used across router files */
module.exports = {
  /* Success response */
  onSuccess: (response, fetched_db_data, custom_message = false) => {
    return response.json({
      message: custom_message || 'Query successfully!',
      status: 'Success',
      status_code: response.statusCode,
      response_body: fetched_db_data
    });
  },
  /* Error response */
  onError: (response, error_data, custom_message = false) => {
    return response.json({
      message: custom_message || 'Something went wrong!',
      status: 'Error',
      status_code: response.statusCode,
      response_body: error_data
    });
  }
};
