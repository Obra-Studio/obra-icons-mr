import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ServerFillProps = typeof __propDef.props;
export type ServerFillEvents = typeof __propDef.events;
export type ServerFillSlots = typeof __propDef.slots;
export default class ServerFill extends SvelteComponentTyped<ServerFillProps, ServerFillEvents, ServerFillSlots> {
}
export {};
