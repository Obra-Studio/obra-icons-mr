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
export type LogOutProps = typeof __propDef.props;
export type LogOutEvents = typeof __propDef.events;
export type LogOutSlots = typeof __propDef.slots;
export default class LogOut extends SvelteComponentTyped<LogOutProps, LogOutEvents, LogOutSlots> {
}
export {};
