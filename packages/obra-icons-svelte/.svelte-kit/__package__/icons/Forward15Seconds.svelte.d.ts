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
export type Forward15SecondsProps = typeof __propDef.props;
export type Forward15SecondsEvents = typeof __propDef.events;
export type Forward15SecondsSlots = typeof __propDef.slots;
export default class Forward15Seconds extends SvelteComponentTyped<Forward15SecondsProps, Forward15SecondsEvents, Forward15SecondsSlots> {
}
export {};
