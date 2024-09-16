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
export type EnterRightProps = typeof __propDef.props;
export type EnterRightEvents = typeof __propDef.events;
export type EnterRightSlots = typeof __propDef.slots;
export default class EnterRight extends SvelteComponentTyped<EnterRightProps, EnterRightEvents, EnterRightSlots> {
}
export {};
