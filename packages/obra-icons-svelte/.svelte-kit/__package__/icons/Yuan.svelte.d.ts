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
export type YuanProps = typeof __propDef.props;
export type YuanEvents = typeof __propDef.events;
export type YuanSlots = typeof __propDef.slots;
export default class Yuan extends SvelteComponentTyped<YuanProps, YuanEvents, YuanSlots> {
}
export {};
