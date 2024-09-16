import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FavoriteOffFillProps = typeof __propDef.props;
export type FavoriteOffFillEvents = typeof __propDef.events;
export type FavoriteOffFillSlots = typeof __propDef.slots;
export default class FavoriteOffFill extends SvelteComponentTyped<FavoriteOffFillProps, FavoriteOffFillEvents, FavoriteOffFillSlots> {
}
export {};
