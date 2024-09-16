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
export type MagicWandAiProps = typeof __propDef.props;
export type MagicWandAiEvents = typeof __propDef.events;
export type MagicWandAiSlots = typeof __propDef.slots;
export default class MagicWandAi extends SvelteComponentTyped<MagicWandAiProps, MagicWandAiEvents, MagicWandAiSlots> {
}
export {};
