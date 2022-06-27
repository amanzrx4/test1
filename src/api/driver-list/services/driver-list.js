'use strict';

/**
 * driver-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::driver-list.driver-list');
