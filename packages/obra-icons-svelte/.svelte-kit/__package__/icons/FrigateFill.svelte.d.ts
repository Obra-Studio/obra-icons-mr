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
export type FrigateFillProps = typeof __propDef.props;
export type FrigateFillEvents = typeof __propDef.events;
export type FrigateFillSlots = typeof __propDef.slots;
export default class FrigateFill extends SvelteComponentTyped<FrigateFillProps, FrigateFillEvents, FrigateFillSlots> {
}
export {};
