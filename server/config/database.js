import Waterline from 'waterline';
import disk from 'sails-disk';

export const waterline = new Waterline();

// Note: For some reason identities and table name must be lower case
const Reports = Waterline.Collection.extend({
  identity: 'report',
  tableName: 'reports',
  connection: 'default',
  attributes: {
    subject: {
      type: 'string',
      required: true,
      minLength: 2,
    },
    region: {
      type: 'string',
    },
    impact: {
      type: 'integer',
    },
  },
  migrate: 'safe',
});

export const config = {
  adapters: { disk },
  connections: {
    default: {
      adapter: 'disk',
    },
  },
};

waterline.loadCollection(Reports);
