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
export type VialFillProps = typeof __propDef.props;
export type VialFillEvents = typeof __propDef.events;
export type VialFillSlots = typeof __propDef.slots;
export default class VialFill extends SvelteComponentTyped<VialFillProps, VialFillEvents, VialFillSlots> {
}
export {};
