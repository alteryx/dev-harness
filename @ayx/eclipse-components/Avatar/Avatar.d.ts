import * as React from 'react';
import * as MAvatar from '@material-ui/core/Avatar';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
declare const Avatar: OverridableComponent<MAvatar.AvatarTypeMap & { props: { size?: Size }}>;
export type AvatarClassKey = MAvatar.AvatarClassKey;
export type AvatarProps = MAvatar.AvatarProps & { size?: Size };

export default Avatar;