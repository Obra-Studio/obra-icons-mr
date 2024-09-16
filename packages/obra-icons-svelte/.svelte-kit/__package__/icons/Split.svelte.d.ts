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
export type SplitProps = typeof __propDef.props;
export type SplitEvents = typeof __propDef.events;
export type SplitSlots = typeof __propDef.slots;
export default class Split extends SvelteComponentTyped<SplitProps, SplitEvents, SplitSlots> {
}
export {};
