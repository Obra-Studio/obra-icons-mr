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
export type DisconnectProps = typeof __propDef.props;
export type DisconnectEvents = typeof __propDef.events;
export type DisconnectSlots = typeof __propDef.slots;
export default class Disconnect extends SvelteComponentTyped<DisconnectProps, DisconnectEvents, DisconnectSlots> {
}
export {};
