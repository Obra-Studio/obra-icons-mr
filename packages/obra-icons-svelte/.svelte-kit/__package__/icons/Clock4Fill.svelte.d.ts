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
export type Clock4FillProps = typeof __propDef.props;
export type Clock4FillEvents = typeof __propDef.events;
export type Clock4FillSlots = typeof __propDef.slots;
export default class Clock4Fill extends SvelteComponentTyped<Clock4FillProps, Clock4FillEvents, Clock4FillSlots> {
}
export {};
