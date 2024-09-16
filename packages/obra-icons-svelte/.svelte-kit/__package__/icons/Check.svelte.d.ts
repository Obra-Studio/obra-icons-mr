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
export type CheckProps = typeof __propDef.props;
export type CheckEvents = typeof __propDef.events;
export type CheckSlots = typeof __propDef.slots;
export default class Check extends SvelteComponentTyped<CheckProps, CheckEvents, CheckSlots> {
}
export {};
