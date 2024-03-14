import _ from 'lodash';
import { codesByCategories } from './http-status.constants';

export { getHttpStatuses };

function getHttpStatuses() {
  return _.chain(codesByCategories)
    .map('codes')
    .flatten()
    .filter({ type: 'HTTP' })
    .map(({ type, ...rest }) => rest)
    .value();
}
