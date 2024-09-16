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
export type DisconnectFillProps = typeof __propDef.props;
export type DisconnectFillEvents = typeof __propDef.events;
export type DisconnectFillSlots = typeof __propDef.slots;
export default class DisconnectFill extends SvelteComponentTyped<DisconnectFillProps, DisconnectFillEvents, DisconnectFillSlots> {
}
export {};
