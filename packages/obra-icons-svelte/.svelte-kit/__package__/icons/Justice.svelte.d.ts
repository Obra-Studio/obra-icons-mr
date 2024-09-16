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
export type JusticeProps = typeof __propDef.props;
export type JusticeEvents = typeof __propDef.events;
export type JusticeSlots = typeof __propDef.slots;
export default class Justice extends SvelteComponentTyped<JusticeProps, JusticeEvents, JusticeSlots> {
}
export {};
