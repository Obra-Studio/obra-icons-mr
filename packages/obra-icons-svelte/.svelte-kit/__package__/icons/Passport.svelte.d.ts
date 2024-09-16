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
export type PassportProps = typeof __propDef.props;
export type PassportEvents = typeof __propDef.events;
export type PassportSlots = typeof __propDef.slots;
export default class Passport extends SvelteComponentTyped<PassportProps, PassportEvents, PassportSlots> {
}
export {};
