import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FavoriteProps = typeof __propDef.props;
export type FavoriteEvents = typeof __propDef.events;
export type FavoriteSlots = typeof __propDef.slots;
export default class Favorite extends SvelteComponentTyped<FavoriteProps, FavoriteEvents, FavoriteSlots> {
}
export {};
