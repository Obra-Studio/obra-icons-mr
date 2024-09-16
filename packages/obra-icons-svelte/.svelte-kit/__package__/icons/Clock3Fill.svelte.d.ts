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
export type Clock3FillProps = typeof __propDef.props;
export type Clock3FillEvents = typeof __propDef.events;
export type Clock3FillSlots = typeof __propDef.slots;
export default class Clock3Fill extends SvelteComponentTyped<Clock3FillProps, Clock3FillEvents, Clock3FillSlots> {
}
export {};
