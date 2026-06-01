import { IconName } from '../icon/list.js';
import { VariantSize } from './variant.model.js';

export interface IconModel {
  name: IconName;
  altText?: string;
  color?: string;
  size?: VariantSize;
}
