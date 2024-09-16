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
export type Volume2Props = typeof __propDef.props;
export type Volume2Events = typeof __propDef.events;
export type Volume2Slots = typeof __propDef.slots;
export default class Volume2 extends SvelteComponentTyped<Volume2Props, Volume2Events, Volume2Slots> {
}
export {};
