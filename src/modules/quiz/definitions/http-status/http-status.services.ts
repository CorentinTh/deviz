import _ from 'lodash';
import { codesByCategories } from './http-status.constants';

export { getHttpStatus };

function getHttpStatus() {
  return _.chain(codesByCategories)
    .map('codes')
    .flatten()
    .filter({ type: 'HTTP' })
    .map(({ type, ...rest }) => rest)
    .value();
}
