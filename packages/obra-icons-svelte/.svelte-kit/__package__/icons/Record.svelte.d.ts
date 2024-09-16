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
export type RecordProps = typeof __propDef.props;
export type RecordEvents = typeof __propDef.events;
export type RecordSlots = typeof __propDef.slots;
export default class Record extends SvelteComponentTyped<RecordProps, RecordEvents, RecordSlots> {
}
export {};
