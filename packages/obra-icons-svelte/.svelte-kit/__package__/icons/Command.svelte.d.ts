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
export type CommandProps = typeof __propDef.props;
export type CommandEvents = typeof __propDef.events;
export type CommandSlots = typeof __propDef.slots;
export default class Command extends SvelteComponentTyped<CommandProps, CommandEvents, CommandSlots> {
}
export {};
