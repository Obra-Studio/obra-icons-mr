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
export type SleepProps = typeof __propDef.props;
export type SleepEvents = typeof __propDef.events;
export type SleepSlots = typeof __propDef.slots;
export default class Sleep extends SvelteComponentTyped<SleepProps, SleepEvents, SleepSlots> {
}
export {};
