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
export type RecordFillProps = typeof __propDef.props;
export type RecordFillEvents = typeof __propDef.events;
export type RecordFillSlots = typeof __propDef.slots;
export default class RecordFill extends SvelteComponentTyped<RecordFillProps, RecordFillEvents, RecordFillSlots> {
}
export {};
