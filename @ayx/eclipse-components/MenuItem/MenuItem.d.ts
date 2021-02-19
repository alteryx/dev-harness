import * as React from 'react';
import * as MMenuItem from '@material-ui/core/MenuItem';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

declare const MenuItem: OverridableComponent<MMenuItem.MenuItemTypeMap & { props: { subMenu?: JSX.Element } }>;
export type MenuItem = MMenuItem.MenuItemTypeMap;
export type MenuItemClassKey = MMenuItem.MenuItemClassKey;
export type MenuItemProps = MMenuItem.MenuItemProps & { subMenu?: JSX.Element };

export default MenuItem;
