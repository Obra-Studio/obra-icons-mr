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
export type Volume1Props = typeof __propDef.props;
export type Volume1Events = typeof __propDef.events;
export type Volume1Slots = typeof __propDef.slots;
export default class Volume1 extends SvelteComponentTyped<Volume1Props, Volume1Events, Volume1Slots> {
}
export {};
