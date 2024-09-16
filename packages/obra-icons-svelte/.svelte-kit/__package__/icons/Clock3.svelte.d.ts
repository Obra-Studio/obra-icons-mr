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
export type Clock3Props = typeof __propDef.props;
export type Clock3Events = typeof __propDef.events;
export type Clock3Slots = typeof __propDef.slots;
export default class Clock3 extends SvelteComponentTyped<Clock3Props, Clock3Events, Clock3Slots> {
}
export {};
