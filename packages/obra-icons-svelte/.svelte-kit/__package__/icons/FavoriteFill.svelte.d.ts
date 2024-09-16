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
export type FavoriteFillProps = typeof __propDef.props;
export type FavoriteFillEvents = typeof __propDef.events;
export type FavoriteFillSlots = typeof __propDef.slots;
export default class FavoriteFill extends SvelteComponentTyped<FavoriteFillProps, FavoriteFillEvents, FavoriteFillSlots> {
}
export {};
