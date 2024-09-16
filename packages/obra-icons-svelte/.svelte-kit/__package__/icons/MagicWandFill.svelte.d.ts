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
export type MagicWandFillProps = typeof __propDef.props;
export type MagicWandFillEvents = typeof __propDef.events;
export type MagicWandFillSlots = typeof __propDef.slots;
export default class MagicWandFill extends SvelteComponentTyped<MagicWandFillProps, MagicWandFillEvents, MagicWandFillSlots> {
}
export {};
