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
export type ServerRackProps = typeof __propDef.props;
export type ServerRackEvents = typeof __propDef.events;
export type ServerRackSlots = typeof __propDef.slots;
export default class ServerRack extends SvelteComponentTyped<ServerRackProps, ServerRackEvents, ServerRackSlots> {
}
export {};
