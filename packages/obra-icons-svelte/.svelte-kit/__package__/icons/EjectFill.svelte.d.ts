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
export type EjectFillProps = typeof __propDef.props;
export type EjectFillEvents = typeof __propDef.events;
export type EjectFillSlots = typeof __propDef.slots;
export default class EjectFill extends SvelteComponentTyped<EjectFillProps, EjectFillEvents, EjectFillSlots> {
}
export {};
