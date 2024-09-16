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
export type MagicWandProps = typeof __propDef.props;
export type MagicWandEvents = typeof __propDef.events;
export type MagicWandSlots = typeof __propDef.slots;
export default class MagicWand extends SvelteComponentTyped<MagicWandProps, MagicWandEvents, MagicWandSlots> {
}
export {};
