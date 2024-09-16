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
export type FavoriteOffProps = typeof __propDef.props;
export type FavoriteOffEvents = typeof __propDef.events;
export type FavoriteOffSlots = typeof __propDef.slots;
export default class FavoriteOff extends SvelteComponentTyped<FavoriteOffProps, FavoriteOffEvents, FavoriteOffSlots> {
}
export {};
