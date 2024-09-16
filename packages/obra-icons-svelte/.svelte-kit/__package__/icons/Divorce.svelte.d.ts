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
export type DivorceProps = typeof __propDef.props;
export type DivorceEvents = typeof __propDef.events;
export type DivorceSlots = typeof __propDef.slots;
export default class Divorce extends SvelteComponentTyped<DivorceProps, DivorceEvents, DivorceSlots> {
}
export {};
