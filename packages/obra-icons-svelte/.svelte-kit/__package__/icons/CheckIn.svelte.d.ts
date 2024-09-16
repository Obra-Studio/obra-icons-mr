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
export type CheckInProps = typeof __propDef.props;
export type CheckInEvents = typeof __propDef.events;
export type CheckInSlots = typeof __propDef.slots;
export default class CheckIn extends SvelteComponentTyped<CheckInProps, CheckInEvents, CheckInSlots> {
}
export {};
