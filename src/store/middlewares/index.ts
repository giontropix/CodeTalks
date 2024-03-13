import { Tuple } from '@reduxjs/toolkit';
import { rtkQueryApis } from '../rtkQuery/getRtkQueryApis';

export default new Tuple(rtkQueryApis.middleware);
