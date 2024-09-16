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
export type AlarmProps = typeof __propDef.props;
export type AlarmEvents = typeof __propDef.events;
export type AlarmSlots = typeof __propDef.slots;
export default class Alarm extends SvelteComponentTyped<AlarmProps, AlarmEvents, AlarmSlots> {
}
export {};
