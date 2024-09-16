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
export type RadioOnProps = typeof __propDef.props;
export type RadioOnEvents = typeof __propDef.events;
export type RadioOnSlots = typeof __propDef.slots;
export default class RadioOn extends SvelteComponentTyped<RadioOnProps, RadioOnEvents, RadioOnSlots> {
}
export {};
