import { openDatabase, dropDatabase } from './DatabaseMethod.js'
import { fullSupportDatabases } from './utils'

if (fullSupportDatabases()) {
  window.DatabaseJS = {
    openOrCreate: openDatabase,
    dropDatabase: dropDatabase,
        deviceFullSupports: fullSupportDatabases
  };

} else {
  window.DatabaseJS = {
    deviceFullSupports: fullSupportDatabases
  };
  console.error(`This Browser do not support a stable version of Database.\nPlease update your browser !`);
}
