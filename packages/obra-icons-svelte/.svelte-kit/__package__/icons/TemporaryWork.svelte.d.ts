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
export type TemporaryWorkProps = typeof __propDef.props;
export type TemporaryWorkEvents = typeof __propDef.events;
export type TemporaryWorkSlots = typeof __propDef.slots;
export default class TemporaryWork extends SvelteComponentTyped<TemporaryWorkProps, TemporaryWorkEvents, TemporaryWorkSlots> {
}
export {};
