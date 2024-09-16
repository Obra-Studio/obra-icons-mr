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
export type ConnectProps = typeof __propDef.props;
export type ConnectEvents = typeof __propDef.events;
export type ConnectSlots = typeof __propDef.slots;
export default class Connect extends SvelteComponentTyped<ConnectProps, ConnectEvents, ConnectSlots> {
}
export {};
