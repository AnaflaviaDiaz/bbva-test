import { IconName } from '../icon/list.js';
import { VariantSize } from './variant.model.js';

export interface IconModel {
  name: IconName;
  color?: string;
  size?: VariantSize;
}
