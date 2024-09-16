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
export type CassetteTapeProps = typeof __propDef.props;
export type CassetteTapeEvents = typeof __propDef.events;
export type CassetteTapeSlots = typeof __propDef.slots;
export default class CassetteTape extends SvelteComponentTyped<CassetteTapeProps, CassetteTapeEvents, CassetteTapeSlots> {
}
export {};
