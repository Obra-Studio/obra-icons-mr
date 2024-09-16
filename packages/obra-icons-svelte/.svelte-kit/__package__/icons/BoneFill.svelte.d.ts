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
export type BoneFillProps = typeof __propDef.props;
export type BoneFillEvents = typeof __propDef.events;
export type BoneFillSlots = typeof __propDef.slots;
export default class BoneFill extends SvelteComponentTyped<BoneFillProps, BoneFillEvents, BoneFillSlots> {
}
export {};
