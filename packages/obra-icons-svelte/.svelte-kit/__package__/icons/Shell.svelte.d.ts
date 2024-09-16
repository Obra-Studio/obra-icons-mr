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
export type ShellProps = typeof __propDef.props;
export type ShellEvents = typeof __propDef.events;
export type ShellSlots = typeof __propDef.slots;
export default class Shell extends SvelteComponentTyped<ShellProps, ShellEvents, ShellSlots> {
}
export {};
