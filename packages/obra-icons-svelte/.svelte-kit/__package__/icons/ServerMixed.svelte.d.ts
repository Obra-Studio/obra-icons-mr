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
export type ServerMixedProps = typeof __propDef.props;
export type ServerMixedEvents = typeof __propDef.events;
export type ServerMixedSlots = typeof __propDef.slots;
export default class ServerMixed extends SvelteComponentTyped<ServerMixedProps, ServerMixedEvents, ServerMixedSlots> {
}
export {};
