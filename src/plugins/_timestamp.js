/* Adds createdAt, updatedAt field on each collection schema */
module.exports = (schema) => {

  // Add the two fields to the schema
  schema.add({
    createdAt: Date,
    updatedAt: Date
  })

  // Create a pre-save hook
  schema.pre('save', (next) => {
    const now = Date.now();

    this.updatedAt = now;
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
      this.createdAt = now;
    }
    // Call the next function in the pre-save chain
    next();
  })
}
