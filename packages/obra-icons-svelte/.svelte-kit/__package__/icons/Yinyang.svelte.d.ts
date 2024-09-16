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
export type YinyangProps = typeof __propDef.props;
export type YinyangEvents = typeof __propDef.events;
export type YinyangSlots = typeof __propDef.slots;
export default class Yinyang extends SvelteComponentTyped<YinyangProps, YinyangEvents, YinyangSlots> {
}
export {};
