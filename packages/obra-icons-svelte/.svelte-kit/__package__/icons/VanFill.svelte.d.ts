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
export type VanFillProps = typeof __propDef.props;
export type VanFillEvents = typeof __propDef.events;
export type VanFillSlots = typeof __propDef.slots;
export default class VanFill extends SvelteComponentTyped<VanFillProps, VanFillEvents, VanFillSlots> {
}
export {};
