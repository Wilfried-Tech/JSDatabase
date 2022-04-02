var defaultFieldOption = {
  primaryKey: false,
  unique: false,
  dataType: DataType.Null,
  notNull: true,
  autoIncrement: false
};

/**
 * check coherence of a table structure
 * @param {Object} table 
 * @returns {Object}
 */
export default function(table) {
  if (!table.columns) throw new SyntaxError('missing columns fields of table ')
}


//throw new Error('the table name can\'t not be null, empty or contain ponctuation');