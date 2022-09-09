import type { Player } from './api';
import { reactive } from 'vue';
import type { LocationQuery, RouteParams, RouteMeta } from 'vue-router';

import type { ContextMenuItem } from '../components/MediaItemContextMenu.vue';

interface Store {
  selectedPlayer?: Player;
  isInStandaloneMode: boolean;
  showPlayersMenu: boolean;
  darkTheme: boolean;
  primaryColor: string;
  primaryTextColor: string;
  primaryBackgroundColor: string;
  topBarTitle?: string;
  topBarColor: string;
  topBarTextColor: string;
  topBarHeight: number;
  defaultTopBarTitle: string;
  topBarContextMenuItems: ContextMenuItem[];
  blockGlobalPlayMenu: boolean;
  alwaysShowMenuButton: boolean;
  apiInitialized: boolean;
  apiBaseUrl: string;
  prevRoutes: Array<{
    name: string;
    params: RouteParams;
    query: LocationQuery;
    meta: RouteMeta;
  }>;
}

export const store: Store = reactive({
  selectedPlayer: undefined,
  isInStandaloneMode: false,
  showPlayersMenu: false,
  darkTheme: false,
  primaryColor: 'primary',
  primaryTextColor: '#fff',
  primaryBackgroundColor: '#fff',
  topBarColor: '#424242',
  topBarTextColor: '#ffffff',
  topBarHeight: 55,
  defaultTopBarTitle: 'Music Assistant',
  topBarContextMenuItems: [],
  blockGlobalPlayMenu: false,
  alwaysShowMenuButton: false,
  apiInitialized: false,
  apiBaseUrl: '',
  prevRoutes: [],
});
