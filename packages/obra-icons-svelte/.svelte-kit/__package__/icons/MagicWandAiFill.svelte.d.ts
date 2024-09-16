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
export type MagicWandAiFillProps = typeof __propDef.props;
export type MagicWandAiFillEvents = typeof __propDef.events;
export type MagicWandAiFillSlots = typeof __propDef.slots;
export default class MagicWandAiFill extends SvelteComponentTyped<MagicWandAiFillProps, MagicWandAiFillEvents, MagicWandAiFillSlots> {
}
export {};
