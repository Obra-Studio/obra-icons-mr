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
export type PreviousFillProps = typeof __propDef.props;
export type PreviousFillEvents = typeof __propDef.events;
export type PreviousFillSlots = typeof __propDef.slots;
export default class PreviousFill extends SvelteComponentTyped<PreviousFillProps, PreviousFillEvents, PreviousFillSlots> {
}
export {};
